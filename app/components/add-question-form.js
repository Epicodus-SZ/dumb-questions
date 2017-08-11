import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  createQuestion() {
    var date = new Date();
    var dMonth = date.getMonth()+1;
    var dateString = dMonth+'/'+date.getDate()+'/'+date.getFullYear();
    var params = {
      dummy: this.get('dummy'),
      question: this.get('question'),
      text: this.get('text'),
      timestamp: dateString,
    };
    //Clear the form
    this.set('dummy', '');
    this.set('question', '');
    this.set('text', '');
    this.sendAction('createQuestion2', params);
  }
}
});
