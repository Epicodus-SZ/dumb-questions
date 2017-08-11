import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    createA(params) {
      var newA = this.store.createRecord('answer', params);
      var newQ = params.question;
      newQ.get('answers').addObject(newA);
      newA.save().then(function(){
        newQ.save();
      });
      this.transitionTo('question');
    }, //end of createComment action
    deleteQ(question) {
      var deleteAnswers = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(deleteAnswers).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    } //end of delete
  } //end of actions
});
