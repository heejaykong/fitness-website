import React from "react";
import styled from "styled-components/macro";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import LOGO from "../assets/logos/SAFE-GYM_SYMBOL_black.png";
import IMG1 from "../assets/images/bg/5.jpeg";
import IMG2 from "../assets/images/bg/3.jpeg";
import StepSVG from "../assets/images/separators/Graphic motif_1.svg";
import Wrapper from "../css/my-styled-components/Wrapper";
import {MainCopy, SubCopy} from "../css/my-styled-components/Copy";

const ImageCover = styled(motion.div)`
  position: absolute;
  background: linear-gradient(
      90deg,
      rgba(18, 18, 18, 0.5) 0%,
      rgba(18, 18, 18, 0.5) 50%
    ),
    /* linear-gradient(rgba(18, 18, 18, 0.5) 0%, rgba(18, 18, 18, 0) 21.11%),
    linear-gradient(rgba(18, 18, 18, 0) 50%, rgba(18, 18, 18, 0.5) 100%), */
    url(${IMG2});
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
        ease: "easeInOut",
        duration: 0.5
      }}
      initial={false}
      ref={ref}
    />
  );
}
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LogoMask = styled(motion.div)`
  width: min(80vw, 30rem);
  height: min(80vw, 30rem);
  margin: -90px 0 0 0;

  background-image: url(${IMG1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  mask-image: url(${LOGO});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
`;
const LogoMaskAnimation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <LogoMask
      animate={{
        y: inView ? 0 : `1rem`,
        opacity: inView ? 1 : 0,
      }}
      transition={{
        delay: 0.1,
        ease: "easeInOut",
        duration: 1
      }}
      initial={false}
      ref={ref}
    />
  );
};
const CopyBox = styled.div`
  position: absolute;
  top: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StepIMG = styled(motion.img)`
  width: 100%;
  margin-bottom: 2rem;
  opacity: ${props => props.inView ? 1 : 0};
  transition: all 1s ease-in-out;
`;
StepIMG.defaultProps = {
  src: StepSVG,
  alt: "divider",
};
const stepVariants = {
  initial: {
    clipPath: 'inset(0 100% 0 0)',
  },
  animate: {
    clipPath: 'inset(0)'
  }
}
const StepAnimation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <StepIMG
      ref={ref}
      inView={inView}
      variants={stepVariants}
      initial= {inView? "" : "initial"}
      animate= {inView? "animate" : ""}
      transition={{ ease: "easeInOut", duration: 1 }}
    />
  );
};

const ValueMainCopy = styled(MainCopy)`
  color: ${props=>props.theme.blue};
`;
const CircleBox = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap-reverse;
`;
const Circle = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(10rem, 20vw, 20rem);
  height: clamp(10rem, 20vw, 20rem);
  margin: 0.3rem;
  background-color: ${props=>props.theme.blue};
  border-radius: 50%;
  span {
    color: ${props=>props.theme.white};
    font-size: 2rem;
    font-weight: 900;
  }
`;
const CircleAnimation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <>
    <Circle
      animate={{
        y: inView ? 0 : `1rem`,
        opacity: inView ? 1 : 0,
      }}
      transition={{
        ease: "easeInOut",
        duration: 1
      }}
      initial={false}
      ref={ref}
    >
      <span>전문성</span>
    </Circle>
    <Circle
      animate={{
        y: inView ? 0 : `1rem`,
        opacity: inView ? 1 : 0,
      }}
      transition={{
        delay: 0.1,
        ease: "easeInOut",
        duration: 1
      }}
      initial={false}
      ref={ref}
    >
      <span>안전</span>
    </Circle>
    <Circle
      animate={{
        y: inView ? 0 : `1rem`,
        opacity: inView ? 1 : 0,
      }}
      transition={{
        delay: 0.2,
        ease: "easeInOut",
        duration: 1
      }}
      initial={false}
      ref={ref}
    >
      <span>성장</span>
    </Circle>
    </>
  );
};

function About() {
  return (
    <>
      <Wrapper columnDir id="about" height="43rem">
        <Container>
          {LogoMaskAnimation()}
          <CopyBox>
            <MainCopy>장애물 없는 운동 공간</MainCopy>
            <SubCopy>당신이 당신답게 운동할 수 있는</SubCopy>
            <SubCopy>안전하고 자유로운 환경을 만듭니다.</SubCopy>
          </CopyBox>
        </Container>
      </Wrapper>
      <Wrapper columnDir relative backgroundColor="transparent">
        {/* <GradientLayer /> */}
        {ImageCoverAnimation()}
        <MainCopy>개인 맞춤 운동 프로그램</MainCopy>
        <SubCopy>한 사람을 위한</SubCopy>
        <SubCopy>개별화된 운동 프로그램을 만듭니다.</SubCopy>
      </Wrapper>
      <Wrapper columnDir>
        {StepAnimation()}
        <MainCopy>성장의 기록</MainCopy>
        <SubCopy>더 많은 여성에게 용기가 될 수 있도록</SubCopy>
        <SubCopy>당신의 이야기를 기록합니다.</SubCopy>
      </Wrapper>
      <Wrapper columnDir backgroundColor={props=>props.theme.gray2}>
        <ValueMainCopy>세이프짐의 가치</ValueMainCopy>
        <CircleBox>
          {CircleAnimation()}
          {/* {CircleAnimation()}
          {CircleAnimation()} */}
          {/* <Circle><span>전문성</span></Circle> */}
          {/* <Circle><span>안전</span></Circle> */}
          {/* <Circle><span>성장</span></Circle> */}
        </CircleBox>
      </Wrapper>
    </>
  );
}

export default About;
