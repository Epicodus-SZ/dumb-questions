import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit(){
      console.log("you pressed submit");
    },
    close(question){
      debugger;
      this.set('updateModal', false);
      this.sendAction('refresh', question);

      //this.set('dummy',question.dummy);
    },
    confirmDelete(){
      this.set('confirmModal', true);
    },
    delete(question) {
      this.set('confirmDelModal', false); //hide the modal
      this.sendAction('deleteQ', question);
    }, //end of delete
    update(question) {
      this.set('updateModal', false); //hide the modal
      this.sendAction('update', question);
    }
  } //end of actions
});
