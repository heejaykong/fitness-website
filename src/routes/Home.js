import React from 'react';
import About from '../components/About';
import Price from '../components/Price';
import Contact from '../components/Contact';
import Intro from '../components/Intro';
import BG_IMAGES from '../assets/images/bg/index.js';
import IMG from '../assets/images/bg/운동인.png';
// 첫 랜딩화면은 피피티 참고. 해당 배경은 스크롤하면 스크롤되게끔 구현하기
// http://thrivesolo.com/ 를 레퍼런스로 삼기
// 각 섹션들이 나뉘어지는건 계단 모양 길다란 선 그거 사용하기

function Home() {
  return (
    <>
      <section id="intro" style={{
        backgroundImage: `url(${IMG })`,
        backgroundPosition: "left",
        backgroundSize: "50%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#155be8"
      }}>
        <Intro/>
      </section>

      {/* <section id="about">
        <About/>
      </section>

      <section id="price">
        <Price/>
      </section>
      
      <section id="contact">
        <Contact/>
      </section> */}
      
    </>
  );
}

export default Home;
