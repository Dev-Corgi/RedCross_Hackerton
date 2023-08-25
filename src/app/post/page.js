

import './post.scss';
import Link from 'next/link';

export default function Post({ params }) {


    // let data = {}

    // fetch('https://redcross.run.goorm.site/home/list/SIBA/' + params.id)
    // .then((r)=>{
    //     if(r.status == 200) return r.json();
    //     else { console.log(r.status); }
    // }).then((result)=>{
    //     console.log(result.data);
    // }).catch((e)=>{
    //     console.log(e);
    // })

    // useEffect(() => {
    //     axios.get('https://redcross.run.goorm.site/home/list/SIBA/' + id)
    //       .then((result) => {
    //         console.log(result.data);
    //         setChapter({
    //           name:result.data.name,
    //           title: result.data.title,
    //           writer: result.data.writer
    //         })
    //         setUserContent(result.data.main)
    //       }).catch((error) => {
    //         alert(error);
    //       })
    //   }, [])

    return (
        <div className="post">
            <div className='panel'>
                <div className='textpanel'>
                    <p>
                        제 3 장
                    </p>
                    <h1>
                        사랑을 찾아서
                    </h1>
                    <p>
                    어렸을 적 나는 아버지의 사랑을 가득 받으며 자랐어.
내 기억 속의 어린 시절은 아버지 무릎에 올라타 노래를 부르던 기억밖에 없을 정도라니까.
내가 맨처음 배운 노래가 ‘따오기’와 ‘꽃밭에서’ 였지.
우리 아버지는 단거리 육상선수였고 전국체전에서도 우승을 하셨던 사람이었어.
아버지는 법무사였고 외삼촌이 엄마를 소개시켜주셔서 둘이서 결혼을 하게 되셨다고 해.
우리 엄마는 아이들이 오래 살지 못하고 있는 상황에서 살아남은 귀한 막내 딸이었다고 해.
엄마랑 아버지는 13살 차이가 났어.
삼촌이 독립운동을 하시다가 만주로 가버리시는 바람에 아버지가 대신 형무소에 잡혀갔었는데 그 사이에 오빠가 태어났어.
오빠는 45년 3월에 태어났어.
그래도 해방된 연도에 태어나서 그나마 다행인 것 같아.
우리 아버지는 법원에서 일하시다가 익산에서 법무사를 내셨었어.
오빠들은 전주에서 태어났는데 나는 익산에서 태어났어.
내가 태어난 우리 집은 아버지가 직접 지은 집이었어.
집이 완공되고 4일 후에 내가 태어났다고 해.
아버지는 처음에는 딸이라서 조금 속상해하셨었는데 나중에 굉장히 나를 예뻐하셨어.
애교가 없는 나를 항상 아껴주시고 안아주셨어.
우리 집이 엄청 부유하진 않았지만 나에게는 항상 백화점 옷과 신발을 사주셨었어.
다들 고무신 신고 다닐 때 나는 운동화를 신고 다녔었다니까.
아버지는 내가 자고 있으면 같이 놀자고 머리를 쓰다듬어 주셨었어.
나는 백화점에서 옷을 사는 것이 특별한 일인줄 몰랐었다.
그런데 30년이 지나고 초등학교 동창회를 나가니까 앞집에 살던 친구가 그러더라구.
“나는 니가 진짜 부러웠다.
오빠와 아버지의 사랑을 받고 예쁜 옷을 입고 다니는 너가 정말 부러웠었어.
”라고 말하더라고 그때 처음 알았어.
외할머니,친가집 모두 하나뿐인 딸을 끔찍하게 아껴주셨었지.
나를 양녀로 데려가겠다고 막 하실 정도였다니까.
하지만 우리 어머니는 당연히 안 보내셨지.
초등학교 5학년, 6학년 때부터 나는 노래하길 좋아했어.
실력도 인정을 받았지만 우리 아버지가 노래랑 무용은 안된다고 하셔서 더 이상 하진 못했지.
                    </p>
                </div>
            </div>
            <Link href="/prologue">
            <img
          className="fixed top-[32px] right-[41px] w-10 h-10 object-cover"
          alt=""
          src="/videoclosebutton.png"
        /></Link>
        </div>
    )
}