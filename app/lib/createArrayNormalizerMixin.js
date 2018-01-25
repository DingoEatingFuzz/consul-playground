import Mixin from '@ember/object/mixin';

import capitalize from './capitalize';
import pojo from './pojo';

// mixin factory to promote reuse of rewriting/mapping
// array based api responses to an object containing a property whose value
// is the array.
// Along with optional mapping function to allow remapping of each item
// in the array. Usually used for making sure each object in the array
// has an id/primaryKey with it
// Usage:
// normalize('findAll', (item) => ({primaryKey: item}))
// This will mixin normalizeFindAllResponse and set the primaryKey
// property of each object in the array
// `["one", "two"]` > `{modelName: [{primaryKey: "one"}, {primaryKey: "two"}]}`

export default function(requestName, map) {
  var method = `normalize${capitalize(requestName)}Response`;
  return Mixin.create({
      [method](store, primaryModelClass, payload, id, requestType) {
        return this._super(
          store,
          primaryModelClass,
          pojo(primaryModelClass.modelName)(map == null ? payload : payload.map(map)),
          id,
          requestType
        )
      }
  });
};
