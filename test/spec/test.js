/*jshint expr: true*/
/*global describe, it, beforeEach, expect, PushUpsW3, _*/
'use strict';
(function () {
    describe('Model', function () {
        describe('Exercise Session', function () {
            var exerciseSession = null;
            beforeEach(function () {
                exerciseSession = new PushUpsW3.Models.ExerciseSessionModel();
            });
            it('should exist', function () {
                expect(exerciseSession).to.exist;
            });
            it('looks like a Backbone model', function () {
                expect(_.isFunction(exerciseSession.get)).to.be.true;
                expect(_.isFunction(exerciseSession.set)).to.be.true;
            });
            it('should have attribute repetitions', function () {
                expect(exerciseSession.has('repetitions')).to.be.true;
            });
            it('attribute repetitions should default to zero', function () {
                expect(exerciseSession.get('repetitions')).to.equal(0);
            });
            it('should have a function to increment repetitions', function () {
                expect(_.isFunction(exerciseSession.increment)).to.be.true;
            });
            it('calling increment should increase repetitions by one', function () {
                exerciseSession.increment();
                expect(exerciseSession.get('repetitions')).to.equal(1);
                exerciseSession.increment();
                expect(exerciseSession.get('repetitions')).to.equal(2);
            });
            it('should have a function to reset repetitions', function () {
                expect(_.isFunction(exerciseSession.reset)).to.be.true;
            });
            it('calling reset should reset repetitions to zero', function () {
                exerciseSession.set('repetitions', 5);
                expect(exerciseSession.get('repetitions')).to.equal(5);
                exerciseSession.reset();
                expect(exerciseSession.get('repetitions')).to.equal(0);
            });
        });
    });

    describe('View', function () {
        describe('Exercise', function () {
            var exerciseView = null;
            beforeEach(function () {
                var exerciseSession = new PushUpsW3.Models.ExerciseSessionModel();
                exerciseView = new PushUpsW3.Views.ExerciseView({
                    model: exerciseSession
                });
            });
            it('should exist', function () {
                expect(exerciseView).to.exist;
            });
            it('should display repetitions number', function () {
                expect(exerciseView.render().$el.html()).to.match(/0/);
            });
            it('model change should update display with model data', function () {
                expect(exerciseView.render().$el.html()).to.match(/0/);
                exerciseView.model.set('repetitions', 5);
                expect(exerciseView.$el.html()).to.match(/5/);
            });
            it('should have a function to increment model repetitions', function () {
                expect(_.isFunction(exerciseView.incrementRepetitions)).to.be.true;
            });
            it('incrementing repetitions should update model', function () {
                exerciseView.incrementRepetitions();
                exerciseView.incrementRepetitions();
                expect(exerciseView.model.get('repetitions')).to.equal(2);
            });
            it('clicking increment button should update display with model data', function () {
                expect(exerciseView.render().$el.html()).to.match(/0/);
                exerciseView.$('#repetitions').click();
                expect(exerciseView.$el.html()).to.match(/1/);
            });
            it('should have a function to reset model repetitions', function () {
                expect(_.isFunction(exerciseView.resetRepetitions)).to.be.true;
            });
            it('resetting repetitions should update model', function () {
                exerciseView.model.set('repetitons', 4);
                exerciseView.resetRepetitions();
                expect(exerciseView.model.get('repetitions')).to.equal(0);
            });
            it('clicking reset button should update display with model data', function () {
                exerciseView.incrementRepetitions();
                exerciseView.incrementRepetitions();
                expect(exerciseView.render().$el.html()).to.match(/2/);
                exerciseView.$('#reset').click();
                expect(exerciseView.$el.html()).to.match(/0/);
            });
        });
    });

})();
