/*
AngularModule: chris 
Name: Christopher EnyTC
Username: chrisenytc
Site: http://chris.enytc.com
Github: https://github.com/chrisenytc
Twitter: @chrisenytc

*/

/*Controllers*/

//IndexCtrl
function indexCtrl($scope, $http, $window, $routeParams){

    //jQuery
    var $ = jQuery;
    
    $scope.data = {};
    
    $scope.data.name = $routeParams.name || "People";

}

//aboutCtrl
function aboutCtrl($scope, $http, $window, $routeParams){

    //jQuery
    var $ = jQuery;

}

//projectsCtrl
function projectsCtrl($scope, $http, $window, $routeParams){

    //jQuery
    var $ = jQuery;

}

//gitHubCtrl
function gitHubCtrl($scope, $http, $window, $routeParams){

    //jQuery
    var $ = jQuery;
    
    $http.get("https://api.github.com/users/chrisenytc/repos").success(function(data){
        $scope.repositories = data;
    });

}

//IndexCtrl
function blogCtrl($scope, $http, $window, $routeParams){

    //jQuery
    var $ = jQuery;

}

//IndexCtrl
function contactCtrl($scope, $http, $window, $routeParams){

    //jQuery
    var $ = jQuery;
    
    $scope.send = function(){
        console.log($scope.data);
    }

}