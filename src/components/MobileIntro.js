import React from "react";
import IMG from "../assets/images/bg/운동인.png";
// import LOGO from "../assets/logo/safe-gym-logo.png";
import styled from "styled-components/macro";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40em;
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
  background-repeat: no-repeat;
  background-size: cover;
`;
const CopyWrapper = styled.div`
  margin-top: 10%;
`;
const MainCopy = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: -0.025rem;
  margin-bottom: 0.3rem;
`;
const SubCopy = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.025rem;
`;
// const Img = styled.img`
//   width: 100px;
//   filter: invert(1);
// `;
// Img.defaultProps = {
//   src: LOGO
// }
function MobileIntro() {
  return (
    <>
      <Wrapper id="intro">
        {/* logo */}
        {/* <Img/> */}
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
      </Wrapper>
    </>
  );
}

export default MobileIntro;
