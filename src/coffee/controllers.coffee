#
#AngularModule: chrisApp
#Name: Christopher EnyTC
#Username: chrisenytc
#Email: chrisenytc@gmail.com
#Site: http://chris.enytc.com
#Github: https://github.com/chrisenytc
#Twitter: @chrisenytc
#

window.indexCtrl = ($scope) ->

window.aboutCtrl = ($scope, $http, $window, $routeParams) ->
  $http.get("/get/employment.json").success (data) ->
    $scope.employment = data
  $http.get("/get/education.json").success (data) ->
    $scope.education = data

window.projectsCtrl = ($scope, $http, $window, $routeParams) ->
  $http.get("https://api.github.com/user/repos?sort=created&direction=desc&type=owner&access_token=a200c6fdf3180091fd4d333812b05334af05630f").success (data) ->
    $scope.status = true
    $scope.repositories = data

window.portfolioCtrl = ($scope, $http, $window, $routeParams) ->
  $http.get("/get/portfolio.json").success (data) ->
    $scope.items = data

window.blogCtrl = ($scope, $http, $window, $routeParams) ->
  $scope.currentPage = 0
  $scope.pageSize = 5
  $http.get("/get/posts.json").success (data) ->
    $scope.posts = data

    $scope.numberOfPages = ->
      Math.ceil $scope.posts.length / $scope.pageSize

window.postCtrl = ($scope, $http, $window, $routeParams) ->

  $http.get("/get/posts.json").success (data) ->
    $scope.posts = data
    search = $.grep($scope.posts, (e, i) ->
      e.slug is $routeParams.slug
    )
    if search.length is 0
      $scope.notfound = true
      $window.location = "/#/404"
    else if search.length is 1
      $scope.post = search[0]
    else
      $scope.notfound = true
      $window.location = "/#/404"

window.contactCtrl = ($scope, $http, $window, $routeParams) ->

  $scope.send = ->
    console.log $scope.data

window.notFoundCtrl = ($scope) ->
