import React, { useRef } from "react";

class SlideStepController {
  constructor(component, distance, delay) {
    this.eventTarget = new EventTarget();
    this.slidestepevent = new CustomEvent("slidestepevent", {
      detail: {
        state: 0,
      },
    });
    this.interval = null;
    this.distance = distance;
    this.condition = true;
    this.delay = delay;
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.lastCursorX = null;
    this.component = component;
    this.eventname = "slidestepevent"

    this.component.addEventListener("touchstart", this.handleTouchStart);
    this.component.addEventListener("mousedown", this.handleTouchStart);
    this.component.addEventListener("touchend", this.handleTouchEnd);
    this.component.addEventListener("mouseup", this.handleTouchEnd);
  }

  handleTouchMove(event) {
    if (this.condition) {
      let cursorX = null;
      if (event.touches != null) {
        cursorX = event.touches[0].clientX;
      } else {
        cursorX = event.clientX;
      }

      const curDistance = this.lastCursorX - cursorX;

      if (Math.abs(curDistance) >= this.distance) {
        this.lastCursorX = cursorX;
        this.slidestepevent.detail.state = curDistance > 0 ? 1 : -1;
        this.eventTarget.dispatchEvent(this.slidestepevent);
        console.log(this.slidestepevent.detail.state);
        setTimeout(() => {
          this.condition = true;
        }, this.delay);
      }
    }
  }

  handleTouchStart(event) {
    if (event.touches != null) {
        this.lastCursorX = event.touches[0].clientX;
      } else {
        this.lastCursorX = event.clientX;
      }

    this.interval = setInterval(() => {
      this.component.addEventListener("mousemove", this.handleTouchMove);
      this.component.addEventListener("touchmove", this.handleTouchMove);
    }, 0.05);
  }

  handleTouchEnd(event) {
    this.lastCursorX = null;
    clearInterval(this.interval);
    this.component.removeEventListener("mousemove", this.handleTouchMove);
    this.component.removeEventListener("touchmove", this.handleTouchMove);
  }

  destroy() {
    this.component.addEventListener("touchstart", this.handleTouchStart);
    this.component.addEventListener("mousedown", this.handleTouchStart);
    this.component.addEventListener("touchend", this.handleTouchEnd);
    this.component.addEventListener("mouseup", this.handleTouchEnd);
    clearInterval(this.interval);
  }
}

export default SlideStepController;
