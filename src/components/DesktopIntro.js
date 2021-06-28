import React from "react";
import IMG from "../assets/images/bg/운동인.png";
import styled from "styled-components/macro";
const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 40em;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-items: center;
  height: inherit;
  flex: 1;
  &:first-child {
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
      ), url(${IMG})
    ;
    /* background-image: url(${IMG}); */
    background-repeat: no-repeat;
    background-size: cover;
    /* background-size: 100% auto; */
  }
  &:last-child {
    background:
      linear-gradient(
        rgba(18, 18, 18, 0.5) 0%,
        rgba(18, 18, 18, 0) 21.11%
      ),
      linear-gradient(
        rgba(18, 18, 18, 0) 50%,
        rgba(18, 18, 18, 0.5) 100%
      ), var(--blue);
    flex: 1.3;
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
  margin-bottom: 0.3rem;
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
// const Img = styled.img`
//   /* width: 100%; */
//   height: 100%;
//   flex: 1;
//   /* background-size: repeat; */
// `;
// Img.defaultProps = {
//   src: IMG,
// };
function DesktopIntro() {
  // 메뉴 토글이나 만들고 디테일한 intro 반응형은 나중에
  return (
    <>
      <Wrapper id="intro">
        <Column>
        {/* <Img></Img> */}
          {/* 둥둥 뜨는 로고 */}
        </Column>
        <Column>
          <CopyWrapper>
            <MainCopy>
              세이프짐에서 당신은<br></br>당신에게 집중할 수 있습니다.<br></br>
              안전하고 자유롭게 운동하세요.
            </MainCopy>
            <SubCopy>
              IN A SAFE GYM,<br></br>YOU CAN CONCENTRATE ON YOU.<br></br>
              EXERCISE SAFELY AND FREELY.
            </SubCopy>
          </CopyWrapper>
        </Column>
        {/* absolute로 들어갈 작대기 */}
      </Wrapper>
    </>
  );
}

export default DesktopIntro;
