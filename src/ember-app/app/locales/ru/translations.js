import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKursovaya19ДирОтдПоРабСКлLForm from './forms/i-i-s-kursovaya19-дир-отд-по-раб-с-кл-l';
import IISKursovaya19ДоговорLForm from './forms/i-i-s-kursovaya19-договор-l';
import IISKursovaya19ЗатрВремяLForm from './forms/i-i-s-kursovaya19-затр-время-l';
import IISKursovaya19КлиентLForm from './forms/i-i-s-kursovaya19-клиент-l';
import IISKursovaya19ПереченьУслугLForm from './forms/i-i-s-kursovaya19-перечень-услуг-l';
import IISKursovaya19РасчетОстВремLForm from './forms/i-i-s-kursovaya19-расчет-ост-врем-l';
import IISKursovaya19ДирОтдПоРабСКлEForm from './forms/i-i-s-kursovaya19-дир-отд-по-раб-с-кл-e';
import IISKursovaya19ДоговорEForm from './forms/i-i-s-kursovaya19-договор-e';
import IISKursovaya19ЗатрВремяEForm from './forms/i-i-s-kursovaya19-затр-время-e';
import IISKursovaya19КлиентEForm from './forms/i-i-s-kursovaya19-клиент-e';
import IISKursovaya19ПереченьУслугEForm from './forms/i-i-s-kursovaya19-перечень-услуг-e';
import IISKursovaya19РасчетОстВремEForm from './forms/i-i-s-kursovaya19-расчет-ост-врем-e';
import IISKursovaya19ДирОтдПоРабСКлModel from './models/i-i-s-kursovaya19-дир-отд-по-раб-с-кл';
import IISKursovaya19ДоговорModel from './models/i-i-s-kursovaya19-договор';
import IISKursovaya19ЗатрВремяModel from './models/i-i-s-kursovaya19-затр-время';
import IISKursovaya19КлиентModel from './models/i-i-s-kursovaya19-клиент';
import IISKursovaya19ОказКонсультModel from './models/i-i-s-kursovaya19-оказ-консульт';
import IISKursovaya19ПереченьУслугModel from './models/i-i-s-kursovaya19-перечень-услуг';
import IISKursovaya19РасчетОстВремModel from './models/i-i-s-kursovaya19-расчет-ост-врем';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya19-дир-отд-по-раб-с-кл': IISKursovaya19ДирОтдПоРабСКлModel,
    'i-i-s-kursovaya19-договор': IISKursovaya19ДоговорModel,
    'i-i-s-kursovaya19-затр-время': IISKursovaya19ЗатрВремяModel,
    'i-i-s-kursovaya19-клиент': IISKursovaya19КлиентModel,
    'i-i-s-kursovaya19-оказ-консульт': IISKursovaya19ОказКонсультModel,
    'i-i-s-kursovaya19-перечень-услуг': IISKursovaya19ПереченьУслугModel,
    'i-i-s-kursovaya19-расчет-ост-врем': IISKursovaya19РасчетОстВремModel
  },

  'application-name': 'Kursovaya19',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya19',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya19',
          title: 'Kursovaya19'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        kursovaya19: {
          caption: 'Kursovaya19',
          title: 'Kursovaya19',
          'i-i-s-kursovaya19-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-kursovaya19-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          },
          'i-i-s-kursovaya19-перечень-услуг-l': {
            caption: 'Перечень услуг',
            title: ''
          },
          'i-i-s-kursovaya19-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          },
          'i-i-s-kursovaya19-договор-l': {
            caption: 'Договор',
            title: ''
          },
          'i-i-s-kursovaya19-затр-время-l': {
            caption: 'Затр время',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kursovaya19-дир-отд-по-раб-с-кл-l': IISKursovaya19ДирОтдПоРабСКлLForm,
    'i-i-s-kursovaya19-договор-l': IISKursovaya19ДоговорLForm,
    'i-i-s-kursovaya19-затр-время-l': IISKursovaya19ЗатрВремяLForm,
    'i-i-s-kursovaya19-клиент-l': IISKursovaya19КлиентLForm,
    'i-i-s-kursovaya19-перечень-услуг-l': IISKursovaya19ПереченьУслугLForm,
    'i-i-s-kursovaya19-расчет-ост-врем-l': IISKursovaya19РасчетОстВремLForm,
    'i-i-s-kursovaya19-дир-отд-по-раб-с-кл-e': IISKursovaya19ДирОтдПоРабСКлEForm,
    'i-i-s-kursovaya19-договор-e': IISKursovaya19ДоговорEForm,
    'i-i-s-kursovaya19-затр-время-e': IISKursovaya19ЗатрВремяEForm,
    'i-i-s-kursovaya19-клиент-e': IISKursovaya19КлиентEForm,
    'i-i-s-kursovaya19-перечень-услуг-e': IISKursovaya19ПереченьУслугEForm,
    'i-i-s-kursovaya19-расчет-ост-врем-e': IISKursovaya19РасчетОстВремEForm
  },

});

export default translations;
