'use strict';

var Mongo = require('mongodb');

function Bookmark(o, user){
  this.name = o.name;
  this.link = o.link;
  this.categoryId = Mongo.ObjectID(o.categoryId);
  this.userId = user._id;
}

Object.defineProperty(Bookmark, 'collection', {
  get: function(){return global.mongodb.collection('bookmarks');}
});

Bookmark.create = function(o, user, cb){
  var b = new Bookmark(o, user);
  Bookmark.collection.save(b, cb);
};

Bookmark.allByUserId = function(userId, cb){
  Bookmark.collection.find({userId:userId}).toArray(cb);
};

module.exports = Bookmark;

