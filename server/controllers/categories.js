'use strict';

var Category = require('../models/category'),
    Bookmark = require('../models/bookmark');

exports.create = function(req, res){
  Category.create(req.body, req.user, function(err, category){
    res.send({category:category});
  });
};

exports.all = function(req, res){
  Category.allByUserId(req.user._id, function(err, categories){
    Bookmark.allByUserId(req.user._id, function(err, bookmarks){
      res.send({categories:categories, bookmarks:bookmarks});
    });
  });
};
