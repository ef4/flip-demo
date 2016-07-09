import Ember from 'ember';
import layout from '../templates/components/multi-card';
import { flip } from './growing-card';

export default Ember.Component.extend({
  layout,
  classNames: ['multi-card'],
  flip
});
