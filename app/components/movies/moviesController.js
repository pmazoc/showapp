var showapp = angular.module('showapp')
showapp.controller('moviesController', ['$scope', 'moviesService', 'properties', function($scope, moviesService, properties){

    $scope.query = "";
    $scope.message = "Hola mundo";
    $scope.movies = [];
    $scope.page = 1;
    $scope.totalPages = [];
    $scope.genres = "";
    $scope.genre = "";
    $scope.poster = properties.apiPoster;

    var todos = {
        "id": -1,
        "name": "Filtrar por..."
    };

    moviesService.getGenres().then(function (data) {
        $scope.genres=data.data.genres;
        $scope.genres.unshift(todos);
        $scope.genre=todos;
    })

    $scope.searchMoviesByName = function() {
        moviesService.getMoviesByName($scope.query, $scope.page)
            .then(function (data) {
                $scope.page = data.data.page;
                $scope.totalPages = $scope.setTotalPages(data.data.total_pages);
                if(data.data.total_results == 0) alert("Sorry no movies were found related to these criterias.")
                $scope.movies = data.data.results;
            })
            .catch(function (e) {
                alert("No se pudo realizar la búsqueda. Error: ", e);
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
        return array;
    }

    $scope.goToPage = function(page){
        $scope.page = page;
        $scope.searchMoviesByName();
    }

    $scope.setResults = function(movies){
        $scope.movies = data.data.results;
    }

}]);