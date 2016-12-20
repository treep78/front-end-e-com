'use strict';
const api = require('./api');
const ui = require('./ui');
// const store = require('../store.js');
const getFormFields = require('../../../lib/get-form-fields');

// const onGetAllProducts = function(){
//
// };



const onUpdateItem = function(event){
  event.preventDefault();
  let itemId = event.target.getAttribute('data-id');
  // let data = getFormFields(this);
  let data = {item: {count: 4}};
  console.log('I\'m UPDATED itemId and countData', itemId, data);
  debugger;
  api.updateItem(itemId, data)
  .then(ui.updateItemSuccess)
  .catch(ui.updateItemFailure);
};

const onDeleteItem = function(){
  let id = event.target.getAttribute('data-id');
  console.log('DELETED', id);
  api.deleteItem(id)
    .then(ui.deleteItemSuccess)
    .catch(ui.deleteItemFailure);
};

const onGetItems  = function(){
  console.log('All the items of the cart!');
  api.getItems()
    .then(ui.getItemsSuccess)
    .then(function(){
      $('.update-form').on('submit', onUpdateItem);
      $('.delete-cart-item').on('click', onDeleteItem);
    })
    .catch(ui.getItemsFailure);
};

const onAddItem = function(event){
  event.preventDefault();
  let countData = getFormFields(event.target);
  console.log('this is the event', event);
  console.log('ADD ME!', 'countData', countData);
    api.addItem(countData)
    .then(ui.addItemSuccess)
    .then(function(data){
      onGetItems(data);
      // $('.update-cart-item').on('submit', onUpdateItem);
      // $('.delete-cart-item').on('click', onDeleteItem);
    })
    .catch(ui.addItemFailure);
};


const onGetOneProduct = function(event){
  event.preventDefault();
  let productId = event.target.getAttribute('data-id');
  console.log('this is the productId', productId);
  api.getOneProduct(productId)
    .then(ui.getOneProductSuccess)
    .then(function(data){
      console.log('this is data, after getOneProductSuccess', data);
      $('.product-to-cart').on('submit', onAddItem);
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








const onGetOrderHx   = function(){

};


const addCartHandlers = function() {
  // $('#delete-item-from-cart').on('click', onDeleteItem);
  // $('#update-item-in-cart').on('click', onUpdateItem);
  $('#get-order-history').on('click', onGetOrderHx);
  $('#get-all-products').on('click', onGetOrderHx);
};

module.exports = {
  addCartHandlers,
  onGetAllProducts,
};
