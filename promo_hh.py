# coding=utf-8

import sys
import logging
from logging.handlers import RotatingFileHandler

from flask import Flask, render_template, send_from_directory, request, redirect, url_for, jsonify
from flask_mail import Mail, Message
from flask_recaptcha import ReCaptcha


app = Flask(__name__)
app.config.from_object('settings.Config')

handler = RotatingFileHandler('mail.log', maxBytes=10000, backupCount=1, encoding='utf-8')
handler.setLevel(logging.INFO)
handler.setFormatter(logging.Formatter('%(asctime)s\n%(message)s\n\n'))
app.logger.addHandler(handler)

mail = Mail()
mail.init_app(app)

recaptcha = ReCaptcha()
recaptcha.init_app(app)


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/static/<path:path>')
def send_js(path):
    return send_from_directory('/', path)


@app.route('/request/email/', methods=['POST'])
def by_email():
    if not recaptcha.verify():
        response = jsonify({
            'message': 'Sorry, but you are robot. Call some human to pass through.'
        })
        response.status_code = 403
        return response
    name = request.form.get('name', '')
    email = request.form.get('email')
    send_message(app.config.get('EMAIL_REQUEST_TEMPLATE').decode('utf-8') % locals())
    return redirect(url_for('index'))


@app.route('/request/phone/', methods=['POST'])
def by_phone():
    if not recaptcha.verify():
        response = jsonify({
            'message': 'Sorry, but you are robot. Call some human to pass through.'
        })
        response.status_code = 403
        return response
    name = request.form.get('name')
    phone = request.form.get('phone')
    send_message(app.config.get('PHONE_REQUEST_TEMPLATE').decode('utf-8') % locals())
    return redirect(url_for('index'))


def send_message(body):
    msg = Message(app.config.get('MAIL_SUBJECT'),
                  recipients=app.config.get('MAIL_RECIPIENTS'),
                  body=body)
    app.logger.info(body)
    mail.send(msg)


if __name__ == '__main__':
    try:
        host = sys.argv[1]
    except IndexError:
        host = '127.0.0.1'
    try:
        port = int(sys.argv[2])
    except IndexError:
        port = 5000

    app.run(host, port)
