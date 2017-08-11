import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit(){
      console.log("you pressed submit");
    },
    close(){
      console.log("you pressed close");
    },
    confirmDelete(){
      this.set('confirmModal', true);
    },
    delete(question) {
      this.set('confirmDelModal', false); //hide the modal
      this.sendAction('deleteQ', question);
    }, //end of delete
    updatePost(question) {
      this.sendAction('gotoUpdate', question);
    }
  } //end of actions
});
