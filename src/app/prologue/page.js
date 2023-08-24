"use client";
import ScrollController from "@/Controller/ScrollController";
import CorgiDiv from "@/Components/Div/CorgiDiv";
import MovingMotionStep from "@/Motion/MovingMotionStep";
import OpacityMotion from "@/Motion/OpacityMotion";
import GuageController from "@/Controller/GuageController";
import React,{useState,useEffect} from "react";

const Chapters = () => {

  const [scrollController,setScrollController] = useState(null)
  const [scrollGuage,setScrollGuage] = useState(null)
  const [index, setIndex] = useState(0);

 useEffect(() => {
  const handleIndex = (value) =>{
    setIndex(value);
  };

  

  const prologueScroll = new ScrollController(1000);
  const prologueGuage = new GuageController(prologueScroll,0,3)

  prologueGuage.eventTarget.addEventListener(prologueGuage.eventname,() => handleIndex(prologueGuage.output))

  setScrollController(prologueScroll)
  setScrollGuage(prologueGuage)


  
 
 },[])

//  const scrollController = new ScrollController(1000);
//  const scrollGuage = new GuageController(scrollController,0,3);

 const circlePath = "M228.5,457 A228.5,228.5 0 1,0 228.5,0 A228.5,228.5 0 1,0 228.5,457 Z";
 const trianglePath = "M228.5,28.7 L57.4,397.3 L399.6,397.3 Z";
 const rhombusPath = "M228.5,28.7 L57.4,228.5 L228.5,428.3 L399.6,228.5 Z";
 const squarePath = "M78.7,28.7 L78.7,428.7 L378.7,428.7 L378.7,28.7 Z";
 
 
 
 
 
 



  return (
    <>
    {(scrollController != null && scrollGuage != null) ? 
      (<div className="relative w-full h-[100vh] overflow-hidden text-left text-mid text-white font-intelone-mono">
      {/* BackgroundPic */}
      <div>
        <CorgiDiv
          classname="absolute h-full w-full object-cover"
          motions={[
            {
              input: scrollGuage,
              motion: new OpacityMotion(0, 0, 0.3, [0.445, 0.05, 0.55, 0.95]),
              condition: (state, value) => {
                return state > 0 && value == 4 ? true : false;
              },
            },
            {
              input: scrollGuage,
              motion: new OpacityMotion(1, 0, 0.3, [0.445, 0.05, 0.55, 0.95]),
              condition: (state, value) => {
                return state < 0 && value == 3 ? true : false;
              },
            },
          ]}
        >
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            src="/background4.jpg"
          />
        </CorgiDiv>
        <CorgiDiv
          classname="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          motions={[
            {
              input: scrollGuage,
              motion: new OpacityMotion(0, 0, 0.3, [0.445, 0.05, 0.55, 0.95]),
              condition: (state, value) => {
                return state > 0 && value == 3 ? true : false;
              },
            },
            {
              input: scrollGuage,
              motion: new OpacityMotion(1, 0, 0.3, [0.445, 0.05, 0.55, 0.95]),
              condition: (state, value) => {
                return state < 0 && value == 2 ? true : false;
              },
            },
          ]}
        >
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            src="/background3.jpg"
          />
        </CorgiDiv>
        <CorgiDiv
          classname="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          motions={[
            {
              input: scrollGuage,
              motion: new OpacityMotion(0, 0, 0.3, [0.445, 0.05, 0.55, 0.95]),
              condition: (state, value) => {
                return state > 0 && value == 2 ? true : false;
              },
            },
            {
              input: scrollGuage,
              motion: new OpacityMotion(1, 0, 0.3, [0.445, 0.05, 0.55, 0.95]),
              condition: (state, value) => {
                return state < 0 && value == 1 ? true : false;
              },
            },
          ]}
        >
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            src="/background2.jpg"
          />
        </CorgiDiv>
        <CorgiDiv
          classname="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          motions={[
            {
              input: scrollGuage,
              motion: new OpacityMotion(0, 0, 0.3, [0.445, 0.05, 0.55, 0.95]),
              condition: (state, value) => {
                return state > 0 && value == 1 ? true : false;
              },
            },
            {
              input: scrollGuage,
              motion: new OpacityMotion(1, 0, 0.3, [0.445, 0.05, 0.55, 0.95]),
              condition: (state, value) => {
                return state < 0 && value == 0 ? true : false;
              },
            },
          ]}
        >
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            src="/chapter-bcg.jpeg"
          />
        </CorgiDiv>
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
          0{index+1}
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
        motions={[
          {
            input: scrollController,
            motion: new MovingMotionStep(
              49.514,
              0,
              "vw",
              3,
              0,
              1.5,
              [0.215, 0.61, 0.355, 1]
            ),
          },
        ]}
      >
        <CorgiDiv classname="flex flex-1 h-[266px] justify-center"
                motions={[
                  {
                    input: scrollGuage,
                    motion:new OpacityMotion(0.3,0,1.5, [0.215, 0.61, 0.355, 1]),
                    condition: (state, value) => {
                      return state > 0 && value == 1 ? true : false;
                    },
                  },
                  {
                    input: scrollGuage,
                    motion: new OpacityMotion(1,0,1.5, [0.215, 0.61, 0.355, 1]),
                    condition: (state, value) => {
                      return state < 0 && value == 0 ? true : false;
                    },
                  },
                ]}
        >
          <b className="absolute top-[226px] tracking-[-0.02em] leading-[20px] flex text-center w-[511px] h-10">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">
                임점례 어른신의 여정을 함께하기로 한것에 감사드립니다. 이점례
                어르신이 당신께
              </p>
              <p className="m-0">드릴 인사말이 있습니다.</p>
            </span>
          </b>
          <b className="absolute top-[189px] tracking-[-0.02em] flex text-center justify-center w-[511px] h-[15px]">
            “안녕하세요, 임점례 입니다.”
          </b>
          <div className="absolute top-[21px]  text-56xl tracking-[-0.02em] font-medium font-pretendard flex items-center justify-center w-[511px] h-[90px]">
            프롤로그
          </div>
          <div className="absolute top-[0px]  tracking-[-0.02em] font-pretendard flex items-center justify-center w-[137px] h-[18px]">
            제 1 장
          </div>
        </CorgiDiv>
        <CorgiDiv classname="flex flex-1 h-[266px] justify-center "
                motions={[
                  {
                    input: scrollGuage,
                    motion:new OpacityMotion(0.3,0,1.5, [0.215, 0.61, 0.355, 1]),
                    condition: (state, value) => {
                      return state > 0 && value == 2 ? true : false;
                    },
                  },
                  {
                    input: scrollGuage,
                    motion: new OpacityMotion(1,0,1.5, [0.215, 0.61, 0.355, 1]),
                    condition: (state, value) => {
                      return state < 0 && value == 1 ? true : false;
                    },
                  },
                ]}
        >
          <b className="absolute top-[226px] tracking-[-0.02em] leading-[20px] flex text-center w-[511px] h-10">
            <span className="[line-break:anywhere] w-full">
              <p>
                어르신의 고향, 반포동으로 떠나 어르신의 어린시절을 같이 보내보세요
              </p>
            </span>
          </b>
          <b className="absolute top-[189px] tracking-[-0.02em] flex text-center justify-center w-[511px] h-[15px]">
            “눈을 감아도 아직도 그 골목이 선하네요”
          </b>
          <div className="absolute top-[21px]  text-56xl tracking-[-0.02em] font-medium font-pretendard flex items-center justify-center w-[511px] h-[90px]">
            나의 동네, 원미동
          </div>
          <div className="absolute top-[0px]  tracking-[-0.02em] font-pretendard flex items-center justify-center w-[137px] h-[18px]">
            제 2 장
          </div>
        </CorgiDiv>
        <CorgiDiv classname="flex flex-1 h-[266px] justify-center "
                motions={[
                  {
                    input: scrollGuage,
                    motion:new OpacityMotion(0.3,0,1.5, [0.215, 0.61, 0.355, 1]),
                    condition: (state, value) => {
                      return state > 0 && value == 3 ? true : false;
                    },
                  },
                  {
                    input: scrollGuage,
                    motion: new OpacityMotion(1,0,1.5, [0.215, 0.61, 0.355, 1]),
                    condition: (state, value) => {
                      return state < 0 && value == 2 ? true : false;
                    },
                  },
                ]}
        >
          <b className="absolute top-[226px] tracking-[-0.02em] leading-[20px] flex text-center w-[511px] h-10">
            <span className="[line-break:anywhere] w-full">
           <p>산업화 시대, 우리나라의 격동의 시절, 어르신은 가족을 위해 돈을 벌러 서울로 상경하기로 합니다, 그 시절 이야기를 들어보세요</p>
            </span>
          </b>
          <b className="absolute top-[189px] tracking-[-0.02em] flex text-center justify-center w-[511px] h-[15px]">
            “돈을 벌어야 한다, 그때는 그 생각 뿐이었습니다”
          </b>
          <div className="absolute top-[21px]  text-56xl tracking-[-0.02em] font-medium font-pretendard flex items-center justify-center w-[511px] h-[90px]">
            서울로, 상경
          </div>
          <div className="absolute top-[0px]  tracking-[-0.02em] font-pretendard flex items-center justify-center w-[137px] h-[18px]">
            제 3 장
          </div>
        </CorgiDiv>
        <CorgiDiv classname="flex flex-1 h-[266px] justify-center "
                motions={[
                  {
                    input: scrollGuage,
                    motion:new OpacityMotion(0.3,0,1.5, [0.215, 0.61, 0.355, 1]),
                    condition: (state, value) => {
                      return state > 0 && value == 4 ? true : false;
                    },
                  },
                  {
                    input: scrollGuage,
                    motion: new OpacityMotion(1,0,1.5, [0.215, 0.61, 0.355, 1]),
                    condition: (state, value) => {
                      return state < 0 && value == 3 ? true : false;
                    },
                  },
                ]}
        >
          <b className="absolute top-[226px] tracking-[-0.02em] leading-[20px] flex text-center w-[511px] h-10">
            <span className="[line-break:anywhere] w-full">
              <p>서울에서의 힘들었던 생활이 지나고, 어르신께도 사랑이 찾아왔습니다, 함께 들어보세요</p>
            </span>
          </b>
          <b className="absolute top-[189px] tracking-[-0.02em] flex text-center justify-center w-[511px] h-[15px]">
            “그해 봄은, 갑자기 찾아왔어요”
          </b>
          <div className="absolute top-[21px]  text-56xl tracking-[-0.02em] font-medium font-pretendard flex items-center justify-center w-[511px] h-[90px]">
            사랑을 찾아서
          </div>
          <div className="absolute top-[0px]  tracking-[-0.02em] font-pretendard flex items-center justify-center w-[137px] h-[18px]">
            제 4 장
          </div>
        </CorgiDiv>
      </CorgiDiv>
      {/* <img
          className="absolute top-[16px] right-[82px] w-[46px] h-[11px]"
          alt=""
          src="/line.png"
        /> */}
    </div>
    )
      :
     (<></>)
    }
    </>
  );
};

export default Chapters;
