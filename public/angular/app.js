/**
 * Created by tang.hao on 20/7/2015.
 */
angular.module('app', []).controller('mainController', ['$scope', '$http', function($scope, $http){
    $scope.title = 'Wood Scent';
    $http.get("config/navItem.json").success(function(data, status, headers, config) {
        $scope.navItems = data;
    });

    $http.get("config/service.json").success(function(data, status, headers, config) {
        $scope.service = data;
    });

    $http.get("config/portfolio.json").success(function(data, status, headers, config) {
        $scope.portfolio = data;
    });

    $http.get("config/timeline.json").success(function(data, status, headers, config) {
        $scope.timeline = data;
    });

    $http.get("config/team.json").success(function(data, status, headers, config) {
        $scope.team = data;
    });
}]);
