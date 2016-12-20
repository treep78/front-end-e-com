'use strict';

const config = require('../config.js');
const store = require('../store.js');

const createOrder = (data) => {

  return new Promise((resolve, reject) => {
    return $.ajax({
      url: config.host + '/orders',
      method: "POST",
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
      data,
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const addStripeCharge = (data) => {
  // console.log(data);
  return new Promise((resolve, reject) => {
    return $.ajax({
      url: config.host + '/charge',
      method: "POST",
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
      data,
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const changePaidStatus = () => {
  return new Promise((resolve, reject) => {
    return $.ajax({
      url: config.host + '/orders/' + store.order._id,
      method: "PATCH",
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
      data: {
        "order": {
          "paid": true
        }
      },
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

module.exports = {
  createOrder,
  addStripeCharge,
  changePaidStatus,
};
