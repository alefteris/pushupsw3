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
})();
