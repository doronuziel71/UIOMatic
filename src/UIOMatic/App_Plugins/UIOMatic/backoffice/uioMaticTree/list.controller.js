﻿angular.module("umbraco").controller("uioMatic.ObjectListController",
    function($scope, $routeParams, uioMaticObjectResource) {

        $scope.typeName = $routeParams.id;

        uioMaticObjectResource.getAllProperties($scope.typeName).then(function (response) {
            $scope.properties = response.data;
        });

        uioMaticObjectResource.getAll($scope.typeName).then(function (response) {
            $scope.objects = response.data;
            $scope.cols = Object.keys($scope.objects[0]);
        });

        

    });