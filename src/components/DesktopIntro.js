import React from "react";
import IMG from "../assets/images/bg/2.jpeg";
import SEP from "../assets/images/separators/Graphic motif_1.svg"
import styled from "styled-components/macro";
const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 40em;
`;
const GradientLayer = styled.div`
  position: absolute;
  background:
    linear-gradient(
      90deg,
      rgba(18, 18, 18, 0.5) 0%,
      rgba(18, 18, 18, 0) 50%
    ),
    linear-gradient(
      rgba(18, 18, 18, 0.5) 0%,
      rgba(18, 18, 18, 0) 21.11%
    ),
    linear-gradient(
      rgba(18, 18, 18, 0) 50%,
      rgba(18, 18, 18, 0.5) 100%
    );
  width: 100%;
  height: 100%;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-items: center;
  height: inherit;
  flex: 1;
  &:nth-child(2) {
    background: url(${IMG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  &:nth-child(3) {
    background-color: var(--blue);
    flex: 1.25;
  }
`;
const CopyWrapper = styled.div`
  /* margin-left: 3rem; */
  margin-bottom: 3rem;
`;
const MainCopy = styled.h1`
  /* font-size: 2.4rem; */
  font-size: clamp(1.4rem, 3vw, 2.8rem);
  font-weight: 700;
  letter-spacing: -0.025rem;
  -webkit-transition: font-size 0.5s ease-in-out;
  -moz-transition: font-size 0.5s ease-in-out;
  -ms-transition: font-size 0.5s ease-in-out;
  -o-transition: font-size 0.5s ease-in-out;
  transition: font-size 0.5s ease-in-out;
`;
const SubCopy = styled.h4`
  /* font-size: 1.4rem; */
  font-size: clamp(1rem, 1.8vw, 1.8rem);
  font-weight: 600;
  letter-spacing: -0.025rem;
  -webkit-transition: font-size 0.5s ease-in-out;
  -moz-transition: font-size 0.5s ease-in-out;
  -ms-transition: font-size 0.5s ease-in-out;
  -o-transition: font-size 0.5s ease-in-out;
  transition: font-size 0.5s ease-in-out;
`;
const EngCopy = styled(SubCopy)`
  font-size: clamp(0.5rem, 1vw, 1rem);
  text-transform: uppercase;
`;
const Separator = styled.img`
  position: absolute;
  top: 36.8rem;
  width: 100%;
  height: 100px;
`;
Separator.defaultProps = {
  src: SEP,
  alt: "divider"
};
function DesktopIntro() {
  return (
    <>
      <Wrapper id="intro">
        <GradientLayer />
        <Column>
          {/* 둥둥 뜨는 로고 */}
        </Column>
        <Column>
          <CopyWrapper>
            <MainCopy>
              당신을 건강하게,<br/>더 많은 여성을 건강하게
            </MainCopy>
            <SubCopy>
              세이프짐에서 당신은 당신에게 집중할 수 있습니다.<br></br>
              안전하고 자유롭게 운동하세요.
            </SubCopy>
            <EngCopy>
              at safe gym, you can focus on you. exercise freely and safely.
            </EngCopy>
          </CopyWrapper>
        </Column>
        <Separator/>
      </Wrapper>
    </>
  );
}

export default DesktopIntro;
