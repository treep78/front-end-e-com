'use strict';

const authEvents = require('../scripts/auth/events.js');
const cartEvents = require('../scripts/product-cart/events.js');

$(()=>{
  authEvents.addHandlers();
  cartEvents.addCartHandlers();
  cartEvents.onGetAllProducts();
});
