angular.module("showapp").directive( "modalWindow", function(){
    return {
        restrict: "E",
        template: "<button ng-click='open()' class='trailer-button'>Ver Trailer</button><div ng-hide='hidden' class='trans-layer'></div><div class='modal-container' ng-class='{modalactive: !hidden}' ng-transclude></div>",
        scope: true,
        transclude: true,
        controller: function( $scope ) {
            $scope.hidden = true;
            $scope.open = function() {
                $scope.hidden = false;
            };
        },
        link: function( scope,ele,attrs ) {
            $(ele).find( '.trans-layer' ).on( 'click', function( event ) {
                scope.hidden = true;
                scope.$apply();
            })
        }
    }
} );