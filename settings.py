# coding=utf-8


class Config(object):
    DEBUG = False
    SECRET_KEY = 'development key'
    MAIL_DEFAULT_SENDER = 'promo-hh@foo.com'
    EMAIL_REQUEST_TEMPLATE = 'Поступила заявка на получение демо-доступа: \n\n' \
                             'имя: %(name)s \n' \
                             'email: %(email)s'

    PHONE_REQUEST_TEMPLATE = 'Поступила заявка на получение демо-доступа: \n\n' \
                             'имя: %(name)s \n' \
                             'тел: %(phone)s'

    MAIL_SUBJECT = 'HH request'
    MAIL_RECIPIENTS = ['maksim.glebov@saprun.com']

    RECAPTCHA_SITE_KEY = '6LeogSQUAAAAAB4lW6uwNuC28hcU6jdQsVF78Uvw'
    RECAPTCHA_SECRET_KEY = '6LeogSQUAAAAAEnF5OvGCwxuw6ETYfpaXwaLUOtf'
    RECAPTCHA_ENABLED = True
