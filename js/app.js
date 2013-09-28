/*
AngularModule: chris 
Name: Christopher EnyTC
Username: chrisenytc
Site: http://chris.enytc.com
Github: https://github.com/chrisenytc
Twitter: @chrisenytc

*/

//Module

var app = angular.module('chris', []);

//Routes

app.config(['$routeProvider', function($routeProvider){
    
    $routeProvider.
        when('/', {templateUrl: 'partials/index.html', controller: 'indexCtrl'}).
        when('/index/:name', {templateUrl: 'partials/index.html', controller: 'indexCtrl'}).
        when('/about', {templateUrl: 'partials/about.html', controller: 'aboutCtrl'}).
        when('/projects', {templateUrl: 'partials/projects.html', controller: 'projectsCtrl'}).
        when('/projects/github', {templateUrl: 'partials/github.html', controller: 'gitHubCtrl'}).
        when('/blog', {templateUrl: 'partials/blog.html', controller: 'blogCtrl'}).
        when('/contact', {templateUrl: 'partials/contact.html', controller: 'contactCtrl'}).
        when('/404', {templateUrl: 'partials/404.html', controller: 'notFoundCtrl'}).
        otherwise({redirectTo: '/404'});
}]);

//jQuery Functions

$(document).ready(function(){
    
    var getURI = window.location.href;
    
    //Menu
        $('#navbar li > ul').hide();
        
        $('#navbar li a').click(function(){
            $('#navbar li').removeClass('active');
            $(this).parent().addClass("active");
            $(this).next().toggle();
            
        });
        
    //Pagination
    
    
});