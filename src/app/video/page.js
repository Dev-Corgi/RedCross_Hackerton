const Video = () => {
    return (
      <div className="relative bg-black w-[100vw] h-[100vh] overflow-hidden text-left text-[110px] text-white font-['pretendardBold']">
        <img
          className="absolute h-[100.34%] w-full top-[0%] right-[0%] bottom-[-0.34%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/video@2x.png"
        />
        <div className="absolute h-[100.34%] w-full top-[0%] right-[0%] bottom-[-0.34%] left-[0%] bg-gray-800 [backdrop-filter:blur(10px)]">
          <div className="absolute top-[calc(50%_-_86px)] left-[calc(50%_-_190px)] w-[381px] h-[231px]">
            <b className="absolute top-[calc(50%_-_115.5px)] left-[calc(50%_-_190.5px)] leading-[90px]">
              프롤로그
            </b>
            <img
              className="absolute top-[calc(50%_+_54.5px)] left-[calc(50%_-_59.5px)] w-8 h-8"
              alt=""
              src="/playbutton.svg"
            />
            <b className="absolute top-[calc(50%_+_25.5px)] left-[calc(50%_-_10.5px)] text-[11px] leading-[90px]">
              <span className="tracking-[0.03em]">PLAY</span>
              <span className="tracking-[-0.04em]">{`  `}</span>
              <span className="tracking-[0.03em]">VIDEO</span>
            </b>
          </div>
        </div>
        <img
          className="absolute top-[32px] right-[41px] w-10 h-10 object-cover"
          alt=""
          src="/exitbutton@2x.png"
        />
      </div>
    );
  };
  
  export default Video;