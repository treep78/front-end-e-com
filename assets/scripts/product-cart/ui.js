'use strict';
const store = require('../store.js');
const showAllProductsTemplate = require('../templates/product-thumb.handlebars');

const showOneProductTemplate = require('../templates/products.handlebars');
const cartTemplate = require('../templates/cart.handlebars');

const StripeCheckoutSuccess = function(){
  console.log('You\'ve successfully placed your order.');
};

const getAllProductsSuccess = function(data) {
  store.products = data.products;
  console.log('this is get all product data.products', data.products);
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
  console.log('Item quantity updated successfully.', data);
};

const updateItemFailure = function(error) {
  console.log('FAIL!, this is the update error', error);
};

const getPriceTotalSuccess = function(data) {
  console.log('Here is the price total for the items in the cart: ', data);
  // $('.price-total').empty();
  // let totalPrice = ('$'+data).split();
  // if(totalPrice.length>){
  //   totalPrice = totalPrice.splice(-2,0,'.');
  // }
  let total = ('$'+data).split('');
  console.log('this is the total after the first line:', total);
  total.splice(total.length-2,0,'.');
  console.log('this is the total:', total);
  if(total.length > 7){
    total.splice(total.length-6,0,',');
  }
  total = total.join('');
  $('.price-total').html(total);
  store.totalCart = data;
  console.log(store.totalCart);
  return store.totalCart;
};

const getPriceTotalFailure = function(error) {
  console.log('FAIL!, this is the getPriceTotal error.', error);
};

module.exports = {
  StripeCheckoutSuccess,
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
  getPriceTotalSuccess,
  getPriceTotalFailure,

};
