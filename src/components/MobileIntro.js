import React from "react";
import IMG from "../assets/images/bg/2.jpeg";
import styled from "styled-components/macro";
import SEP from "../assets/images/separators/Graphic motif_1.svg"
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
  background-position: center;
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
const Separator = styled.img`
  /* position: fixed; */
`;
Separator.defaultProps = {
  src: SEP,
  alt: "asdf"
};
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
      
      <Separator/> {/*작대기*/}
    </>
  );
}

export default MobileIntro;
