/*global PushUpsW3, Backbone*/

(function () {
    'use strict';

    window.PushUpsW3 = {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {},
        init: function () {
            this.router = new PushUpsW3.Routers.AppRouter();
            Backbone.history.start({pushState: true});
        }
    };

    $(document).ready(function () {
        PushUpsW3.init();
    });

})();
