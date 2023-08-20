import React, { useState, useEffect } from "react";
import ControllerSet from "@/Controller/ControllerSet"; // Update the import statement here
import CorgiDiv from "../Components/Div/CorgiDiv";
import MovingMotionStep from "../Motion/MovingMotionStep";
export default function Intro(props) {
  const [showModal, setShowModal] = useState(false);


  return (
    <div className="w-full h-[100vh] relative overflow-hidden">

      <CorgiDiv
      classname="w-full h-screen absolute left-0 top-0"
      motions = {[ 
        {input:  ControllerSet.getValue("globalscroll"), motion : new MovingMotionStep(0,70,"vh",1,0,1.5,[0.645, 0.045, 0.355, 1.000])}
       ]}>
      <img
          src="/img/tempbackground.png"
        />
        </CorgiDiv>

     <CorgiDiv
     classname = "w-full h-[200vh] relative" 
     motions = {[ 
      {input:  ControllerSet.getValue("globalscroll"), motion : new MovingMotionStep(0,100,"vh",1,0,1.5,[0.645, 0.045, 0.355, 1.000])}
     ]}>
      <div className="w-full h-[100vh] absolute left-0 top-0">

        <div className="bg-[rgba(0,0,0,0.10)] w-full h-screen absolute left-0 top-0 overflow-hidden">
          <div
            className="text-[#ffffff] text-left absolute left-[calc(50%_-_124px)] top-[440px]"
            style={{ font: "700 60px 'Pretendard', sans-serif" }}
          >
            Discover
          </div>
        </div>

        <button onClick={() => setShowModal(true)} className="absolute left-[calc(50%-100px)] top-2/3 px-6 py-3 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-gray-100 tracking-wider drop-shadow-xl">
                            Make your Itinerary
                        </button>
      </div>

      <div className="w-full h-[100vh] absolute left-0 top-[100vh]">
        <div
          className="w-full h-[108vh] absolute left-0 bottom-0 overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%,rgba(0, 0, 0, 1.00) 8.159700781106949%)",
          }}
        >
          <img
            className="w-[497px] h-[606px] absolute left-[calc(50%_-_-53px)] top-80 overflow-hidden"
            src="/img/pic_introbackground.png"
          />

          <div
            className="text-[#ffffff] text-left absolute left-[calc(50%_-_496px)] top-[347px]"
            style={{ font: "400 36px 'Pretendard', sans-serif" }}
          >
            PlaceHolder
          </div>

          <div
            className="text-[#ffffff] text-left absolute left-[calc(50%_-_496px)] top-[437px] w-[367px]"
            style={{ font: "400 16px 'Pretendard', sans-serif" }}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor
            sit amet..&quot;, comes from a line in section 1.10.32.
            <br />
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from
            &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
            reproduced in their exact original form, accompanied by English
            versions from the 1914 translation by H. Rackham.
          </div>
        </div>
      </div>
      </CorgiDiv>


    </div>


  );
}