'use strict';

const app = require('../config.js');

const success = (data) => {
  if (data) {

  } else {

  }
};

const failure = (error) => {

};

const createOrderSuccess = (response) => {
  app.order = response.order;
};

const changePaidStatusSuccess = (response) => {

};

module.exports = {
  success,
  failure,
  createOrderSuccess,
  changePaidStatusSuccess,
};
