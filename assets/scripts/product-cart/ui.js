'use strict';

const showAllProductsTemplate = require('../templates/product-thumb.handlebars');

const getAllProductsSuccess = function(data) {
  console.log(data);
   $('#all-products').html(showAllProductsTemplate(data));

};

const getAllProductsFailure = function() {

};

module.exports = {
  getAllProductsSuccess,
  getAllProductsFailure,
};
