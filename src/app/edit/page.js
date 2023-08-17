'use client'
import './edit.scss';
import { useRef, useEffect, useState } from 'react';


function Edit(){


    //커서 깜빡깜빡
    let contentRef = useRef(null);
    useEffect(()=>{
        contentRef.current.focus();
    },[]);

    //네브바 이동
    let [selected, setSelected] = useState(0);
    
    
    
    return(
        <div className="edit">
            <div className='left'>
                <div className='selection'>
                    <button className="selected">요약본</button>
                    <button>오디오</button>
                    <button>인터뷰</button>
                </div>

                <div className='panel'>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            <div className='right'>
                <div className='panel'>
                <div className='header'>
                    <p>제 2 장</p>
                    <h1>나의 동네, 반포동</h1>
                    <p className='pl-[42px]'>-임점례</p>
                </div>
                <textarea ref={contentRef}/>
                </div>
            </div>
        </div>
    )
}


export default Edit;