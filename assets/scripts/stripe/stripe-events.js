'use strict';

const config = require('../config.js');
const api = require('./stripe-api');
const ui = require('./stripe-ui');
const productUi = require('../product-cart/ui.js');
const store = require('../store.js');

let total = store.totalCart;
console.log(store.totalCart);
let currentOrder = {
  "order": cart.cartObj
};


let handler = StripeCheckout.configure({
  key: 'pk_test_ZicDosGpK54r5KAwOjXd83bk',
  image: '',
  locale: 'auto',
  token: function(token) {
    let credentials = {
      stripeToken: token.id,
      // amount: 65.00 //for test
      // amount: total * 100
    };
    api.addStripeCharge(credentials).then(ui.success).catch(ui.failure);
  }
});


const onCheckout = (event) => {
  event.preventDefault();
  let total = store.totalCart;
  // if (!app.user || currentOrder.order.total === 0) {
  //   return;
  // }
  // let data = currentOrder;
  // api.createOrder(data)
  //   .then(ui.createOrderSuccess)
  //   .catch(ui.failure);

  handler.open({
    name: 'ModSquad',
    description: 'purchase',
    // closed: function() {
    //   api.changePaidStatus().then(ui.changePaidStatusSuccess).catch(ui.failure);
    // },
    // amount: currentOrder.order.total * 100
    // amount: 65.00 //for test
    amount: total

  });
  console.log(total);
};

const addHandlers = () => {

  $('#checkout-button').on('click', onCheckout);
  $(window).on('popstate', function() {
    handler.close();
  });
};

module.exports = {
  addHandlers,
};
