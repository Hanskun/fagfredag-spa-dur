define(['services/yr', 'knockout'], function(yrService, ko) {

    var hello = {
        weatherInfo: ko.observable(),
        forecasts: ko.observableArray(),
        greeting: ko.observable('Hans Inge'),
        change: function () {
            hello.greeting('Webstep');
        },
        activate: function (url) {
            if (url) {
                return yrService.get(url).done(function (weather) {
                    hello.weatherInfo(weather);
                    hello.forecasts(weather.forecasts);
                });
            };
        }
    };
    //Note: This module exports a function. That means that you, the developer, can create multiple instances.
    //This pattern is also recognized by Durandal so that it can create instances on demand.
    //If you wish to create a singleton, you should export an object instead of a function.
    //See the "flickr" module for an example of object export.

    return hello;
});