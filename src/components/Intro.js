import React from "react";
import styled from "styled-components/macro";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import IntroCoverIMG from "../assets/images/bg/6.jpeg";
import StepSVG from "../assets/images/separators/Graphic motif_1.svg";
import Wrapper from "../css/my-styled-components/Wrapper";
import {MainCopy} from "../css/my-styled-components/Copy";

// Desktop
const ImageCover = styled(motion.div)`
  position: absolute;
  background: linear-gradient(
      90deg,
      rgba(18, 18, 18, 0.5) 0%,
      rgba(18, 18, 18, 0.5) 50%
    ),
    /* linear-gradient(rgba(18, 18, 18, 0.5) 0%, rgba(18, 18, 18, 0) 21.11%),
    linear-gradient(rgba(18, 18, 18, 0) 50%, rgba(18, 18, 18, 0.5) 100%), */
    url(${IntroCoverIMG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const ImageCoverAnimation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <ImageCover
      animate={{
        opacity: inView ? 1 : 0,
      }}
      transition={{
        delay: 0.5,
        ease: "easeInOut",
        duration: 0.5
      }}
      initial={false}
      ref={ref}
    />
  );
}
// const Column = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   align-items: center;
//   height: inherit;
//   flex: 1;
//   &:nth-child(1) {
//     background: url(${IntroCoverIMG});
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center;
//   }
//   &:nth-child(2) {
//     background-color: ${(props) => props.theme.blue};
//     flex: 1.25;
//   }
// `;
const CopyWrapper = styled(motion.div)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-bottom: 3rem;
`;
const TextAnimation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <CopyWrapper
      animate={{
        opacity: inView ? 1 : 0,
      }}
      transition={{
        delay: 0.3,
        ease: "easeInOut",
        duration: 0.5
      }}
      initial={false}
      ref={ref}
    >
      <IntroCopy>
        empowering all women
      </IntroCopy>
      <IntroCopy>
        당신을 건강하게, 더 많은 여성을 건강하게
      </IntroCopy>
    </CopyWrapper>
  );
}
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
  src: StepSVG,
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
    url(${IntroCoverIMG});
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
          {TextAnimation()}
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
        <Wrapper
          id="intro"
          relative
          backgroundColor="transparent"
        >
          {ImageCoverAnimation()}
          {/* <Column>둥둥 뜨는 로고</Column> */}
          {/* <Column> */}
          {TextAnimation()}
{/*           
            <CopyWrapper>
              <IntroCopy>
                empowering all women
              </IntroCopy>
              <IntroCopy>
                당신을 건강하게, 더 많은 여성을 건강하게
              </IntroCopy>
            </CopyWrapper> */}
          {/* </Column> */}
          <Separator />
        </Wrapper>
      </>
    );
  }
}

export default Intro;
