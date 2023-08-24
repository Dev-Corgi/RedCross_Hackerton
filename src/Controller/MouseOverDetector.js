export default class MouseOverDetector {
    constructor(delay, componentRef) {
      this.component = componentRef.current;
      this.eventTarget = new EventTarget();
      this.event = new CustomEvent('mouseoverevent', {
        detail: {
          state: 0,
        },
      });
      this.condition = true;
      this.delay = delay;
      this.handleOver = this.handleOver.bind(this);
      this.component.addEventListener('mouseenter', this.handleOver); // Use this.handleOver
      this.eventname = 'mouseoverevent';
    }
  
    handleOver(event) {
      if (this.condition) {
        console.log("over")
        this.condition = false;
  
        this.event.detail.state = 1; // Update event detail state
        this.eventTarget.dispatchEvent(this.event);
        setTimeout(() => {
          this.condition = true;
        }, this.delay);
      }
    }
  }
  