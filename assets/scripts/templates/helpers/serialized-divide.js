'use strict';

// const store = require('../../store');

module.exports = function (serialized) {
   let serializedPrice = ((serialized.price/100)+'.00');
   return serializedPrice;
};
