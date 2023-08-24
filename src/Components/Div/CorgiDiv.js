import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CorgiDiv(props) {
  const [currentMotions, setCurrentMotions] = useState([]);
  

  useEffect(() => {
    props.motions.forEach((motionset) => {
      const input = motionset.input;
      const motion = motionset.motion;
      const condition = motionset.condition

      const handleMotion = (event) => {
        if(condition == null || (condition!= null && condition(event.detail.state,event.detail.value))){
        setCurrentMotions((prevState) => {
          const updatedMotions = [...prevState, motion.handleMotion(event.detail.state)];
          return updatedMotions;
        });
      }
      };

      if (input != null) {
        input.eventTarget.addEventListener(input.eventname, handleMotion);
      } else if (input == null) {
        setCurrentMotions((prevState) => {
          const updatedMotions = [...prevState, motion.handleMotion(1)];
          return updatedMotions;
        });
      }
    });
  }, []);

  // JSX를 반환하는 함수를 정의합니다.
  const renderMotionDiv = () => {
    const valuelist = {};
    const transitionlist = {};

    currentMotions.forEach((motionset) => {
      Object.keys(motionset).forEach((key) => {
        if (key !== "transition") {
          valuelist[key] = motionset[key];
          transitionlist[key] = motionset["transition"];
        }
      });
    });

    // "motion.div"의 속성으로 valuelist와 transitionlist를 사용합니다.
    return (
      <motion.div
        className={props.classname}
        animate={Object.keys(valuelist).length === 0 ? {} : valuelist}
        transition={Object.keys(transitionlist).length === 0 ? {} : transitionlist}
      >
        {props.children}
      </motion.div>
    );
  };

  // 반환된 JSX를 렌더링합니다.
  return <>{renderMotionDiv()}</>;
}
