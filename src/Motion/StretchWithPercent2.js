export default class StretchWithPercent {
	constructor(deltaW,deltaH,delay,duration,easetype) {
		this.motion = {
			width : deltaW, 
		  height : deltaH,
			transition: {
				duration: duration,
				delay: delay,
				ease: easetype
			},
		}; 
	}

	handleMotion(input) {
		return this.motion
	  }

}
