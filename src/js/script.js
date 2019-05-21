const app = angular.module("myApp", ["ngRoute"]);

app.config(($routeProvider) => {
    $routeProvider
        .when("/", {
            templateUrl: "home/home.html"
        })
        .when("/results", {
            templateUrl: "results/results.html"
        })  
        .when("/search", {
            templateUrl: "search/search.html"
        });
});
