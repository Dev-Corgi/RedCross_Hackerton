import './login.scss'
import Image from 'next/image'
import Link from 'next/link'

function Login() {


    return (
        <div className='login'>
            <div className='logo-set'>
                <Image src="/logo.png" alt='logo' width={'41'} height={'45'} />
                <h1 className='text-[27px] font-semibold tracking-wide'>MESSENGER</h1>
            </div>
            <div className="panel">
                <h1 className='text-left text-3xl font-semibold tracking-wide'>당신의 글로 세상을 밝게<br />비춰주세요</h1>
                <input className='mt-[70px]' placeholder='이메일 주소' />
                <input className="mt-[30px]" placeholder='비밀번호' />
                <div className='issue'>
                    <button>가입하기</button>
                    <div>
                        <p>비밀번호를 잊었나요?</p>
                        <Link className='underline underline-offset-4' href='' >찾아보기</Link>
                    </div>
                </div>
                <p className='text-center mt-[38px]'>혹은, 다음으로 로그인</p>
                <div className='social-login'>
                    <Image src="/images/instaButton.png" alt="인스타그램" width={'90'} height={'90'}/>
                    <Image src="/images/googleButton.png" alt="구글" width={'90'} height={'90'}/>
                    <Image src="/images/kakaoButton.png" alt="카카오" width={'90'} height={'90'}/>
                </div>
            </div>
        </div>
    )
}


export default Login