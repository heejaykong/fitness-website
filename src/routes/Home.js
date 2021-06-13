import React from 'react';
import About from './About';
import BG_IMAGES from '../assets/images/bg/index.js';
// 첫 랜딩화면은 피피티 참고. 해당 배경은 스크롤하면 스크롤되게끔 구현하기
// http://thrivesolo.com/ 를 레퍼런스로 삼기
// 각 섹션들이 나뉘어지는건 계단 모양 길다란 선 그거 사용하기

function Home() {
  return (
    <>
      <img src={ BG_IMAGES[3] } className="bg-image" alt="woman lifting weight"/>
      <section id="section1" className='main-copy-container'>
        <h1>세이프짐에서 당신은 당신에게 집중할 수 있습니다. 안전하고 자유롭게 운동하세요.</h1>
        <h5>IN A SAFE GYM, YOU CAN CONCENTRATE ON YOU.</h5>
        <h5>EXERCISE SAFELY AND FREELY.</h5>
      </section>

      <About/>

      <section id="price">
      price
      </section>
      
      <section id="contact">
      contact
      </section>
      
      
    </>
  );
}

export default Home;
