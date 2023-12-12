import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-kursovaya19-расчет-ост-врем-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-kursovaya19-оказ-консульт+переченьУслуг':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: '',
            required: true,
            relationName: 'переченьУслуг',
            projection: 'ПереченьУслугL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
