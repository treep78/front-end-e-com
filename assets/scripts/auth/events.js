'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');


const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  console.log('i\'m signed up', data);
  // api.signUp(data)
  //   .then(ui.signUpSuccess)
  //   .then(function(signUpData){
  //     api.signIn(signUpData);
  //   })
  //   .catch(ui.signUpFailure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure);
 };

// const onChangePassword = function (event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure);
// };
//
// const onSignOut = function (event) {
//   event.preventDefault();
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.failure);
//  };

const addHandlers = () => {
  $('#sign-up').on('click', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  // $('#change-password').on('submit', onChangePassword);
  // $('#sign-out').on('submit', onSignOut);
};



module.exports = {
  addHandlers,
};
