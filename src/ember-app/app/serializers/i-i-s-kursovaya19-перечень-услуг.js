import { Serializer as ПереченьУслугSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya19-перечень-услуг';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПереченьУслугSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
