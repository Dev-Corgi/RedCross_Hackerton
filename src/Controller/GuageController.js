export default class GuageController {
  constructor(inputController, initialValue, maxValue) {
    this.eventTarget = new EventTarget();
    this.event = new CustomEvent('guageevent', {
      detail : {
        state : 0,
        value : initialValue
      }
    });
    this.maxvalue = maxValue;
    this.handleGuage = this.handleGuage.bind(this);
    this.inputController = inputController
    this.inputController.eventTarget.addEventListener(this.inputController.eventname, this.handleGuage);
    this.eventname = 'guageevent';
    this.output = initialValue
  }

  handleGuage(event) {
      //아래
      if (event.detail.state > 0) {
        if (this.event.detail.value < this.maxvalue) {
          this.event.detail.state = 1;
          this.event.detail.value++;
          // console.log(this.gaugeevent.detail.value)
        }
      }

      //위
      else {
        if (this.event.detail.value > 0) {
          this.event.detail.state = -1;
          this.event.detail.value--;
          // console.log(this.gaugeevent.detail.value)
        }
      }
      this.output = this.event.detail.value
      console.log("output" + this.output)
      this.eventTarget.dispatchEvent(this.event);
  }

  destroy() {
    this.inputController.eventTarget.removeEventListener(
      this.inputController.eventTarget.type,
      this.handleGuage
    );
  }
}
