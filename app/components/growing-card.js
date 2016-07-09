import Ember from 'ember';
import { animate } from 'liquid-fire';

const duration = 400;

export default Ember.Component.extend({
  classNames: ['growing-card'],
  flip
});

export function flip() {
  let promises = [];
  if (this.oldElement) {
    promises.push(animate(this.oldElement, {
      rotateY: 179,
      height: this.newElement ? this.newElement.height() : this.oldElement.height()
    }, { duration }));
  }
  if (this.newElement) {
    promises.push(animate(this.newElement, {
      rotateY: [0, -179],
      height: [this.newElement.height(), this.oldElement ? this.oldElement.height() : this.newElement.height()]
    }, { duration }));
  }
  return Ember.RSVP.all(promises);
}
