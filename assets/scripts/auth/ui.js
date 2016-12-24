'use strict';

const store = require('../store.js');


const signUpSuccess = function(signUpData) {
  $('#sign-up').trigger('reset');
  $('#sign-up-in-modal-messages').html('You\'ve successful signed up!');
  return signUpData;
};

const signUpFailure = function() {
  $('#sign-up-in-modal-messages').html('Oops, something went wrong, trying signing up again.');

  $('#sign-up').trigger('reset');
};

const signInSuccess = function(data) {
  console.log(data.user);
  store.user = data.user;
  store.user.id = data.user._id;
  console.log(store.user);
$('#sign-in').trigger('reset');
$('#sign-up-in-modal-messages').html('You\'ve successfully signed in!');
$('#auth-modal').hide(1000);
// show sign out button, change password buttons, view cart buttons
$('.signed-in').show();
$('.signed-out').hide();
};

const signInFailure = function() {
$('#sign-up-in-modal-messages').html('Oops, something went wrong, trying signing in again.');
$('#sign-in').trigger('reset');
};

const changePasswordSuccess = function() {
$('#change-password').trigger('reset');
$('#change-password-modal-messages').html('You\'ve successfully changed your password.');
};

const changePasswordFailure = function() {
$('#change-password-modal-messages').html('Oops, something went wrong, trying changing your password again.');
};

const signOutSuccess = function() {
  // replace message div content with ('')?
  $('#sign-out-modal-messages').html('You\'ve successfully signed out.');
  // show sign in and sign up buttons
  $('.signed-in').hide();
  $('.signed-out').show();
};

const failure = function() {
$('#sign-out-modal-messages').html('Oops, something went wrong.');
};


module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  failure,
};
