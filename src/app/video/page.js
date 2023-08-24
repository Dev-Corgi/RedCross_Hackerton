"use client"
import OpacityMotion from "@/Motion/OpacityMotion";
import CorgiDiv from "@/Components/Div/CorgiDiv";
import React , {useRef,useState,useEffect} from "react";
import ButtonController from "@/Controller/ButtonController";
import { useNavigate } from 'react-router';
// import MouseOverDetector from "@/Controller/MouseOverDetector";

function Video() {

    const navigate = useNavigate();

    const handleExitClick = () => {
      navigate("/login");
    };
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
    // const bottommouseRef = useRef(null);
    // const [bottomMouseOverDetector,setBottomMouseOverDetector] = useState(null);

    // useEffect(() => {
    //     console.log("디텍터 온")
    //  setBottomMouseOverDetector( new MouseOverDetector(0,bottommouseRef))
    // }, [])

    const buttonController = new ButtonController(500);
    
    const togglePlay = () => {
        if (videoRef.current) {
          if (isPlaying) {
            videoRef.current.pause();
            buttonController.handleButton(0);
          } else {
            videoRef.current.play();
            buttonController.handleButton(1);
          }
          setIsPlaying(!isPlaying);
        }
      };

    return (
      <div className="relative bg-black w-[100vw] h-[100vh]">
       
        <video
          controls
          className="absolute h-[100vh] w-[100vw] overflow-hidden object-cover"
          alt=""
          src="/video.mp4"
          type="video/mp4"
          ref = {videoRef}
        />
            

        <CorgiDiv classname="absolute h-[100vh] w-[100vw] bg-black [backdrop-filter:blur(10px)] bg-opacity-[0.4]"
        motions={[
            {
              input: buttonController,
              motion:new OpacityMotion(0,0,1.5, [0.215, 0.61, 0.355, 1]),
              condition: (state, value) => {
                return value == 1 ? true : false;
              },
            },
            {
              input: buttonController,
              motion: new OpacityMotion(1,0,1.5, [0.215, 0.61, 0.355, 1]),
              condition: (state, value) => {
                return value == 0 ? true : false;
              },
            },
          ]}
          onclick={togglePlay}
        >
          <div className="absolute top-[calc(50%_-_86px)] left-[calc(50%_-_190px)] w-[381px] h-[231px]">
            <b className="absolute top-[calc(50%_-_115.5px)] left-[calc(50%_-_190.5px)] leading-[90px] text-left text-[110px] text-white font-['pretendardBold']">
              프롤로그
            </b>

           <button
           className="absolute top-[calc(50%_+_54.5px)] left-[calc(50%_-_59.5px)] w-8 h-8"
           >
            <img
              className="h-full w-full"
              alt=""
              src="/videoplaybutton.png"
            />
            </button>

            <b className="absolute top-[calc(50%_+_62.5px)] left-[calc(50%_-_10.5px)] text-[11px] leading-[90px]text-left text-white font-['pretendardBold']">
              <span className="tracking-[0.03em]">PLAY</span>
              <span className="tracking-[-0.04em]">{`  `}</span>
              <span className="tracking-[0.03em]">VIDEO</span>
            </b>
            
          </div>
        </CorgiDiv>

        <img
          className="absolute top-[32px] right-[41px] w-10 h-10 object-cover"
          alt=""
          src="/videoclosebutton.png"
          onClick = {handleExitClick}
        />

        {/* <CorgiDiv classname="absolute w-full bottom-[122px] h-[122px]text-white font-['pretendardSemiBold']"
          Ref={bottommouseRef}
          motions={[
            {
              input: bottomMouseOverDetector,
              motion:new OpacityMotion(1,0,1.5, [0.215, 0.61, 0.355, 1]),
              condition: (state, value) => {
                return (isPlaying == true && state == 1) ? true : false;
              },
            }
          ]}
          >
          <div className="absolute w-[94.86%] top-[61px] right-[2.57%] left-[2.57%] h-[34px]opacity-[0]">
            <img
              className="absolute w-[100.59%] top-[30px] right-[-0.29%] left-[-0.29%] max-w-full overflow-hidden h-2"
              alt=""
              src="/progressbar.svg"
            />
            <div className="absolute top-[0px] left-[0px] tracking-[-0.02em] font-semibold">
              2:52
            </div>
            <div className="absolute top-[0px] right-[0px] tracking-[-0.02em] font-semibold">
              30:52
            </div>
          </div>
          <div className="absolute w-[8.89%] top-[0px] right-[88.33%] left-[2.78%] h-11 text-sm opacity-[0]">
            <img
              className="absolute top-[0px] left-[0px] rounded-3xl w-11 h-11 overflow-hidden"
              alt=""
              src="/playbutton.svg"
            />
            <div className="absolute top-[4px] left-[64px] tracking-[-0.02em] font-['pretendardMedium']">
              재생중
            </div>
            <div className="absolute top-[27px] left-[64px] text-3xs tracking-[-0.02em] font-['pretendardMedium'] text-gray-400">
              인터뷰어: 이명준
            </div>
          </div>
        </CorgiDiv> */}

        
      </div>
    );
  };
  
  export default Video;