import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  было: DS.attr('number'),
  доступно: DS.attr('number'),
  использовано: DS.attr('number'),
  оказКонсулт: DS.hasMany('i-i-s-kursovaya19-оказ-консульт', { inverse: 'расчетОстВрем', async: false })
});

export let ValidationRules = {
  было: {
    descriptionKey: 'models.i-i-s-kursovaya19-расчет-ост-врем.validations.было.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  доступно: {
    descriptionKey: 'models.i-i-s-kursovaya19-расчет-ост-врем.validations.доступно.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  использовано: {
    descriptionKey: 'models.i-i-s-kursovaya19-расчет-ост-врем.validations.использовано.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  оказКонсулт: {
    descriptionKey: 'models.i-i-s-kursovaya19-расчет-ост-врем.validations.оказКонсулт.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетОстВремE', 'i-i-s-kursovaya19-расчет-ост-врем', {
    было: attr('Начальный остаток', { index: 0 }),
    доступно: attr('Доступно', { index: 1 }),
    использовано: attr('Израсходовано', { index: 2 }),
    оказКонсулт: hasMany('i-i-s-kursovaya19-оказ-консульт', '', {
      дата: attr('Дата', { index: 0 }),
      номер: attr('', { index: 1 }),
      времяКонсульт: attr('Время консульт', { index: 2 }),
      предостУслуга: attr('Предост услуга', { index: 3 }),
      договор: belongsTo('i-i-s-kursovaya19-договор', 'Номер договора', {
        номер: attr('Номер договора', { index: 4 })
      }, { index: -1, hidden: true }),
      переченьУслуг: belongsTo('i-i-s-kursovaya19-перечень-услуг', '', {
        наименование: attr('', { index: 6 }),
        затрВремя: belongsTo('i-i-s-kursovaya19-затр-время', '', {
          время: attr('', { index: 7 })
        }, { index: -1, hidden: true })
      }, { index: 5 })
    })
  });

  modelClass.defineProjection('РасчетОстВремL', 'i-i-s-kursovaya19-расчет-ост-врем', {
    было: attr('Начальный остаток', { index: 0 }),
    доступно: attr('Доступно', { index: 1 }),
    использовано: attr('Израсходовано', { index: 2 })
  });
};
