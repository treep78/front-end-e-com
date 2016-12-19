'use strict';

const config = require('../config.js');
// const store = require('../store.js');

const getOneProduct = (id) =>
    $.ajax ({
    url: config.host + '/products/' + id,
    method: 'GET',
  });


const getAllProducts = () =>
    $.ajax ({
    url: config.host + '/products',
    method: 'GET',
  });

  module.exports = {
    getOneProduct,
    getAllProducts,
  };
