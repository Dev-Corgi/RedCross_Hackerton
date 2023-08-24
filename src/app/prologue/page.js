"use client";
import ScrollController from "@/Controller/ScrollController";
import CorgiDiv from "@/Components/Div/CorgiDiv";
import MovingMotionStep from "@/Motion/MovingMotionStep";
import OpacityMotion from "@/Motion/OpacityMotion";
import GuageController from "@/Controller/GuageController";
import React, { useState, useEffect } from "react";
import Loading from "../loading";

const Chapters = () => {

  const [scrollController, setScrollController] = useState(null)
  const [scrollGuage, setScrollGuage] = useState(null)
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleIndex = (value) => {
      setIndex(value);
    };
    const prologueScroll = new ScrollController(1000);
    const prologueGuage = new GuageController(prologueScroll, 0, 3)

    prologueGuage.eventTarget.addEventListener(prologueGuage.eventname, () => handleIndex(prologueGuage.output))

    setScrollController(prologueScroll)
    setScrollGuage(prologueGuage)
  }, [])

  const circlePath = "M228.5,457 A228.5,228.5 0 1,0 228.5,0 A228.5,228.5 0 1,0 228.5,457 Z";
  const trianglePath = "M228.5,28.7 L57.4,397.3 L399.6,397.3 Z";
  const rhombusPath = "M228.5,28.7 L57.4,228.5 L228.5,428.3 L399.6,228.5 Z";
  const squarePath = "M78.7,28.7 L78.7,428.7 L378.7,428.7 L378.7,28.7 Z";

  let chapters = [
    {
      index: 1,
      title: '프롤로그',
      content1: '임점례 어르신의 여정을 함께하기로 한것에 감사드립니다. 임점례 어르신이 당신께 드릴 인사말이 있습니다.',
      content2: '“안녕하세요, 임점례 입니다.”',
      imgSrc: "/background1.jpeg"
    },
    {
      index: 2,
      title: '나의 동네, 원미동',
      content1: '어르신의 고향, 반포동으로 떠나 어르신의 어린시절을 같이 보내보세요',
      content2: '드릴 인사말이 있습니다.',
      imgSrc: "/background2.jpg"
    },
    {
      index: 3,
      title: '서울로, 상경',
      content1: '어르신의 고향, 반포동으로 떠나 어르신의 어린시절을 같이 보내보세요',
      content2: '드릴 인사말이 있습니다.',
      imgSrc: "/background3.jpg"
    },
    {
      index: 4,
      title: '사랑을 찾아서',
      content1: '서울에서의 힘들었던 생활이 지나고, 어르신께도 사랑이 찾아왔습니다, 함께 들어보세요',
      content2: '“그해 봄은, 갑자기 찾아왔어요”',
      imgSrc: "/background4.jpg"
    }
  ]


  return (
    <>
      {(scrollController != null && scrollGuage != null) ?
        (<div className="relative w-full h-[100vh] overflow-hidden text-left text-mid text-white font-intelone-mono">
          {/* BackgroundPic */}
          <div>
            {
              [...chapters].reverse().map((e, i) =>
                <ChapterBackground key = {i} index={e.index} imgSrc={e.imgSrc} scrollGuage={scrollGuage} />
              )
            }
          </div>

          {/* foreground */}
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.3))]" />

          {/* counter */}
          <div className="absolute bottom-[49.22px] left-[calc(50%_-_35px)] w-[71px] h-[23.78px]">
            <div className="absolute top-[0px] left-[50px] tracking-[-0.02em]">
              04
            </div>
            <img
              className="absolute top-[calc(50%_-_10.89px)] left-[calc(50%_-_6.5px)] w-[15.28px] h-[23.57px]"
              alt=""
              src="/line.png"
            />
            <div className="absolute top-[0px] left-[0px] tracking-[-0.02em]">
              0{index + 1}
            </div>
          </div>

          {/* rectframe */}
          <div className="absolute top-[calc(50%_-_240.5px)] left-[calc(50%_-_228px)] w-[457px] h-[458px]">
            <div className="absolute top-[0px] left-[0px] box-border w-[457px] h-[458px] overflow-hidden border-[2px] border-solid border-gray-700" />
            <div className="absolute top-[79px] left-[79px] box-border w-[299px] h-[300px] overflow-hidden border-[2px] border-solid border-gray-700" />
            <div className="absolute top-[158px] left-[158px] box-border w-[141px] h-[142px] overflow-hidden border-[2px] border-solid border-gray-700" />
          </div>


          <CorgiDiv
            classname="absolute w-[184.028vw] top-[calc(50%_-_80.5px)] left-[32.153vw] flex flex-row items-center justify-start gap-[14.028vw] text-center text-mini font-bookk-myungjo"
            motions={[{
                input: scrollController,
                motion: new MovingMotionStep(49.514, 0, "vw", 3, 0,1.5,[0.215, 0.61, 0.355, 1]),
              },]}
          >
            {
              chapters.map((e, i)=>
                <ChapterContent key = {i} index={e.index} scrollGuage={scrollGuage} title={e.title} content1={e.content1} content2={e.content2} />
              )
            }
          </CorgiDiv>
        </div>
        )
        :
        <Loading />
      }
    </>
  );
};

function ChapterBackground({ index, imgSrc, scrollGuage }) {

  return (
    <CorgiDiv
      classname="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
      motions={[
        {
          input: scrollGuage,
          motion: new OpacityMotion(0, 0, 0.3, [0.445, 0.05, 0.55, 0.95]),
          condition: (state, value) => {
            return state > 0 && value == index ? true : false;
          },
        },
        {
          input: scrollGuage,
          motion: new OpacityMotion(1, 0, 0.3, [0.445, 0.05, 0.55, 0.95]),
          condition: (state, value) => {
            return state < 0 && value == index - 1 ? true : false;
          },
        },
      ]}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        src={imgSrc}
      />
    </CorgiDiv>
  )
}

function ChapterContent({index, scrollGuage, title, content1, content2}) {

  return (
<CorgiDiv classname="flex flex-1 h-[266px] justify-center"
              motions={[
                {
                  input: scrollGuage,
                  motion: new OpacityMotion(0.3, 0, 1.5, [0.215, 0.61, 0.355, 1]),
                  condition: (state, value) => {
                    return state > 0 && value == index ? true : false;
                  },
                },
                {
                  input: scrollGuage,
                  motion: new OpacityMotion(1, 0, 1.5, [0.215, 0.61, 0.355, 1]),
                  condition: (state, value) => {
                    return state < 0 && value == index-1 ? true : false;
                  },
                },
              ]}
            >
              <b className="absolute top-[226px] tracking-[-0.02em] leading-[20px] flex text-center w-[511px] h-10">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">
                    {content1}
                  </p>
                </span>
              </b>
              <b className="absolute top-[189px] tracking-[-0.02em] flex text-center justify-center w-[511px] h-[15px]">
                {content2}
              </b>
              <div className="absolute top-[21px]  text-56xl tracking-[-0.02em] font-medium font-pretendard flex items-center justify-center w-[511px] h-[90px]">
                {title}
              </div>
              <div className="absolute top-[0px]  tracking-[-0.02em] font-pretendard flex items-center justify-center w-[137px] h-[18px]">
                {`제 ${index} 장`}
              </div>
            </CorgiDiv>
  )
}

export default Chapters;
