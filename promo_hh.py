# -*- coding: utf-8 -*-

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


def send_message(subject, recipients, body, sender=None):
    msg = Message(subject=subject,
                  recipients=recipients,
                  body=body,
                  sender=sender)
    app.logger.info(body)
    mail.send(msg)


@app.route('/demo-request/', methods=['POST'])
def demo_request():
    if not recaptcha.verify():
        response = jsonify({
            'message': 'Sorry, but you are robot. Call some human to pass through.'
        })
        response.status_code = 403
        return response
    company = request.form.get('company')
    name = request.form.get('name')
    phone = request.form.get('phone')
    email = request.form.get('email')
    types = request.form.get('types')
    # отправляем уведомление о заявке
    send_message(subject=app.config.get('MAIL_SUBJECT'),
                 recipients=[app.config.get('MAIL_RECIPIENT')],
                 body=app.config.get('MAIL_REQUEST_TEMPLATE').decode('utf-8') % locals(),
                 sender='promo-hh@foo.com')
    # отправляем автоответ на заявку
    send_message(subject=app.config.get('MAIL_SUBJECT'),
                 recipients=[email],
                 body=app.config.get('MAIL_ANSWER'))

    return redirect(url_for('index'))


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
