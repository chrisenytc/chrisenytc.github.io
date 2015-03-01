/*
 * chrisenytc.github.io
 * https://github.com/chrisenytc/chrisenytc.github.io
 *
 * Copyright (c) 2015, EnyTC Corporation
 */

'use strict';

/*
 * Controller: aboutCtrl
 */

window.app.controller('aboutCtrl', ['$scope', '$http',
    function aboutCtrl($scope, $http) {
        // Get data
        $http.get('/get/employments.json').success(function(data) {
            if (angular.isArray(data)) {
                $scope.employments = data;
            }
        });
    }
]);

/*
 * Controller: projectCtrl
 */

window.app.controller('projectCtrl', ['$scope', 'GitHub',
    function projectCtrl($scope, GitHub) {
        // Create instance
        $scope.github = new GitHub();
        // Load
        $scope.github.loadMore();
    }
]);

/*
 * Controller: blogCtrl
 */

window.app.controller('blogCtrl', ['$scope', '$http', '$utils', 'Blog',
    function blogCtrl($scope, $http, $utils, Blog) {
    	//Utils
    	$scope.formatDay = $utils.day;
    	$scope.formatMonth = $utils.month;
        // Create instance
        $scope.blog = new Blog();
        // Load
        $scope.blog.loadMore();
    }
]);

/*
 * Controller: articleCtrl
 */

window.app.controller('articleCtrl', ['$scope', '$rootScope', '$location', '$http', '$routeParams', '$utils',
    function articleCtrl($scope, $rootScope, $location, $http, $routeParams, $utils) {

        $rootScope.blogPage = true;
        $rootScope.notFound = true;
        $scope.formatDate = $utils.longDate;
        // Get data
        $http.get("/get/articles.json").success(function(data) {
            var search;
            if (angular.isArray(data)) {
                $scope.articles = data;
                search = $.grep($scope.articles, function(e) {
                    return e.slug === $routeParams.slug;
                });
                if (search.length === 0) {
                    $rootScope.notFound = true;
                    $rootScope.blogPage = false;
                    $location.path('/');
                } else if (search.length === 1) {
                    $rootScope.notFound = false;
                    $scope.article = search[0];
                } else {
                    $rootScope.notFound = true;
                    $rootScope.blogPage = false;
                    $location.path('/');
                }
            }
        });
    }
]);
