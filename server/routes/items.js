var express = require('express');
var axios = require('axios');
var buildItems = require('../services/items');
var buildItem = require('../services/item');
var MELIAPI = require('../utils/meli-api');

var router = express.Router();

/**
 * Get items promise
 * @param {Object} req Request object
 * @returns {Promise}
 */
function getItems(req) {
  return axios.get(MELIAPI.items, {
    params: {
      q: req.query.q,
      limit: req.query.limit || 4,
      offset: req.query.offset || 1
    },
    timeout: 10000
  });
}

/**
 * Get item promise
 * @param {Object} req Request object
 * @returns {Promise}
 */
function getItem(req) {
  var urlRequest = MELIAPI.item + req.params.id;
  
  return axios.get(urlRequest, {
    timeout: 10000
  });
}

/**
 * Get item description promise
 * @param {Object} req Request object
 * @returns {Promise}
 */
function getItemDescription(req) {
  var urlRequest = MELIAPI.item + req.params.id + '/description';
  
  return axios.get(urlRequest, {
    timeout: 10000
  });
}

/**
 * Get item merge promise
 * @param {Object} req Request object
 * @returns {Promise}
 */
function getItemData(req) {
  return axios.all([getItem(req), getItemDescription(req)]);
}

// GET items listing
router.get('/', function(req, res) {
  getItems(req).then(function(response) {
    var buildResponse = buildItems(response.data);
    res.json(buildResponse);
  });
});
router.get('/:id', function(req, res) {
  getItemData(req).then(
    axios.spread(function(itemPromise, itemDescPromise) {
      var buildResponse = buildItem(itemPromise.data, itemDescPromise.data);
      res.json(buildResponse);
    })
  );
});

module.exports = router;