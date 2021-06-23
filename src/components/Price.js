import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40em;
`;

function Price() {
  return (
    <>
      <Wrapper id="price">
        <span>price</span>
      </Wrapper>
    </>
  );
}

export default Price;
