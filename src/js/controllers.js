window.indexCtrl = function($scope) {
  var $;
  return $ = jQuery;
};

window.aboutCtrl = function($scope, $http, $window, $routeParams) {
  var $;
  $ = jQuery;
  $http.get("/get/employment.json").success(function(data) {
    return $scope.employment = data;
  });
  return $http.get("/get/education.json").success(function(data) {
    return $scope.education = data;
  });
};

window.projectsCtrl = function($scope, $http, $window, $routeParams) {
  var $;
  $ = jQuery;
  return $http.get("https://api.github.com/users/chrisenytc/repos").success(function(data) {
    $scope.status = true;
    return $scope.repositories = data;
  });
};

window.portfolioCtrl = function($scope, $http, $window, $routeParams) {
  var $;
  $ = jQuery;
  return $http.get("/get/portfolio.json").success(function(data) {
    return $scope.items = data;
  });
};

window.blogCtrl = function($scope, $http, $window, $routeParams) {
  var $;
  $ = jQuery;
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
  var $;
  $ = jQuery;
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
  var $;
  $ = jQuery;
  return $scope.send = function() {
    return console.log($scope.data);
  };
};

window.notFoundCtrl = function($scope) {
  var $;
  return $ = jQuery;
};
