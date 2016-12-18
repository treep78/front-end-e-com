'use strict';

const authEvents = require('../scripts/auth/events.js');

$(()=>{
  authEvents.addHandlers();
});
