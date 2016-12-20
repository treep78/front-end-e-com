'use strict';
const store = require('../store.js');
const showAllProductsTemplate = require('../templates/product-thumb.handlebars');

const showOneProductTemplate = require('../templates/products.handlebars');
const cartTemplate = require('../templates/cart.handlebars');

const getAllProductsSuccess = function(data) {
  store.products = data.products;
  console.log(data);
   $('#all-products').html(showAllProductsTemplate(data));

};

const getAllProductsFailure = function() {

};

const getOneProductSuccess = function(data) {
  console.log('Yay data', data);
   $('#one-product').html(showOneProductTemplate(data));
   return data;
};

const getOneProductFailure = function() {
console.log('FAIL!');
};

const addItemSuccess = function(data) {
  console.log('Item in cart', data);
  //  $('').html((data));
  //  return data;
};

const addItemFailure = function() {
console.log('FAIL!');
};

const getItemsSuccess = function(data) {
  console.log('I\'m in the cart! This is my item data: ', data);
   $('.cart-items').html(cartTemplate(data));
};

const getItemsFailure = function(error) {
console.log('FAIL!, this is the error', error);
};

const deleteItemSuccess = function(data) {
  console.log('deleted', data);
};

const deleteItemFailure = function(error) {
console.log('FAIL!, this is the delete error', error);
};

const updateItemSuccess = function(data) {
  console.log('deleted', data);
};

const updateItemFailure = function(error) {
console.log('FAIL!, this is the update error', error);
};


module.exports = {
  getAllProductsSuccess,
  getAllProductsFailure,
  getOneProductSuccess,
  getOneProductFailure,
  addItemSuccess,
  addItemFailure,
  getItemsSuccess,
  getItemsFailure,
  deleteItemSuccess,
  deleteItemFailure,
  updateItemSuccess,
  updateItemFailure,

};
