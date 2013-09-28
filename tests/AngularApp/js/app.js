//Definimos nosso Controller junto com as propriedades que vamos usar.
//Não é obrigatório colocar 'Ctrl' no final do nome do controller mais por convenção é interessante usar.
var sh = angular.module('school', []);

sh.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/index', {templateUrl: 'partials/home.html', controller: 'schoolHomeCtrl'}).
		when('/notes', {templateUrl: 'partials/notes.html', controller: 'notesListCtrl'}).
		when('/medium', {templateUrl: 'partials/medium.html', controller: 'mediumListCtrl'}).
		when('/login', {templateUrl: 'partials/login.html', controller: 'loginCtrl'}).
		when('/forgotPassword', {templateUrl: 'partials/forgot.html', controller: 'forgotCtrl'}).
		otherwise({redirectTo: '/index'});
}]);