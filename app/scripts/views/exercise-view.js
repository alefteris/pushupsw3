/*global PushUpsW3, Backbone, JST*/

'use strict';

PushUpsW3.Views.ExerciseView = Backbone.View.extend({

    template: JST['app/scripts/templates/exercise.ejs'],

    events: {
        'click #repetitions': 'incrementRepetitions',
        'click #reset': 'resetRepetitions'
    },

    initialize: function () {
        this.model.on('change:repetitions', this.render, this);
    },

    incrementRepetitions: function () {
        this.model.increment();
    },

    resetRepetitions: function () {
        this.model.reset();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

});
