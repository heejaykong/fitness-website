import React from "react";
import styled from "styled-components/macro";
import LOGO from "../assets/logos/SAFE-GYM_SYMBOL_black.png";
import IMG1 from "../assets/images/bg/1.jpeg";
import IMG2 from "../assets/images/bg/4.jpeg";
import SEP from "../assets/images/separators/Graphic motif_1.svg";
import Wrapper from "../css/my-styled-components/Wrapper";
import {MainCopy, SubCopy, EngCopy} from "../css/my-styled-components/Copy";

const Logo = styled.img`
  width: 13rem;
  filter: invert(1);
`;
Logo.defaultProps = {
  src: LOGO,
  alt: "logo",
};
const Separator = styled.img`
  width: 100%;
`;
Separator.defaultProps = {
  src: SEP,
  alt: "divider",
};
const CircleBox = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap-reverse;
`;
const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  padding: 2rem;
  margin: 1rem;
  background-color: white;
  border-radius: 50%;
  span {
    color: ${props=>props.theme.blue};
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
const Wrapper1 = styled(Wrapper)`
  background-image: url(${IMG1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  mask-image: url(${LOGO});
  mask-size: 30rem;
  mask-repeat: no-repeat;
  mask-position: center;
`;
function About() {
  return (
    <>
      <Wrapper1 columnDir id="about">
        {/* logo image 크게 */}
        <MainCopy>장애물 없는 운동 공간</MainCopy>
        <SubCopy>당신이 당신답게 운동할 수 있는</SubCopy>
        <SubCopy>안전하고 자유로운 환경을 만듭니다.</SubCopy>
      </Wrapper1>
      <Wrapper columnDir>
        <MainCopy>개인 맞춤 운동 프로그램</MainCopy>
        <SubCopy>한 사람을 위한</SubCopy>
        <SubCopy>개별화된 운동 프로그램을 만듭니다.</SubCopy>
      </Wrapper>
      <Wrapper columnDir>
        <Separator />
        <MainCopy>성장의 기록</MainCopy>
        <SubCopy>더 많은 여성에게 용기가 될 수 있도록</SubCopy>
        <SubCopy>당신의 이야기를 기록합니다.</SubCopy>
      </Wrapper>
      <Wrapper columnDir>
        <MainCopy>세이프짐의 가치</MainCopy>
        <CircleBox>
          <Circle><span>전문성</span></Circle>
          <Circle><span>안전</span></Circle>
          <Circle><span>성장</span></Circle>
        </CircleBox>
      </Wrapper>
    </>
  );
}

export default About;
