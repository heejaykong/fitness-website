import React from "react";
import styled from "styled-components/macro";
import Wrapper from "../css/my-styled-components/Wrapper";
// import { HashLink as Link } from "react-router-hash-link";
// import { Link } from 'react-router-dom';
import {SubCopy, EngCopy} from "../css/my-styled-components/Copy";
import LOGO from "../assets/logos/SAFE-GYM_LOGO_black.png";
// 컨텍트는 인스타그램과 카카오톡으로 넘어가는 형태
// 흰색 flaticon으로 통일했으면 좋겠음

const CopyBox = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Logo = styled.img`
  width: 4rem;
  margin-bottom: 0.8rem;
  filter: invert(1);
`;
Logo.defaultProps = {
  src: LOGO,
  alt: "logo",
};

const CopyrightBox = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CopyrightSpan = styled(EngCopy)`
  text-transform: inherit;
  font-size: clamp(0.5rem, 1vw, 2rem);
  letter-spacing: 0;
`;
function Contact() {
  return (
    <>
      <Wrapper height="35rem" id="contact">
        <CopyBox>
          <SubCopy style={{textAlign:"center"}}>위치<br/>서울특별시 마포구 월드컵로 104 2층</SubCopy>
          <a href="https://www.instagram.com/_safegym/">
            <SubCopy fontWeight="600">세이프짐 인스타그램</SubCopy> 
          </a>
          <a href="http://naver.me/5SWqGGm2">
            <SubCopy fontWeight="600">네이버로 예약하기</SubCopy> 
          </a>
          <a href="http://pf.kakao.com/_XIiFs">
            <SubCopy fontWeight="600">카카오톡 상담하기</SubCopy>
          </a>
          <CopyrightBox>
            <Logo />
            <CopyrightSpan>&copy; 2021 세이프짐. All rights reserved.</CopyrightSpan>
          </CopyrightBox>
        </CopyBox>
      </Wrapper>
    </>
  );
}

export default Contact;
