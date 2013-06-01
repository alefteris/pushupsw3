/*global PushUpsW3, Backbone*/

(function () {
    'use strict';

    PushUpsW3.Routers.AppRouter = Backbone.Router.extend({

        routes: {
            '': 'index'
        },

        index: function () {
            var exerciseSession = new PushUpsW3.Models.ExerciseSessionModel();
            var exerciseView = new PushUpsW3.Views.ExerciseView({model: exerciseSession});
            $('#container').html(exerciseView.render().el);
        }

    });

})();
