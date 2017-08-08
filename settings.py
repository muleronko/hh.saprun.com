# -*- coding: utf-8 -*-


class Config(object):
    DEBUG = False
    SECRET_KEY = 'development key'
    MAIL_DEFAULT_SENDER = 'promo-hh@foo.com'

    MAIL_REQUEST_TEMPLATE = 'Поступила заявка на получение демо-доступа: \n\n' \
                            'компания: %(company)s \n' \
                            'имя: %(name)s \n' \
                            'тел: %(phone)s \n' \
                            'e-mail: %(email)s \n' \

    MAIL_SUBJECT = 'HH request'
    MAIL_RECIPIENTS = ['hhive@saprun.com']

    RECAPTCHA_SITE_KEY = '6LeogSQUAAAAAB4lW6uwNuC28hcU6jdQsVF78Uvw'
    RECAPTCHA_SECRET_KEY = '6LeogSQUAAAAAEnF5OvGCwxuw6ETYfpaXwaLUOtf'
    RECAPTCHA_ENABLED = True
