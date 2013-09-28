#
#AngularModule: chrisApp
#Name: Christopher EnyTC
#Username: chrisenytc
#Email: chrisenytc@gmail.com
#Site: http://chris.enytc.com
#Github: https://github.com/chrisenytc
#Twitter: @chrisenytc
#

#Module
app = angular.module('chrisApp', [])

#Routes
app.config ['$routeProvider', ($routeProvider) ->
  $routeProvider.when('/',
    templateUrl: 'views/index.html'
    controller: 'indexCtrl'
  ).when('/about',
    templateUrl: 'views/about.html'
    controller: 'aboutCtrl'
  ).when('/projects',
    templateUrl: 'views/projects.html'
    controller: 'projectsCtrl'
  ).when('/portfolio',
    templateUrl: 'views/portfolio.html'
    controller: 'portfolioCtrl'
  ).when('/blog',
    templateUrl: 'views/blog.html'
    controller: 'blogCtrl'
  ).when('/blog/:slug',
    templateUrl: 'views/post.html'
    controller: 'postCtrl'
  ).when('/contact',
    templateUrl: 'views/contact.html'
    controller: 'contactCtrl'
  ).when('/404',
    templateUrl: 'views/404.html'
    controller: 'notFoundCtrl'
  ).otherwise redirectTo: '/404'
]

app.filter "startFrom", ->
  (input, start) ->
    try
      start = +start
      input.slice start
    catch e
      


$(document).ready ->
  $('.author').tooltip 'toogle'
  $('.repo-title').tooltip 'toogle'
  $('.carousel').carousel()
  $('.main-nav ul li a').on 'click', ->
      $('.main-nav ul li').removeClass('active')
      $(this).parent().addClass('active')