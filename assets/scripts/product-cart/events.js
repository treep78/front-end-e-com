'use strict';
const api = require('./api');
const ui = require('./ui');
// const getFormFields = require('../../../lib/get-form-fields');

// const onGetAllProducts = function(){
//
// };

const onAddItem = function(data, event){
  event.preventDefault();
  console.log('ADD ME!', data);
  // api.addItem(data)
  //   .then(ui.addItemSuccess)
  //   .catch(ui.addItemFailure);
};


const onGetOneProduct = function(event){
  event.preventDefault();
  let productId = event.target.getAttribute('data-id');
  console.log('this is the productId', productId);
  api.getOneProduct(productId)
    .then(ui.getOneProductSuccess)
    .then(function(data){
      $('.cart-add').on('click', onAddItem(data));
    })
    .catch(ui.getOneProductFailure);
};

const onGetAllProducts = function(data){
  // event.preventDefault();
  console.log('You have ALL products.');
  api.getAllProducts(data)
    .then(ui.getAllProductsSuccess)
    .then(function(){
      $('.prod-desc').on('click', onGetOneProduct);
    })
    .catch(ui.getAllProductsFailure);
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
  // $('.cart-add').on('click', onAddItem);
  $('#delete-item-from-cart').on('click', onDeleteItem);
  $('#update-item-in-cart').on('click', onUpdateItem);
  $('#get-cart').on('click', onGetItems);
  $('#get-order-history').on('click', onGetOrderHx);
  $('#get-all-products').on('click', onGetOrderHx);
};

module.exports = {
  addCartHandlers,
  onGetAllProducts,
};
