'use strict';

const config = require('../config.js');
const store = require('../store.js');

const getOneProduct = (productId) =>
    $.ajax ({
    url: config.host + '/products/' + productId,
    method: 'GET'
  });


const getAllProducts = () =>
    $.ajax ({
    url: config.host + '/products',
    method: 'GET',
  });

const addItem = (data) =>
    $.ajax ({
    url: config.host + '/items',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    }
  });

  const getItems = () =>
      $.ajax ({
      url: config.host + '/items',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      }
    });

  const deleteItem = (id) =>
    // console.log(store.user);
      $.ajax ({
      url: config.host + '/items/' + id,
      method: 'DELETE',
      headers: {
      Authorization: 'Token token=' + store.user.token,
      }
    });

  const updateItem = (itemId, data) =>
      $.ajax ({
      url: config.host + '/items/' + itemId,
      method: 'PATCH',
      data,
      headers: {
        Authorization: 'Token token=' + store.user.token,
      }
    });


  module.exports = {
    getOneProduct,
    getAllProducts,
    addItem,
    getItems,
    deleteItem,
    updateItem,
  };
