import React from "react";
import DesktopIntro from '../components/DesktopIntro';
import MobileIntro from '../components/MobileIntro';
import About from '../components/About';
import Price from '../components/Price';
import Contact from '../components/Contact';
// 첫 랜딩화면은 피피티 참고. 해당 배경은 스크롤하면 스크롤되게끔 구현하기
// http://thrivesolo.com/ 를 레퍼런스로 삼기
// 각 섹션들이 나뉘어지는건 계단 모양 길다란 선 그거 사용하기
// 반응형 참고: https://goshakkk.name/different-mobile-desktop-tablet-layouts-react/

function Home({isMobile}) {
  return (
    <>
      {isMobile ? <MobileIntro /> : <DesktopIntro />}
      <About />
      <Price />
      <Contact />
    </>
  );
}

export default Home;
