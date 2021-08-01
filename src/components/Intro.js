import React from "react";
import IMG from "../assets/images/bg/6.jpeg";
import SEP from "../assets/images/separators/Graphic motif_1.svg";
import styled from "styled-components/macro";
import Wrapper from "../css/my-styled-components/Wrapper";
// import {MainCopy, SubCopy, EngCopy} from "../css/my-styled-components/Copy";
import {MainCopy} from "../css/my-styled-components/Copy";
// Desktop
const GradientLayer = styled.div`
  position: absolute;
  background: linear-gradient(
      90deg,
      rgba(18, 18, 18, 0.5) 0%,
      rgba(18, 18, 18, 0.5) 50%
    ),
    /* linear-gradient(rgba(18, 18, 18, 0.5) 0%, rgba(18, 18, 18, 0) 21.11%),
    linear-gradient(rgba(18, 18, 18, 0) 50%, rgba(18, 18, 18, 0.5) 100%), */
    url(${IMG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
// const Column = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   align-items: center;
//   height: inherit;
//   flex: 1;
//   &:nth-child(1) {
//     background: url(${IMG});
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center;
//   }
//   &:nth-child(2) {
//     background-color: ${(props) => props.theme.blue};
//     flex: 1.25;
//   }
// `;
const CopyWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  /* margin-left: 3rem; */
  margin-bottom: 3rem;
`;
const IntroCopy = styled(MainCopy)`
  font-weight: 100;
  font-size: 2.7rem;
  letter-spacing: 0rem;
`;
const Separator = styled.img`
  position: absolute;
  top: 36.8rem;
  width: 100%;
  height: 100px;
`;
Separator.defaultProps = {
  src: SEP,
  alt: "divider",
};

// Mobile
const MobileWrapper = styled(Wrapper)`
  background: linear-gradient(
      90deg,
      rgba(18, 18, 18, 0.5) 0%,
      rgba(18, 18, 18, 0.5) 50%
    ),
    linear-gradient(rgba(18, 18, 18, 0.5) 0%, rgba(18, 18, 18, 0) 21.11%),
    linear-gradient(rgba(18, 18, 18, 0) 50%, rgba(18, 18, 18, 0.5) 100%),
    url(${IMG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
function Intro({ isMobile }) {
  if (isMobile) {
    return (
      <>
        <MobileWrapper id="intro">
          {/* logo */}
          {/* <Img/> */}
          <CopyWrapper>
            <MainCopy style={{fontWeight:"600"}}>
              empowering all women
            </MainCopy>
            <MainCopy>
              당신을 건강하게, 더 많은 여성을 건강하게
            </MainCopy>
          </CopyWrapper>
        </MobileWrapper>
        <Separator /> {/*작대기*/}
      </>
    );
  } else {
    return (
      <>
        <Wrapper id="intro"
        relative
        backgroundColor="transparent">
          <GradientLayer />
          {/* <Column>둥둥 뜨는 로고</Column> */}
          {/* <Column> */}
            <CopyWrapper>
              <IntroCopy>
                empowering all women
              </IntroCopy>
              <IntroCopy>
                당신을 건강하게, 더 많은 여성을 건강하게
              </IntroCopy>
            </CopyWrapper>
          {/* </Column> */}
          <Separator />
        </Wrapper>
      </>
    );
  }
}

export default Intro;
