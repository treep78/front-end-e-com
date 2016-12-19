'use strict';
const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');

// const onGetAllProducts = function(){
//
// };

const onGetOneProduct = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log('You have a product.');
  api.getOneProduct()
    .then(ui.getOneProductSuccess)
    .catch(ui.getOneProductFailure);
};

const onGetAllProducts = function(data){
  // event.preventDefault();
  console.log('You have ALL products.');
  api.getAllProducts(data)
    .then(ui.getAllProductsSuccess)
    .catch(ui.getAllProductsFailure);
};


const onAddItem = function(){

};

const onDeleteItem = function(){

};

const onUpdateItem = function(){

};

const onGetItems  = function(){

};

const onGetOrderHx   = function(){

};



const addCartHandlers = function() {
  $('#add-item-to-cart').on('click', onAddItem);
  $('#delete-item-from-cart').on('click', onDeleteItem);
  $('#update-item-in-cart').on('click', onUpdateItem);
  $('#get-cart').on('click', onGetItems);
  $('#get-order-history').on('click', onGetOrderHx);
  $('#get-all-products').on('click', onGetOrderHx);
  $('#get-one-product').on('click', onGetOneProduct);
};

module.exports = {
  addCartHandlers,
  onGetAllProducts,
};
