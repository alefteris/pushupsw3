/*global PushUpsW3, $*/
'use strict';


window.PushUpsW3 = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        console.log('Hello from Backbone!');
        this.router = new PushUpsW3.Routers.AppRouter();
        Backbone.history.start({pushState: true});
    }
};

$(document).ready(function () {
    PushUpsW3.init();
});
