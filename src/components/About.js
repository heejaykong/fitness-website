import React from 'react';
import styled from 'styled-components/macro';
// 어바웃은 텍스트/사진 위주가 될 것

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40em;
  background-color: grey;
`;

function About() {
  return (
    <>
      <Wrapper id="about">
        <span>about</span>
      </Wrapper>
    </>
  );
}

export default About;
