import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question', { reload: true }),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
  createQuestion2(params) {
    var newQ = this.store.createRecord('question', params);
    newQ.save();
    this.refresh();
  }
}
});
