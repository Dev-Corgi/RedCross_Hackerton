export default class ScaleMotion  {
    constructor(deltaScaleX,deltaScaleY,delay,duration,easetype) {
      this.motion = {
        scaleX: deltaScaleX, scaleY: deltaScaleY,
          transition: {
            duration: duration,
            delay: delay,
            ease:easetype
          },
      };      
    }

    handleMotion(input) {
      return this.motion
    }
  

  }