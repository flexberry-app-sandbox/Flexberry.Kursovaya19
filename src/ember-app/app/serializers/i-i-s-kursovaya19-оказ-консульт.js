import { Serializer as ОказКонсультSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya19-оказ-консульт';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОказКонсультSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
