import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('string'),
  text: DS.attr('string'),
  dummy: DS.attr('string')
});