import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
  deleteQ(question) {
    console.log("got it!");
    // if (confirm('Are you sure you want to delete this question?')) {
    //   var comment_deletions = question.get('comments').map(function(comment) {
    //     return comment.destroyRecord();
    //   });
    //   Ember.RSVP.all(comment_deletions).then(function() {
    //     return question.destroyRecord();
    //   });
    //   this.transitionTo('index');
    // } //end of if
  } //end of delete
} //end of actions
});
