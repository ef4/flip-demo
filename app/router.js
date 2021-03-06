import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('step-two');
  this.route('step-three');
  this.route('step-four');
});

export default Router;
