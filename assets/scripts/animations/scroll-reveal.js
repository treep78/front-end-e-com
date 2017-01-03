'use strict';

const revealWatch = function(element1, element2){
  window.sr.reveal(element1, {
  distance: '250px',
  duration: 800,
  delay: 400,
  origin: 'left',
  opacity: 0,
  viewFactor: 0.1,
  reset: true
});
  window.sr.reveal(element2, {
    distance: '250px',
    duration: 800,
    delay: 400,
    origin: 'bottom',
    opacity: 0,
    viewFactor: 0.1,
    reset: true
  });
};

module.exports = {
  revealWatch,
};
