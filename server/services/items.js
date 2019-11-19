var buildAuthor = require('./author');
var utils = require('../utils');

/**
 * Build response from data
 * @param {Object} data Response data
 * @returns {Object}    Response mapped data
 */
function buildResponse(data) {
  var author = buildAuthor();
  var items = buildItems(data.results);
  var categories = buildCategories(data.filters[0]);

  return {
    author,
    categories,
    items
  };
}

/**
 * Build items from data results
 * @param {Array} items List items results
 * @returns {Array}     Response mapped list
 */
function buildItems(items) {
  return items.map(function(value) {
    return {
      id: value.id,
      title: value.title,
      price: {
        currency: value.currency_id,
        amount: utils.getPriceAmount(value.price),
        decimals: utils.getPriceDecimals(value.price)
      },
      picture: value.thumbnail,
      condition: utils.getItemCondition(value.condition),
      free_shipping: value.shipping.free_shipping
    };
  });
}

/**
 * Build categories from data filter
 * @param {Object} categories First filter from category
 * @returns {Array}           Response mapped categories
 */
function buildCategories(categories) {
  // validate that exist a value
  if (!categories || !categories.values || !categories.values[0].path_from_root) {
    return [];
  }

  return categories.values[0].path_from_root.map(function(value) {
    return value.name;
  });
}

module.exports = buildResponse;