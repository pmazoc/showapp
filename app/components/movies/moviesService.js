var showapp = angular.module('showapp')
showapp.service('moviesService', function($http, properties){

    this.getMoviesByName = function (name, page) {
        return $http.get(properties.apiBasePath + properties.apiSearch,
            {params: {api_key: properties.apiKey, language: properties.language, query: name, page: page}
        });
    };

    this.getGenres = function () {
        return $http.get(properties.apiBasePath + properties.apiGenres,
            {
                params: {api_key: properties.apiKey, language: properties.language}
            });
    };

});