var apiUrl = 'https://api.mercadolibre.com/';
var itemsSearch = 'sites/MLA/search?q=';
var item = 'items/';
var categories = 'categories/';

var api = {
  items: apiUrl + itemsSearch,
  item: apiUrl + item,
  categories: apiUrl + categories
};

module.exports = api;