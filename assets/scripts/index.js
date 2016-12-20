'use strict';

const authEvents = require('../scripts/auth/events.js');
const cartEvents = require('../scripts/cart/cart_events.js');
const stripeEvents = require('../scripts/stripe/stripe-events.js');

$(()=>{
  authEvents.addHandlers();
  cartEvents.addCartHandlers();
  stripeEvents.addHandlers();
});
