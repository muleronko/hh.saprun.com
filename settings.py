# -*- coding: utf-8 -*-


class Config(object):
    DEBUG = False
    SECRET_KEY = 'development key'

    MAIL_DEFAULT_SENDER = 'hhive@saprun.com'
    MAIL_REQUEST_TEMPLATE = 'Поступила заявка! \n\n' \
                            'Тип заявки: %(types)s \n' \
                            'Компания: %(company)s \n' \
                            'Имя: %(name)s \n' \
                            'Тел: %(phone)s \n' \
                            'E-mail: %(email)s \n'
    MAIL_SUBJECT = 'HH-заявка'
    MAIL_RECIPIENTS = ['hhive@saprun.com']
    MAIL_ANSWER = 'Добрый день! Благодарим вас за интерес к мобильной платформе HyperHive. ' \
                  'Подробная документация, включая пошаговое руководство по загрузке и установке, ' \
                  'доступна по ссылке: https://eigenmethod.atlassian.net/wiki/spaces/HH1708RU/overview ' \
                  'Просьба сообщить нам ID инсталляции для предоставления вам временной лицензии. ' \
                  'По любым вопросам вы можете обратиться к нашему менеджеру Денису Носкову: +7 962 705 79 00, ' \
                  '+7 812 438 27 84 (доб. 3326) denis.noskov@saprun.com'

    RECAPTCHA_SITE_KEY = '6LeogSQUAAAAAB4lW6uwNuC28hcU6jdQsVF78Uvw'
    RECAPTCHA_SECRET_KEY = '6LeogSQUAAAAAEnF5OvGCwxuw6ETYfpaXwaLUOtf'
    RECAPTCHA_ENABLED = True
