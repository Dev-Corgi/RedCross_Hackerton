import React, { useEffect } from 'react';
import controllerSet from './ControllerSet';
import GuageController from './GuageController';
import ScrollController from './ScrollController';

export default function ControllerSetConfig() {
  useEffect(() => {
    console.log("intro")
    const globalscrollcontroller = new ScrollController(0);
    console.log("intro2")
    const globalguage = new GuageController(
      globalscrollcontroller.eventTarget,
      "scrollevent",
      0,
      200
    );
    controllerSet.setValue("globalguage", globalguage);
    controllerSet.setValue("globalscroll", globalscrollcontroller);
  }, []); // The empty dependency array ensures this useEffect runs only once on mount

  return <></>; // You can return an empty fragment or any other React elements if needed
}
