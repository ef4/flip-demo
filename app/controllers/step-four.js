import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    update() {
      this.set('content', {
        message: this.get('nextMessage'),
        class: this.get('nextCardPink') ? 'pink' : ''
      });
    }
  }
});
