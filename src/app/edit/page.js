"use client";
import "./edit.scss";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import Image from "next/image";
import SmoothScrollBox from "@/Components/SmoothScrollBox";
import CorgiDiv from "@/Components/Div/CorgiDiv";
import ButtonController from "@/Controller/ButtonController";
import MovingMotionAbsolute from "@/Motion/MovingMotionAbsolute";
function Edit() {
  //커서 깜빡깜빡
  let contentRef = useRef(null);
  useEffect(() => {
    contentRef.current.focus();
  }, []);

  //

  //네브바 이동
  let [selection, setSelection] = useState(0);
  const [buttonController, setButtonController] = useState(null);

  useEffect(() => {
    setButtonController(new ButtonController(0));
  }, []);

  //

  //요약본, 인터뷰 텍스트
  let [panelText, setPanelText] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  );

  //

  //오디오 파트

  let [isaudioPlaying, setIsaudioPlaying] = useState(false);

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
    const progressbar = document.getElementById("progressbar");
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
    progressbar.style.width = `${
      (audioRef.current.currentTime / audioRef.current.duration) * 100
    }%`;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  //

  return (
    <div className="edit">
      <div className="left">
        <div className="selectionframe">
          <div className="selection">
            <button
              className={selection == 0 ? "selected" : ""}
              onClick={() => {
                setSelection(0);
                buttonController.handleButton(0);
              }}
            >
              요약본
            </button>
            <button
              className={selection == 1 ? "selected" : ""}
              onClick={() => {
                setSelection(1);
                buttonController.handleButton(1);
              }}
            >
              오디오
            </button>
            <button
              className={selection == 2 ? "selected" : ""}
              onClick={() => {
                setSelection(2);
                buttonController.handleButton(2);
              }}
            >
              인터뷰
            </button>
          </div>
          {buttonController != null ? (
            <CorgiDiv
              classname="underline"
              motions={[
                {
                  input: buttonController,
                  motion: new MovingMotionAbsolute(
                    0,
                    0,
                    "px",
                    0,
                    0.5,
                    [0.215, 0.61, 0.355, 1]
                  ),
                  condition: (state, value) => {
                    return value == 0 ? true : false;
                  },
                },
                {
                  input: buttonController,
                  motion: new MovingMotionAbsolute(
                    68 * 1,
                    0,
                    "px",
                    0,
                    0.5,
                    [0.215, 0.61, 0.355, 1]
                  ),
                  condition: (state, value) => {
                    return value == 1 ? true : false;
                  },
                },
                {
                  input: buttonController,
                  motion: new MovingMotionAbsolute(
                    68 * 2,
                    0,
                    "px",
                    0,
                    0.5,
                    [0.215, 0.61, 0.355, 1]
                  ),
                  condition: (state, value) => {
                    return value == 2 ? true : false;
                  },
                },
              ]}
            />
          ) : (
            <></>
          )}
        </div>

        {selection == 0 && (
          <div className="panel overflow-hidden">
            <div className="frame">
                <div className="scrollframe">
              <p>{panelText}</p>
              </div>
            </div>
          </div>
        )}
        {selection == 1 && (
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
              <div id="progressbar" className="current-progressbar"></div>
            </div>
            <audio
              ref={audioRef}
              src="/audiofile1.mp3"
              onTimeUpdate={handleTimeUpdate}
            />
          </div>
        )}
        {selection == 2 && (
          <div className="panel overflow-hidden">
            <div className="frame">
              <p>{panelText}</p>
            </div>
          </div>
        )}
      </div>
      <div className="right">
        <div className="panel">
          <div className="header">
            <p>제 2 장</p>
            <h1>나의 동네, 반포동</h1>
            <p className="pl-[42px]">-임점례</p>
          </div>
          <textarea ref={contentRef} />
        </div>
      </div>
    </div>
  );
}

export default Edit;
