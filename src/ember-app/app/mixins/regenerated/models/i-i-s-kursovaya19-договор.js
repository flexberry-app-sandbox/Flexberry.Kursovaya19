import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  длительность: DS.attr('number'),
  номер: DS.attr('number'),
  статус: DS.attr('i-i-s-kursovaya19-статус'),
  стоимость: DS.attr('number'),
  тип: DS.attr('i-i-s-kursovaya19-тип-договора'),
  дирОтдПоРабСКл: DS.belongsTo('i-i-s-kursovaya19-дир-отд-по-раб-с-кл', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-kursovaya19-клиент', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya19-договор.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  длительность: {
    descriptionKey: 'models.i-i-s-kursovaya19-договор.validations.длительность.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-kursovaya19-договор.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-kursovaya19-договор.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-kursovaya19-договор.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-kursovaya19-договор.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дирОтдПоРабСКл: {
    descriptionKey: 'models.i-i-s-kursovaya19-договор.validations.дирОтдПоРабСКл.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-kursovaya19-договор.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДоговорE', 'i-i-s-kursovaya19-договор', {
    стоимость: attr('Стоимость', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    номер: attr('Номер', { index: 2 }),
    тип: attr('Тип', { index: 3 }),
    длительность: attr('Длительность', { index: 4 }),
    статус: attr('Статус', { index: 5 }),
    дирОтдПоРабСКл: belongsTo('i-i-s-kursovaya19-дир-отд-по-раб-с-кл', '', {
      фамилия: attr('', { index: 6 }),
      имя: attr('', { index: 7 }),
      отчество: attr('', { index: 8 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-kursovaya19-клиент', '', {
      фамилия: attr('', { index: 9 }),
      имя: attr('', { index: 10 }),
      отчество: attr('', { index: 11 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('ДоговорL', 'i-i-s-kursovaya19-договор', {
    стоимость: attr('Стоимость', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    номер: attr('Номер', { index: 2 }),
    тип: attr('Тип', { index: 3 }),
    длительность: attr('Длительность', { index: 4 }),
    статус: attr('Статус', { index: 5 }),
    дирОтдПоРабСКл: belongsTo('i-i-s-kursovaya19-дир-отд-по-раб-с-кл', '', {
      фамилия: attr('', { index: 6 }),
      имя: attr('', { index: 7 }),
      отчество: attr('', { index: 8 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-kursovaya19-клиент', '', {
      фамилия: attr('', { index: 9 }),
      имя: attr('', { index: 10 }),
      отчество: attr('', { index: 11 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('ЗаключДоговораE', 'i-i-s-kursovaya19-договор', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    тип: attr('Тип', { index: 2 }),
    длительность: attr('', { index: 3 }),
    стоимость: attr('Стоимость', { index: 4 })
  });

  modelClass.defineProjection('ЗаключДоговораL', 'i-i-s-kursovaya19-договор', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    тип: attr('Тип', { index: 2 }),
    длительность: attr('', { index: 3 }),
    стоимость: attr('Стоимость', { index: 4 })
  });
};
