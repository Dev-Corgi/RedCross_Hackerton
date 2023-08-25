"use client";
import "./edit.scss";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import Image from "next/image";
import SmoothScrollBox from "@/Components/SmoothScrollBox";
import CorgiDiv from "@/Components/Div/CorgiDiv";
import ButtonController from "@/Controller/ButtonController";
import MovingMotionAbsolute from "@/Motion/MovingMotionAbsolute";
import axios from 'axios';
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

import Link from "next/link";

function Edit() {
  //커서 깜빡깜빡
  let contentRef = useRef(null);
  useEffect(() => {
    contentRef.current.focus();
  }, []);

  //네브바 이동
  let [selection, setSelection] = useState(0);
  const navArray = ['요약본', '오디오', '인터뷰'];
  useEffect(() => {
    audioRef.current.pause();
    setIsaudioPlaying(false);
  }, [selection])
  const [buttonController, setButtonController] = useState(null);

  useEffect(() => {
    setButtonController(new ButtonController(0));
  }, []);

  //요약본, 인터뷰 텍스트
  let [panelText, setPanelText] = useState('');

  //오디오 파트
  let [isaudioPlaying, setIsaudioPlaying] = useState(false);

  let progressbarRef = useRef(null);

  useEffect(() => {
    const filePath = "/texts/chapter1_summery.txt"; // public 폴더 내 경로

    fetch(filePath)
      .then((response) => response.text())
      .then((content) => {
        const formattedContent = content.replace(/\n/g, "\n");
        setPanelText(formattedContent);
      })
      .catch((error) => console.error("Error fetching file:", error));
  }, []);

  let audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
    if (progressbarRef.current !== null) {
      progressbarRef.current.style.width = `${(audioRef.current.currentTime / audioRef.current.duration) * 100}%`;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  let [userContent, setUserContent] = useState('');

  let [chapter, setChapter] = useState({});

  const { id } = useParams();

  let router = useRouter();

  useEffect(() => {
    axios.get('https://redcross.run.goorm.site/home/list/SIBA/' + id)
      .then((result) => {
        console.log(result.data);
        setChapter({
          name:result.data.name,
          title: result.data.sub,
          writer: result.data.writer
        })
        setUserContent(result.data.main)
      }).catch((error) => {
        alert(error);
      })
  }, [])

  // let router = useRouter();


  return (
    <div className="edit">
      <div className="left">
        <div className="selectionframe">
          <div className="selection">
            { navArray.map((e, i)=> 
                <SelectionBtn key={i} index={i} title={e} selection={selection} setSelection={setSelection} buttonController={buttonController} />
            )}
          </div>
          {buttonController != null && (
            <CorgiDiv
              classname="underline"
              motions={[
                {
                  input: buttonController,
                  motion: new MovingMotionAbsolute(0, 0, "px", 0, 0.5, [0.215, 0.61, 0.355, 1] ),
                  condition: (state, value) => {
                    return value == 0 ? true : false;
                  },
                },
                {
                  input: buttonController,
                  motion: new MovingMotionAbsolute(68 * 1,0,"px",0,0.5,[0.215, 0.61, 0.355, 1]),
                  condition: (state, value) => {
                    return value == 1 ? true : false;
                  },
                },
                {
                  input: buttonController,
                  motion: new MovingMotionAbsolute(68 * 2, 0, "px", 0, 0.5, [0.215, 0.61, 0.355, 1]),
                  condition: (state, value) => {
                    return value == 2 ? true : false;
                  },
                },
              ]}
            />
          ) }
        </div>

        <audio
          ref={audioRef}
          src="/audiofile1.mp3"
          onTimeUpdate={handleTimeUpdate}
        />
        {selection == 1 ? (
          <div className="audio">
            <div className="header">
              {isaudioPlaying ? (
                <>
                  <Image
                    src="/playButton_pause.png"
                    alt="일시정지"
                    className="rounded-full"
                    width={"44"}
                    height={"44"}
                    onClick={() => {
                      audioRef.current.pause();
                      setIsaudioPlaying(false);
                    }}
                  />
                  <div>
                    <h3>재생중</h3>
                    <h4 className="text-opacity-60 text-[13px] font-medium">
                      인터뷰어: 이명준
                    </h4>
                  </div>
                </>
              ) : (
                <>
                  <Image
                    src="/playButton_play.jpg"
                    alt="재생"
                    className="rounded-full"
                    width={"44"}
                    height={"44"}
                    onClick={() => {
                      audioRef.current.play();
                      setIsaudioPlaying(true);
                    }}
                  />
                  <div>
                    <h3>일시정지</h3>
                    <h4 className="text-opacity-60 text-[13px] font-medium">
                      인터뷰어: 이명준
                    </h4>
                  </div>
                </>
              )}
            </div>

            <div className="time">
              <p>{formatTime(currentTime)}</p>
              <p>{formatTime(duration)}</p>
            </div>
            <div className="progressbar">
              <div ref={progressbarRef} className="current-progressbar"></div>
            </div>
          </div>
        )
          : (<div className="panel overflow-hidden">
            <div className="frame">
              <div className="scrollframe">
                <p>{panelText}</p>
              </div>
            </div>
          </div>)
        }

      </div>
      <div className="right">
        <div className="panel">
          <div className="header">
            <button className="fixed top-[50px] right-[50px]" onClick={()=>{
             axios.get('https://m.search.naver.com/p/csearch/ocontent/util/SpellerProxy?_callback=jQuery112404457138148449815_1692883993112&q='+ userContent + '&where=nexearch&color_blindness=0&_=1692883993113')
             .then((result)=>{
                let tmp = result.data.toString();
                tmp = tmp.substring(42, tmp.length-2);
                let temp = JSON.parse(tmp);
                // console.log(temp.message.result.notag_html);
                setUserContent(temp.message.result.notag_html);
             }).catch((error)=>{
              alert(error.message)
             })
          }}>맞춤법 검사</button>
          <Link href="/post" >
          <button 
          onClick={()=>{
            axios.post('https://redcross.run.goorm.site/home/list/SIBA/' + id, {
              content: userContent
          })
          .then((result)=>{
            console.log(result);
            router.push('/post');
          })
          .catch((error)=>{
            alert(error);
          })}}
          className="fixed top-[80px] right-[50px]">
            저장하기
          </button>
          </Link>
            <p>{`제 ${Number(id)+1} 장`}</p>
            <h1>{chapter.title}</h1>  
            <p className="pl-[42px]">{`-${chapter.name}`}</p>
          </div>
          <textarea ref={contentRef} value={userContent} onChange={(e)=>{setUserContent(e.target.value);}}/>
        </div>
      </div>
    </div>
  );
}

function SelectionBtn({ index, title, selection, setSelection, buttonController }) {

  return (
    <button
      className={selection == index ? "selected" : ""}
      onClick={() => {
        setSelection(index);
        buttonController.handleButton(index);
      }}
    >
      {title}
    </button>
  )
}

export default Edit;
