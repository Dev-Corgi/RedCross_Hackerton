"use client"
import OpacityMotion from "@/Motion/OpacityMotion";
import CorgiDiv from "@/Components/Div/CorgiDiv";
import React, { useRef, useState, useEffect } from "react";
import ButtonController from "@/Controller/ButtonController";
import Link from "next/link";
import Loading from "../loading";
import { useRouter } from "next/navigation";

function Video() {

  let [isLoading, setIsLoading] = useState(true);

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  let [buttonController, setButtonController] = useState(null);

  useEffect(() => {
    setIsLoading(false);
    setButtonController(new ButtonController(500));
  }, [])

  let router = useRouter();

  return (
    <>
    {
      isLoading ? <Loading /> :
      <div className="relative bg-black w-[100vw] h-[100vh]">
      <video
        controls
        className="absolute h-[100vh] w-[100vw] overflow-hidden object-cover"
        alt=""
        src="/video.mp4"
        type="video/mp4"
        ref={videoRef}
      />
      {
        buttonController != null &&
        <CorgiDiv isloading classname="absolute h-[100vh] w-[100vw] bg-black [backdrop-filter:blur(10px)] bg-opacity-[0.4]"
          motions={[
            {
              input: buttonController,
              motion: new OpacityMotion(0, 0, 1.5, [0.215, 0.61, 0.355, 1]),
              condition: (state, value) => {
                return value == 1 ? true : false;
              },
            },
            {
              input: buttonController,
              motion: new OpacityMotion(1, 0, 1.5, [0.215, 0.61, 0.355, 1]),
              condition: (state, value) => {
                return value == 0 ? true : false;
              },
            },
          ]}
          // onclick={() => {
          //   if (videoRef.current) {
          //     if (isPlaying) {
          //       videoRef.current.pause();
          //       buttonController.handleButton(0);
          //     } else {
          //       videoRef.current.play();
          //       buttonController.handleButton(1);
          //     }
          //     setIsPlaying(!isPlaying);
          //   }
          // }}
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
                onClick={()=>{
                  if (videoRef.current) {
                    if (isPlaying) {
                      videoRef.current.pause();
                      buttonController.handleButton(0);
                    } else {
                      videoRef.current.play();
                      buttonController.handleButton(1);
                    }
                    setIsPlaying(!isPlaying);}
                    setTimeout(()=>{
                      setButtonController(null);
                    }, 500);
                  }}
              />
            </button>

            <b className="absolute top-[calc(50%_+_62.5px)] left-[calc(50%_-_10.5px)] text-[11px] leading-[90px]text-left text-white font-['pretendardBold']">
              <span className="tracking-[0.03em]">PLAY</span>
              <span className="tracking-[-0.04em]">{`  `}</span>
              <span className="tracking-[0.03em]">VIDEO</span>
            </b>

          </div>
        </CorgiDiv>

      }

        <img
          className="absolute top-[32px] right-[41px] w-10 h-10 object-cover"
          alt=""
          src="/videoclosebutton.png"
          onClick={()=>{
            router.push('/prologue')
          }}
        />

    </div>
    }</>
    
  );
};

export default Video;