'use client';

import { useEffect, useState } from "react";
import Intro from "./intro/page";
import Loading from "./loading";

export default function Home() {

  
  let [isLoading, setIsLoading] = useState(true);
  let [isMobile, setIsMobile] = useState(false)

  useEffect(()=>{
    let tmp = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    setIsMobile(tmp);
    setIsLoading(false);
  },[])
  
  return (
    <>
    {
      isLoading ? <Loading className="w-full h-[100dvh] flex justify-center align-center"/>
      : <>{
        isMobile ? <div className="fixed top-[0px] left-[0px]">데스크탑으로 접속해주세요!</div>
        : <Intro />
      }</>
    }
    </>
  )
}