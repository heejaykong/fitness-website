import React from 'react';
import BG_IMAGES from '../assets/images/bg/index.js';
// 브랜딩 디자이너 님이 주신 디자인을 최대한 홈에 반영하기

function Home() {
  return (
    <>      
      <img src={ BG_IMAGES[3] } className="bg-image" alt="woman lifting weight"/>
      <div className='main-copy-container'>
        <h1>
          세이프짐에서 당신은 당신에게 집중할 수 있습니다.
          안전하고 자유롭게 운동하세요.
        </h1>
        <h5>
          IN A SAFE GYM, YOU CAN CONCENTRATE ON YOU.
        </h5>
        <h5>
          EXERCISE SAFELY AND FREELY.
        </h5>
      </div>
    </>
  );
}

export default Home;
