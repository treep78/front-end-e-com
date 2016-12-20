'use strict';

const authEvents = require('../scripts/auth/events.js');

const productEvents = require('../scripts/product-cart/events.js');

// const cartEvents = require('../scripts/cart/cart_events.js');
const stripeEvents = require('../scripts/stripe/stripe-events.js');

$(()=>{
  authEvents.addHandlers();
  productEvents.addCartHandlers();
  productEvents.onGetAllProducts();
  stripeEvents.addHandlers();

});
