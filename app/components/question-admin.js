import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      this.sendAction('deleteQ', question);
    }, //end of delete
    updatePost(question) {
      this.sendAction('gotoUpdate', question);
    }
  } //end of actions
});
