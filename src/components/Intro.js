import React from 'react';
import styled from 'styled-components/macro';
import BG_IMAGES from '../assets/images/bg/index.js';
const TitleWrapper = styled.title`
  width: 45vw;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const Title = styled.h1`
  color: white;
  font-size: xx-large;
  font-weight: 700;
  letter-spacing: -0.04em;
`;
const SubTitle = styled.h5`
  color: #ffffff;
`;

function Intro() {
  return (
    <>
    {/* <img src={ BG_IMAGES[3] } className="bg-image" alt="woman lifting weight"/> */}
      <TitleWrapper>
        <Title>세이프짐에서 당신은 당신에게 집중할 수 있습니다. 안전하고 자유롭게 운동하세요.</Title>
      </TitleWrapper>
        <SubTitle>IN A SAFE GYM, YOU CAN CONCENTRATE ON YOU.</SubTitle>
        <SubTitle>EXERCISE SAFELY AND FREELY.</SubTitle>
    </>
  );
}

export default Intro;
