var app = angular.module('pauseApp', [
  'angular-meteor', 
  'ui.router',
  'accounts.ui'
]);

function onReady() {
	console.log ("on ready is called");
	angular.bootstrap(document, ['pauseApp']);
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}

if (Meteor.isCordova) {
	angular.element(document).on("deviceready", onReady);
}
else {
	angular.element(document).ready(onReady);
}