import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    createA(params) {
      debugger;
      var newA = this.store.createRecord('answer', params);
      var newQ = params.question;
      newQ.get('answers').addObject(newA);
      newA.save().then(function(){
        newQ.save();
      });
      this.transitionTo('question');
    }, //end of createComment action
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
