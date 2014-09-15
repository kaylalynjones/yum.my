'use strict';

var Category = require('../models/category');

exports.create = function(req, res){
  Category.create(req.body, req.user, function(err, category){
    res.send({category:category});
  });
};

exports.all = function(req, res){
  Category.allByUserId(req.user._id, function(err, categories){
    res.send({categories:categories});
  });
};
