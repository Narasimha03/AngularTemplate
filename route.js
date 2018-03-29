//import { StateProvider } from "./bower_components/angular-ui-router/release/angular-ui-router";

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/sampleurl");

    $stateProvider.state('sampleMain', {
        url: "/sampleMain",
        templateUrl: "app_components/sampleHtml.html",
        controller: "sampleController"

    })
    // $stateProvider.state('about', {
    //     url: "/sampleMain",
    //     templateUrl: "app_components/sampleHtml.html",
    //     controller: "sampleController"

    // })


})