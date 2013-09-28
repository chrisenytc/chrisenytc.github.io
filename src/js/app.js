var app;

app = angular.module('chrisApp', []);

app.config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'views/index.html',
      controller: 'indexCtrl'
    }).when('/about', {
      templateUrl: 'views/about.html',
      controller: 'aboutCtrl'
    }).when('/projects', {
      templateUrl: 'views/projects.html',
      controller: 'projectsCtrl'
    }).when('/portfolio', {
      templateUrl: 'views/portfolio.html',
      controller: 'portfolioCtrl'
    }).when('/blog', {
      templateUrl: 'views/blog.html',
      controller: 'blogCtrl'
    }).when('/blog/:slug', {
      templateUrl: 'views/post.html',
      controller: 'postCtrl'
    }).when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'contactCtrl'
    }).when('/404', {
      templateUrl: 'views/404.html',
      controller: 'notFoundCtrl'
    }).otherwise({
      redirectTo: '/404'
    });
  }
]);

app.filter("startFrom", function() {
  return function(input, start) {
    var e;
    try {
      start = +start;
      return input.slice(start);
    } catch (_error) {
      e = _error;
    }
  };
});

$(document).ready(function() {
  $('.author').tooltip('toogle');
  $('.repo-title').tooltip('toogle');
  $('.carousel').carousel();
  return $('.main-nav ul li a').on('click', function() {
    $('.main-nav ul li').removeClass('active');
    return $(this).parent().addClass('active');
  });
});
