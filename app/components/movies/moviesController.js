var showapp = angular.module('showapp')
showapp.controller('moviesController', ['$scope', 'moviesService', function($scope, moviesService){

    $scope.query = "";
    $scope.message = "Hola mundo";
    $scope.movies = [];
    $scope.page = 1;
    $scope.totalPages = [];

    $scope.searchMoviesByName = function() {
        $scope.message = $scope.query;
        moviesService.getMoviesByName($scope.query, $scope.page)
            .then(function (data) {
                $scope.page = data.data.page;
                $scope.totalPages = $scope.setTotalPages(data.data.total_pages);
                console.log("totalPages: ", $scope.totalPages);
                $scope.movies = data.data.results;
            });
    }

    $scope.setTotalPages = function(pages) {
        var array = [];
        if(pages){
            var i;
            for(i = 1; i <= pages; i++){
                array.push(i);
            }
        }else{
            $scope.totalPages = [];
        }
        console.log(array);
        return array;
    }

    $scope.goToPage = function(page){
        $scope.page = page;
        $scope.searchMoviesByName();
    }

}]);