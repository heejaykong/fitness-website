import React from "react";
import styled from "styled-components/macro";
// 컨텍트는 인스타그램과 카카오톡으로 넘어가는 형태
// 흰색 flaticon으로 통일했으면 좋겠음

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40em;
  background-color: gray;
`;

function Contact() {
  return (
    <>
      <Wrapper id="contact">
        <span>contact</span>
      </Wrapper>
    </>
  );
}

export default Contact;
