import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya19-дир-отд-по-раб-с-кл', 'Unit | Serializer | i-i-s-kursovaya19-дир-отд-по-раб-с-кл', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya19-дир-отд-по-раб-с-кл',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya19-статус',
    'transform:i-i-s-kursovaya19-тип-договора',
    'transform:i-i-s-kursovaya19-услуга',

    'model:i-i-s-kursovaya19-дир-отд-по-раб-с-кл',
    'model:i-i-s-kursovaya19-договор',
    'model:i-i-s-kursovaya19-затр-время',
    'model:i-i-s-kursovaya19-клиент',
    'model:i-i-s-kursovaya19-оказ-консульт',
    'model:i-i-s-kursovaya19-перечень-услуг',
    'model:i-i-s-kursovaya19-расчет-ост-врем',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
