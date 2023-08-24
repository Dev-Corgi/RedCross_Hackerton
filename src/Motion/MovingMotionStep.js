export default class MovingMotionStep  {
    constructor(deltaX, deltaY,unit,range,delay,duration,easetype,reversable = true) {
      this.currentX = 0
      this.currentY = 0
      this.deltaX = deltaX
      this.deltaY = deltaY
      this.delay = delay
      this.duration = duration
      this.easetype = easetype
      this.unit = unit
      this.reversable = reversable
      this.range = range
      this.count = 0
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
      console.log(input)
      if(input > 0 && this.count < this.range){


 //framer-motion 0 버그 대처용 (임시)
       if(this.count == 0){
        this.currentX = 0
        this.currentY = 0
       }
 //

        this.currentX -= this.deltaX
        this.currentY -= this.deltaY
        this.count ++;
      }
      else if(this.reversable && input < 0 && this.count >1){
        this.currentX += this.deltaX
        this.currentY += this.deltaY
        this.count --;
      }

      //framer-motion 0 버그 대처용 (임시)
      else if(this.reversable && input < 0 && this.count == 1){
        this.currentX = 0.0001
        this.currentY = 0.0001
        this.count --;
      }
     //

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