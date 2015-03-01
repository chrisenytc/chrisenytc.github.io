/*
 * chrisenytc.github.io
 * https://github.com/chrisenytc/chrisenytc.github.io
 *
 * Copyright (c) 2015, EnyTC Corporation
 */

'use strict';

//Root Application
window.app = angular.module('chrisEnyTCApp', ['ngRoute', 'ngSanitize', 'ngAnimate', 'hljs']);

//Configuration
window.app.config(function($routeProvider) {
    //Routes
    $routeProvider
        .when('/articles/:slug', {
            controller: 'articleCtrl',
            templateUrl: '/views/article.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

window.app.constant('$settings', {
    apiUri: window.location.href.split('/')[0] + '//' + window.location.href.split('/')[2]
});

window.app.factory('$utils', function utils() {
    return {
        gravatar: function(email, size) {
            size = size || '80';
            return 'https://www.gravatar.com/avatar/' + email + '?s=' + size;
        },
        timeago: function(date) {
            return moment(date).fromNow();
        },
        day: function(date) {
            return moment(date).format('DD');
        },
        month: function(date) {
            return moment(date).format('MMM');
        },
        date: function(date) {
            return moment(date).format('L');
        },
        longDate: function(date) {
            return moment(date).format('LL');
        }
    };
});

window.app.factory('GitHub', function($http) {
    var GitHub = function() {
        this.repositories = [];
        this.loading = false;
        this.page = 1;
        this.reposLength = 0;
        $http.get('https://api.github.com/users/chrisenytc/repos?type=owner&access_token=a200c6fdf3180091fd4d333812b05334af05630f').success(function(data) {
            if (angular.isArray(data)) {
                this.reposLength = data.length;
            }
        }.bind(this));
    };

    GitHub.prototype.loadMore = function() {
        if (this.loading) {
            return;
        }

        this.loading = true;

        var url = 'https://api.github.com/users/chrisenytc/repos?sort=pushed&type=owner&direction=desc&page=' + this.page + '&per_page=4&access_token=a200c6fdf3180091fd4d333812b05334af05630f';

        $http.get(url).success(function(data) {
            if (angular.isArray(data)) {
                data.forEach(function(repo) {
                    this.repositories.push(repo);
                }.bind(this));
            }
            this.page = this.page + 1;
            this.loading = false;
        }.bind(this));
    };

    return GitHub;
});

window.app.factory('Blog', function($http) {
    var Blog = function() {
        this.articles = [];
        this.loading = false;
        this.page = 1;
        this.perPage = 4;
    };

    Blog.prototype.loadMore = function() {
        if (this.loading) {
            return;
        }

        this.loading = true;

        $http.get('/get/articles.json')
            .success(function(data) {
                if (angular.isArray(data)) {
                    this.articles = data;
                }
                this.page = this.page + 1;
                this.loading = false;
            }.bind(this));
    };

    return Blog;
});
