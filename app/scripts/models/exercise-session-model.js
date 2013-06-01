/*global PushUpsW3, Backbone*/

(function () {
    'use strict';

    PushUpsW3.Models.ExerciseSessionModel = Backbone.Model.extend({

        defaults: {
            repetitions: 0
        },

        increment: function () {
            this.set('repetitions', this.get('repetitions') + 1);
        },

        reset: function () {
            this.set('repetitions', 0);
        }

    });

})();
