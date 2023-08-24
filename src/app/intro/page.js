
import Link from "next/link";


function Intro() {

  return (
    <div className="relative w-[100vw] h-[100vh] overflow-hidden text-left text-lg text-white font-['pretendardSemiBold']">
      <img
        className="absolute w-[100vw] h-[100vh] overflow-hidden object-cover"
        alt=""
        src="/introbackground.png"
      />
      <div className="absolute bg-gray-300 w-[100vw] h-[100vh] overflow-hidden" />
      <div className="absolute [background:linear-gradient(90deg,_rgba(0,_0,_0,_0.8),_rgba(0,_0,_0,_0))] w-[100vw] h-[100vh] overflow-hidden" />

      {/* logo set */}
      <div className="absolute top-[64px] left-[129px] text-8xl tracking-[0.02em] font-semibold">
        MESSENGER
      </div>
      <img
        className="absolute top-[56px] left-[75px] w-[41px] h-[45px]"
        alt=""
        src="/logo.png"
      />
      {/* logo set */}



      <div className="absolute top-[calc(50%_-_109.5px)] left-[68px] bg-khaki w-[201px] h-4 overflow-hidden" />
      <div className="absolute top-[calc(50%_-_21.5px)] left-[68px] bg-khaki w-[324px] h-4 overflow-hidden" />
      <div className="absolute top-[calc(50%_+_67.5px)] left-[68px] bg-khaki w-[343px] h-4 overflow-hidden" />
      <div className="absolute top-[calc(50%_-_180.5px)] left-[74px] text-51xl tracking-[-0.03em] leading-[90px]">
        <p className="m-0">
          <b>자서전</b>
          <b className="font-bookk-myungjo">,</b>
        </p>
        <p className="m-0">
          <b>세대를 잇는</b>
        </p>
        <p className="m-0">
          <b>다리가 되다.</b>
        </p>
      </div>

      <div className="absolute top-[calc(50%_+_112.5px)] left-[80px] text-[18px] leading-[24px] font-['pretendardSemiBold'] inline-block">
        <p className="m-0">어르신들의 이야기와 지혜들은 갈곳을 잃고</p>
        <p className="m-0">헤매고 있습니다, 당신의 글로 기록해주세요</p>
        <p className="m-0">세대를 잇는 메신저가 되어주세요.</p>
      </div>

      <Link href="/login">
        <button className="absolute top-[calc(50%_+_215.5px)] left-[80px] rounded-mini bg-white w-[203px] h-[67px] overflow-hidden text-5xl text-black">
          <div className="absolute top-[calc(50%_-_44.5px)] left-[calc(50%_-_40.5px)] tracking-[-0.03em] leading-[90px] font-semibold">
            시작하기
          </div>
        </button></Link>
    </div>
  );
}

export default Intro;
