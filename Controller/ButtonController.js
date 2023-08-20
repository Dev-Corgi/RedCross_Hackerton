export default class ButtonController {
  constructor(delay) {
    this.eventTarget = new EventTarget();
    this.event = new CustomEvent('buttonevent', {
      detail :{
        state: 0
      }
    });
    this.condition = true;
    this.delay = delay;
    this.handleButton = this.handleButton.bind(this);
    this.eventname = 'buttonevent';
  }

  handleButton() {
    console.log("click1")
    if (this.condition) {
      this.condition = false;
        this.event.detail.state = 1;
      this.eventTarget.dispatchEvent(this.event);
      setTimeout(() => { this.condition = true }, this.delay);
    }
  }

  destroy() {
  }
}