// Write your package code here!


ClassHelpers = {
  createClass: function(instanceMethods, classMethods) {
    var classConstructor = function(doc) {
      _.extend(this,doc);
    }
    _.extend(classConstructor.prototype, instanceMethods);
    return classConstructor;
  },

  attachClassToCollection: function(klass, collection) {
    var oldTransform = collection._transform;
    collection._transform = function(doc) {
      if(oldTransform) {
        doc = oldTransform(doc);
      }
      _.extend(klass.prototype, {collection: collection});
      return new klass(doc);
    }
  }
}


Mongo.Collection.prototype.attachClass = function(klass) {
  ClassHelpers.attachClassToCollection(klass, this);
}
