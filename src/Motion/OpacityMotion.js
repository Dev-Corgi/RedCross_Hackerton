export default class OpacityMotion  {
    constructor(deltaOpacity,delay,duration,easetype) {
      this.motion = {
      opacity: deltaOpacity,
      transition: {
        duration: duration,
        delay: delay,
        ease:easetype
      }
    };
    }

    handleMotion(input) {
      console.log("opacity")
      return this.motion
    }

  }

