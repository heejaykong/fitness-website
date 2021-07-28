import React from "react";
import Intro from "../components/Intro";
import About from "../components/About";
import Price from "../components/Price";
import Contact from "../components/Contact";
// http://thrivesolo.com/ 를 레퍼런스로 삼기(완)
// 반응형 참고: https://goshakkk.name/different-mobile-desktop-tablet-layouts-react/

function Home({ isMobile }) {
  return (
    <>
      <Intro isMobile={isMobile} />
      <About />
      <Price />
      <Contact />
    </>
  );
}

export default Home;
