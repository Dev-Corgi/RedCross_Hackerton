'use client'
import './edit.scss';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';


function Edit() {


    //커서 깜빡깜빡
    let contentRef = useRef(null);
    useEffect(() => {
        contentRef.current.focus();
    }, []);

    //네브바 이동
    let [selection, setSelection] = useState(['selected', '', '']);


    //요약본, 인터뷰 텍스트
    let [panelText, setPanelText] = useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')

    let audioRef = useRef(null);
    useEffect(() => {

    }, [])

    return (
        <div className="edit">
            <div className='left'>
                <div className='selection'>
                    <button className={selection[0]} onClick={() => { setSelection(['selected', '', '']) }}>요약본</button>
                    <button className={selection[1]} onClick={() => { setSelection(['', 'selected', '']) }}>오디오</button>
                    <button className={selection[2]} onClick={() => { setSelection(['', '', 'selected']) }}>인터뷰</button>
                </div>

                {
                    selection[1] !== 'selected' ?
                        <div className='panel'>
                            <p>{panelText}</p>
                        </div>
                        : <div className='audio'>
                            <div className="header">
                                <Image src='/playButton.jpg' alt='일시정지' className="rounded-full" width={'44'} height={'44'} onClick={() => {
                                    audioRef.current.play();
                                }} />
                                <div>
                                    <h3>재생중</h3>
                                    <h4 className='text-opacity-60 text-[13px] font-medium'>인터뷰어: 이명준</h4>
                                </div>
                            </div>

                            <div className='time'><p>3:24</p><p>30:21</p></div>
                            <div className='progressbar'>
                                <div className='current-progressbar' ></div>
                            </div>
                            <audio ref={audioRef} src="/audiofile1.mp3"></audio>
                        </div>
                }

            </div>
            <div className='right'>
                <div className='panel'>
                    <div className='header'>
                        <p>제 2 장</p>
                        <h1>나의 동네, 반포동</h1>
                        <p className='pl-[42px]'>-임점례</p>
                    </div>
                    <textarea ref={contentRef} />
                </div>
            </div>
        </div>
    )
}


export default Edit;