'use strict';

var Mongo = require('mongodb');

function Category(o, user){
  this.name = o.name;
  this.userId = user._id;
}

Object.defineProperty(Category, 'collection', {
  get: function(){return global.mongodb.collection('categories');}
});

Category.create = function(o, user, cb){
  var c = new Category(o, user);
  Category.collection.save(c, cb);
};

Category.allByUserId = function(userId, cb){
  var _id = Mongo.ObjectID(userId);
  Category.collection.find({userId:_id}).toArray(cb);
};

module.exports = Category;

