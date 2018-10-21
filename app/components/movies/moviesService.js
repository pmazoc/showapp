var showapp = angular.module('showapp')
showapp.service('moviesService', function($http){

    this.getMoviesByName = function (name, page) {
        return $http.get("https://api.themoviedb.org/3/search/movie",
            {params: {api_key: '1ee34d479443d41c25523ce7fc03915c', language: 'es', query: name, page: page}
        });
    };

});