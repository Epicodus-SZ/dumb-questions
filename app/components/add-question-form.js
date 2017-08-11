import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  createQuestion() {
    debugger;
    var date = new Date();
    var dMonth = date.getMonth()+1;
    var dateString = dMonth+'/'+date.getDate()+'/'+date.getFullYear();
    var params = {
      dummy: this.get('dummy'),
      question: this.get('question'),
      text: this.get('text'),
      timestamp: dateString,
    };
    this.sendAction('createQuestion2', params);
    // var newQ = this.store.createRecord('question', params);
    // newQ.save();
    // this.transitionTo('index', {reload: true});
  }
}
});
