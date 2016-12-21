'use strict';

const authEvents = require('./auth/events.js');
//const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const gearScroll = require('./animations.gears.js');
//const stripeEvents = require('./stripe/stripe-events.js');

$(() => {
//  setAPIOrigin(location, config);
//  stripeEvents.addHandlers();
  authEvents.addHandlers();
  gearScroll.gearScroll();
  gearScroll.browser_transform();
  $('#gear1').scroll(gearScroll);
});
