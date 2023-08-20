export default class MovingMotionbackup  {
    constructor(deltaX, deltaY,unit,delay,duration,easetype,reversable = true) {
      this.currentX = 0
      this.currentY = 0
      this.deltaX = deltaX
      this.deltaY = deltaY
      this.delay = delay
      this.duration = duration
      this.easetype = easetype
      this.unit = unit
      this.motion = {
      x:this.currentX,y:this.currentY,
        transition: {
          duration: this.duration,
          delay: this.delay,
          ease:this.easetype
        },
    };
    }
  
    handleMotion(input) {
      if(input.value > 0){
        this.currentX -= this.deltaX
        this.currentY -= this.deltaY
      }
      else if(reversable && input.value < 0){
        this.currentX += this.deltaX
        this.currentY += this.deltaY
      }

      this.motion = {
        x:`${this.currentX}${this.unit}`,
        y: `${this.currentY}${this.unit}`,
        transition: {
        duration: this.duration,
        delay: this.delay,
        ease:this.easetype
      }}
      return this.motion
    }

  }