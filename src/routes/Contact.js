import React from 'react';
// 컨텍트는 인스타그램과 카카오톡으로 넘어가는 형태
import ig from '../assets/logo/instagram.png';
import kakao from '../assets/logo/kakao.png';

function Contact() {
  return (
    <>
      <h1 className='contact-title'>CONTACT</h1>
      
      <p className='contact-sns'>(지역)본점</p>
      <p>12-345-6789</p>

      <p className='contact-sns'>인스타그램</p>
      <img src={ig} width='50'/>

      <p className='contact-sns'>카카오톡</p>
      <img src={kakao} width='60'/>

    </>
  );
}

export default Contact;
