var app = angular.module('pauseApp', ['angular-meteor', 'ui.router']);

function onReady() {
	console.log ("on ready is called");
	angular.bootstrap(document, ['pauseApp']);
}

if (Meteor.isCordova) {
	angular.element(document).on("deviceready", onReady);
}
else {
	angular.element(document).ready(onReady);
}
