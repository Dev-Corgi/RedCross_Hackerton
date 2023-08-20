class ControllerSet {
    constructor() {
      this.controllers = {};
    }
  
    setValue(name,controller) {
      this.controllers[name] = controller
    }
  
    getValue(name) {
      return this.controllers[name]
    }
  }
  
  const controllerSet = new ControllerSet();
  
  export default controllerSet;