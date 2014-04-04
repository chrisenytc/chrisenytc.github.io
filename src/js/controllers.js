window.indexCtrl = function($scope) {};

window.aboutCtrl = function($scope, $http, $window, $routeParams) {
  $http.get("/get/employment.json").success(function(data) {
    return $scope.employment = data;
  });
  return $http.get("/get/education.json").success(function(data) {
    return $scope.education = data;
  });
};

window.projectsCtrl = function($scope, $http, $window, $routeParams) {
  return $http.get("https://api.github.com/user/repos?sort=created&direction=desc&type=owner&access_token=a200c6fdf3180091fd4d333812b05334af05630f").success(function(data) {
    $scope.status = true;
    return $scope.repositories = data;
  });
};

window.portfolioCtrl = function($scope, $http, $window, $routeParams) {
  return $http.get("/get/portfolio.json").success(function(data) {
    return $scope.items = data;
  });
};

window.blogCtrl = function($scope, $http, $window, $routeParams) {
  $scope.currentPage = 0;
  $scope.pageSize = 5;
  return $http.get("/get/posts.json").success(function(data) {
    $scope.posts = data;
    return $scope.numberOfPages = function() {
      return Math.ceil($scope.posts.length / $scope.pageSize);
    };
  });
};

window.postCtrl = function($scope, $http, $window, $routeParams) {
  return $http.get("/get/posts.json").success(function(data) {
    var search;
    $scope.posts = data;
    search = $.grep($scope.posts, function(e, i) {
      return e.slug === $routeParams.slug;
    });
    if (search.length === 0) {
      $scope.notfound = true;
      return $window.location = "/#/404";
    } else if (search.length === 1) {
      return $scope.post = search[0];
    } else {
      $scope.notfound = true;
      return $window.location = "/#/404";
    }
  });
};

window.contactCtrl = function($scope, $http, $window, $routeParams) {
  return $scope.send = function() {
    return console.log($scope.data);
  };
};

window.notFoundCtrl = function($scope) {};
