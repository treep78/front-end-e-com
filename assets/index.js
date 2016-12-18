'use strict';

const authEvents = require('./auth/events.js');
//const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

//const stripeEvents = require('./stripe/stripe-events.js');

$(() => {
//  setAPIOrigin(location, config);
//  stripeEvents.addHandlers();
  authEvents.addHandlers();
});
