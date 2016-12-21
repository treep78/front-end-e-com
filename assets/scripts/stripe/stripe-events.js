'use strict';

const productUi = require('../product-cart/ui.js');
const store = require('../store.js');


let handler = StripeCheckout.configure({
  key: 'pk_test_ZicDosGpK54r5KAwOjXd83bk',
  image: '',
  locale: 'auto',
  token: function(token) {
    let credentials = {
      stripeToken: token.id
    };
    productUi.StripeCheckoutSuccess();
  }
});


const onCheckout = (event) => {
  event.preventDefault();
  let total = store.totalCart;


  handler.open({
    name: 'ModSquad',
    description: 'purchase',
    amount: total
  });
  // console.log(total);
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
