'use strict';
var express = require('express');
var router = express.Router();

module.exports = function (app) {
  const contentController = require('../controllers/content_controller');

  //Users Routes
  app.get('/contents/',(contentController.allContentList))
  app.post('/contents/',(contentController.createContent));


  /*app.router('/contents/:contentId')
      .get(contentController.viewContent)
      .put(contentController.updateContent)*/
};
