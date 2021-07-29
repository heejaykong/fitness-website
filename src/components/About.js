import React from "react";
import styled from "styled-components/macro";
import LOGO from "../assets/logos/SAFE-GYM_SYMBOL_black.png";
import IMG1 from "../assets/images/bg/3.jpeg";
import IMG2 from "../assets/images/bg/4.jpeg";
import SEP from "../assets/images/separators/Graphic motif_1.svg";
import Wrapper from "../css/my-styled-components/Wrapper";
import {MainCopy, SubCopy, EngCopy} from "../css/my-styled-components/Copy";

const Wrapper2 = styled(Wrapper)`
  background-color: ${(props) => props.theme.blue};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40em;
  /* background-color: grey; */
  & div {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Logo = styled.img`
  width: 13rem;
  filter: invert(1);
`;
Logo.defaultProps = {
  src: LOGO,
  alt: "logo",
};
const Separator = styled.img`
  /* position: absolute; */
  top: 36.8rem;
  width: 100%;
  height: 100px;
`;
Separator.defaultProps = {
  src: SEP,
  alt: "divider",
};
function About() {
  return (
    <>
      {/* 1안 */}
      <p>
        <br />
        <br />
        1안
      </p>
      <Wrapper
        id="about"
        style={{
          background: `linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.5)
        ), url(${IMG2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // filter: "brightness(50%)"
        }}
      >
        <SubCopy>세이프짐의 미션</SubCopy>
        <MainCopy>당신의 건강과 행복에 기여하는 것</MainCopy>
        <MainCopy>
          당신이 더 많은 모험을 할 용기를 몸으로부터 얻을 수 있도록 돕습니다
        </MainCopy>
      </Wrapper>
      <Wrapper style={{ backgroundColor: `${(props) => props.theme.blue}` }}>
        <SubCopy>세이프짐의 약속</SubCopy>
        {/* logo image 크게 */}
        <Logo />
        <MainCopy>장애물 없는 운동 공간</MainCopy>
        <EngCopy>안전하고 자유로운 환경을 제공합니다.</EngCopy>
      </Wrapper>
      <Wrapper
        style={{
          background: `linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.5)
        ), url(${IMG1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MainCopy>당신을 당신답게</MainCopy>
        <EngCopy>한 사람을 위한 개별화된 운동 프로그램을 만듭니다.</EngCopy>
      </Wrapper>
      <Wrapper style={{ backgroundColor: `${(props) => props.theme.blue}` }}>
        <Separator />
        <MainCopy>더 많은 여성이 건강해질 수 있도록</MainCopy>
        <EngCopy>
          당신이 건강이 더 많은 여성에게 용기가 될 수 있도록 당신의 성장을
          기록합니다.
        </EngCopy>
      </Wrapper>

      {/* 3안 */}
      <p>3안</p>
      <Wrapper2>
        <div
          style={{
            padding: "2rem",
          }}
        >
          <MainCopy>내가 존중 받는 운동 공간</MainCopy>
          <SubCopy>
            용기를 몸으로부터 얻을 수 있도록,
            <br />
            세이프짐의 안전한 환경에서 자유롭게 움직이세요
          </SubCopy>
        </div>
        <div>
          <Logo />
        </div>
      </Wrapper2>
      <Wrapper2>
        <div
          style={{
            background: `linear-gradient(
            rgba(0, 0, 0, 0.5), 
            rgba(0, 0, 0, 0.5)
          ), url(${IMG1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        ></div>
        <div
          style={{
            padding: "2rem",
          }}
        >
          <MainCopy>개인 맞춤 프로그램</MainCopy>
          <SubCopy>
            몇 개의 숫자로 이루어진 성과보다 더 큰 변화를 만들 수 있도록, 한
            사람을 위한 개별화된 운동 프로그램을 제공합니다.
          </SubCopy>
        </div>
      </Wrapper2>
      <Wrapper2>
        <div
          style={{
            padding: "2rem",
          }}
        >
          <MainCopy>성장 기록 시스템</MainCopy>
          <SubCopy>
            당신이 건강이 많은 여성에게 용기가 될 수 있도록,<br></br>당신의 성장
            스토리를 기록합니다.
          </SubCopy>
        </div>
        <div>
          <Separator />
        </div>
      </Wrapper2>
      {/* ----------------------------- */}
      <Wrapper>
        <p>세이프짐의 가치</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              borderRadius: "50%",
              width: "250px",
              height: "250px",
              backgroundColor: "white",
              margin: "40px",
            }}
          ></div>
          <div
            style={{
              borderRadius: "50%",
              width: "250px",
              height: "250px",
              backgroundColor: "white",
              margin: "40px",
            }}
          ></div>
          <div
            style={{
              borderRadius: "50%",
              width: "250px",
              height: "250px",
              backgroundColor: "white",
              margin: "40px",
            }}
          ></div>
        </div>
      </Wrapper>
    </>
  );
}

export default About;
