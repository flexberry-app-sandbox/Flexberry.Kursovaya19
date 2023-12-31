import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяКонсульт: DS.attr('number'),
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  предостУслуга: DS.attr('i-i-s-kursovaya19-услуга'),
  договор: DS.belongsTo('i-i-s-kursovaya19-договор', { inverse: null, async: false }),
  переченьУслуг: DS.belongsTo('i-i-s-kursovaya19-перечень-услуг', { inverse: null, async: false }),
  расчетОстВрем: DS.belongsTo('i-i-s-kursovaya19-расчет-ост-врем', { inverse: 'оказКонсулт', async: false })
});

export let ValidationRules = {
  времяКонсульт: {
    descriptionKey: 'models.i-i-s-kursovaya19-оказ-консульт.validations.времяКонсульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya19-оказ-консульт.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-kursovaya19-оказ-консульт.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  предостУслуга: {
    descriptionKey: 'models.i-i-s-kursovaya19-оказ-консульт.validations.предостУслуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  договор: {
    descriptionKey: 'models.i-i-s-kursovaya19-оказ-консульт.validations.договор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  переченьУслуг: {
    descriptionKey: 'models.i-i-s-kursovaya19-оказ-консульт.validations.переченьУслуг.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расчетОстВрем: {
    descriptionKey: 'models.i-i-s-kursovaya19-оказ-консульт.validations.расчетОстВрем.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОказКонсультE', 'i-i-s-kursovaya19-оказ-консульт', {
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
  });
};
