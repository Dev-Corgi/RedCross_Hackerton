export default class MovingMotionAbsolute  {
    constructor(deltaX, deltaY,unit,delay,duration,easetype) {
      this.motion = {
      x: `${deltaX}${unit}`,
      y: `${deltaY}${unit}`,
        transition: {
          duration: duration,
          delay: delay,
          ease:easetype
        },
    };
    }

    handleMotion(input) {
      console.log("absolute")
      return this.motion
    }
  }