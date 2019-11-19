var apiUrl = 'https://api.mercadolibre.com/';
var itemsSearch = 'sites/MLA/search?q=';
var item = 'items/';

var api = {
  items: apiUrl + itemsSearch,
  item: apiUrl + item
};

module.exports = api;