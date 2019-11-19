/**
 * Get the condition translated
 * @param {string} condition
 * @returns {string}
 */
function getItemCondition(condition) {
  return condition === 'new' ? 'Nuevo' : 'Usado';
}

/**
 * Get the price amount 
 * @param {number} price
 * @returns {number}
 */
function getPriceAmount(price) {
  return Number.parseInt(price);
}

/**
 * Get the price decimals 
 * @param {number} price
 * @returns {number}
 */
function getPriceDecimals(price) {
  return Number.parseInt(price.toString().split('.')[1]) || 0;
}

module.exports = {
  getItemCondition,
  getPriceAmount,
  getPriceDecimals
};