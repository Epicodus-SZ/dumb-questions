import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr('string'),
  dummy: DS.attr('string'),
  timestamp: DS.attr('string')
});
