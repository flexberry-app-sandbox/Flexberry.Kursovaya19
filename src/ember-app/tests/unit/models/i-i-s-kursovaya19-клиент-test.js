import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya19-клиент', 'Unit | Model | i-i-s-kursovaya19-клиент', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
