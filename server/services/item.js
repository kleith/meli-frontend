var buildAuthor = require('./author');
var utils = require('../utils');

/**
 * Build response from data
 * @param {Object} itemData     Response item data
 * @param {Object} itemDescData Response item description data
 * @returns {Object}            Response mapped data
 */
function buildResponse(itemData, itemDescData) {
  var author = buildAuthor();
  var item = buildItem(itemData, itemDescData);

  return {
    author,
    item
  };
}

/**
 * Build item from data results
 * @param {Object} item     Item results
 * @param {Object} itemDesc Item description results
 * @returns {Object}        Merged response mapped item
 */
function buildItem(item, itemDesc) {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: utils.getPriceAmount(item.price),
      decimals: utils.getPriceDecimals(item.price)
    },
    picture: item.thumbnail,
    condition: utils.getItemCondition(item.condition),
    free_shipping: item.shipping.free_shipping,
    sold_quantity: item.sold_quantity,
    description: itemDesc.plain_text
  };
}

module.exports = buildResponse;