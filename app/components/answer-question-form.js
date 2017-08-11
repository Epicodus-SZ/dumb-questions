import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  createAnswer() {
    var date = new Date();
    var dMonth = date.getMonth()+1;
    var dateString = dMonth+'/'+date.getDate()+'/'+date.getFullYear();
    var params = {
      dummy: this.get('dummy'),
      answer: this.get('answer'),
      timestamp: dateString,
      question: this.get('question')
    };
    console.log(this);
    this.sendAction('createA', params);
  } //end of createComment action
} //end of actions
});
