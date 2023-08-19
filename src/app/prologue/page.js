
import './prologue.scss';
import Link from 'next/link';

function Prologue() {

    return (
        <div className="prologue">
            <div className='first-rect'>
                <div className='second-rect'>
                    <div className='third-rect'>
                        <div className='textset'>
                            <p>제 1 장</p>
                            <h1 className='text-[75px] font-medium'>프롤로그</h1>
                            <p className='mt-[50px]'>"안녕하세요, 임점례 입니다."</p>
                            <p className='mt-[22px] text-center'>임점례 어른신의 여정을 함께하기로 한것에 감사드립니다. 임점례 어르신이 당신께<br />드릴 인사말이 있습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link href='' className='underline underline-offset-2'>시작하기</Link>
            <h2>01 / 04</h2>
        </div>
    )
}

export default Prologue; 