import React from "react";
import IMG from "../assets/images/bg/2.jpeg";
import SEP from "../assets/images/separators/Graphic motif_1.svg";
import styled from "styled-components/macro";
import Wrapper from "../css/my-styled-components/Wrapper";
import {MainCopy, SubCopy, EngCopy} from "../css/my-styled-components/Copy";
// Desktop
const GradientLayer = styled.div`
  position: absolute;
  background: linear-gradient(
      90deg,
      rgba(18, 18, 18, 0.5) 0%,
      rgba(18, 18, 18, 0) 50%
    ),
    linear-gradient(rgba(18, 18, 18, 0.5) 0%, rgba(18, 18, 18, 0) 21.11%),
    linear-gradient(rgba(18, 18, 18, 0) 50%, rgba(18, 18, 18, 0.5) 100%);
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
    background-color: ${(props) => props.theme.blue};
    flex: 1.25;
  }
`;
const CopyWrapper = styled.div`
  /* margin-left: 3rem; */
  margin-bottom: 3rem;
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
      rgba(18, 18, 18, 0.3) 0%,
      rgba(18, 18, 18, 0.3) 50%
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
            <SubCopy>
              empowering all women
            </SubCopy>
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
        <Wrapper relative id="intro">
          <GradientLayer />
          <Column>{/* 둥둥 뜨는 로고 */}</Column>
          <Column>
            <CopyWrapper>
              <SubCopy>
                empowering all women
              </SubCopy>
              <MainCopy>
                당신을 건강하게, 더 많은 여성을 건강하게
              </MainCopy>
            </CopyWrapper>
          </Column>
          <Separator />
        </Wrapper>
      </>
    );
  }
}

export default Intro;
