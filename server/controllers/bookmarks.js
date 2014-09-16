'use strict';

var Bookmark = require('../models/bookmark');

exports.create = function(req, res){
  Bookmark.create(req.body, req.user, function(err, bookmark){
    res.send({bookmark:bookmark});
  });
};

