/*global describe, it, beforeEach, afterEach, expect, PushUpsW3, _, Backbone, sinon*/
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

    describe('AppRouter', function () {
        beforeEach(function () {
            this.router = new PushUpsW3.Routers.AppRouter();
        });
        it('should exist', function () {
            expect(this.router).to.exist;
        });

        describe('Route', function () {
            beforeEach(function () {
                this.routeSpy = sinon.spy();
                try {
                    Backbone.history.start({silent:true, pushState:true});
                } catch(e) {}
                this.router.navigate('elsewhere');
            });
            it('index should be called with a blank hash', function () {
                this.router.bind('route:index', this.routeSpy);
                this.router.navigate('', true);
                expect(this.routeSpy.calledOnce).to.be.true;
                expect(this.routeSpy.calledWithExactly()).to.be.true;
            });
        });

        describe('Route Handler', function () {
            beforeEach(function () {
                this.model = new Backbone.Model();
                this.exerciseViewStub = sinon.stub(window.PushUpsW3.Views, 'ExerciseView')
                                             .returns(new Backbone.View());
                this.exerciseSessionModelStub = sinon.stub(window.PushUpsW3.Models, 'ExerciseSessionModel')
                                                .returns(this.model);
            });
            afterEach(function () {
                this.exerciseViewStub.restore();
                this.exerciseSessionModelStub.restore();
            });

            describe('Index', function () {
                describe('when no model exists', function () {
                    beforeEach(function () {
                        this.router.index();
                    });
                    it('creates a ExerciseSessionModel', function () {
                        expect(this.exerciseSessionModelStub.calledOnce).to.be.true;
                        expect(this.exerciseSessionModelStub.calledWithExactly()).to.be.true;
                    });
                    it('creates a ExerciseView', function () {
                        expect(this.exerciseViewStub.calledOnce).to.be.true;
                        expect(this.exerciseViewStub.calledWithExactly({model: this.model})).to.be.true;
                    });
                });
            });

        });

    });

})();
