        app.controller("PathPopupController",["$scope", function($scope){
            $scope.clickFromPopup = function(fromName){
                alert("Click from " + fromName);
            };
        }])
        app.controller("PathSimpleController", [ "$scope", "$compile", function($scope, $compile) {
            var compiledTemplate = $compile(
                "<div ng-controller='PathPopupController'><h3>Route from London to Rome</h3><p>Distance: 1862km</p>" +
                "<button ng-click='clickFromPopup(\"europe\")'>click</button></div>")($scope.$new(true));
            angular.extend($scope, {
                watchOptions:{
                    paths: {
                        individual: { type: 'watch'}, //this keeps infdigest errors from happening.... (deep by default)
                        type: 'watchCollection'
                    }
                },
                london: {
                    lat: 51.505,
                    lng: -0.09,
                    zoom: 4,
                    message: 'london'
                },
                europeanPaths: {
                    p1: {
                        color: 'red',
                        weight: 8,
                        latlngs: [
                            { lat: 51.50, lng: -0.082 },
                            { lat: 48.83, lng: 2.37 },
                            { lat: 41.91, lng: 12.48 }
                        ],
                        message: compiledTemplate[0]
                    },
                    p2: {
                        color: 'green',
                        weight: 8,
                        latlngs: [
                            { lat: 48.2083537, lng: 16.3725042 },
                            { lat: 48.8534, lng: 2.3485 }
                        ],
                        label: {message: "<h3>Route from Vienna to Paris</h3><p>Distance: 1211km</p>"}
                    }
                }
            });
        }]);