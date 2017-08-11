import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question').then(function(results) {
        return results.sortBy('timestamp'); }),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
  createQuestion2(params) {
    debugger;
    var newQ = this.store.createRecord('question', params);
    newQ.save();
    //this.transitionTo('index');
  }
}
});
