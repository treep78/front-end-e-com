'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');


const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  //console.log('i\'m signed up', data);
  api.signUp(data)
    .then(ui.signUpSuccess)
    // .then(function(signUpData){
    //   api.signUp(signUpData);
    // })
    .catch(ui.signUpFailure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  //console.log('i\'m signed in', data);
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure);
 };

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  // console.log('Changed password...', data);
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure);
};

const onSignOut = function (event) {
  event.preventDefault();
  //console.log('signed out...');
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure);
 };

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
};



module.exports = {
  addHandlers,
};
