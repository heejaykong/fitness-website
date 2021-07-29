import React from "react";
import styled from "styled-components/macro";
import Wrapper from "../css/my-styled-components/Wrapper";

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  & + & {
    margin-top: 2rem;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  &:first-child {
    align-items: flex-start;
  }
  &:last-child {
    align-items: flex-end;
  }
  & h1 {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 600;
  }
  & span {
    font-size: 1rem;
    font-weight: 600;
  }
`;

function Price() {
  return (
    <>
      <Wrapper id="price">
        <div>

          <Row>
            <Column>
              <h1>세이프짐 수업료</h1>
            </Column>
          </Row>
          <Row>
            <Column>
              <h1>personal training</h1>
              <span>10 세션</span>
            </Column>
            <Column>
              <span>1회 / 99,000</span>
              <span>990,000</span>
            </Column>
          </Row>
          <Row>
            <Column>
              <h1>personal training</h1>
              <span>20 세션</span>
            </Column>
            <Column>
              <span>1회 / 88,000</span>
              <span>1,760,000</span>
            </Column>
          </Row>
          <Row>
            <Column>
              <h1>personal training</h1>
              <span>30 세션</span>
            </Column>
            <Column>
              <span>1회 / 77,000</span>
              <span>2,310,000</span>
            </Column>
          </Row>
          <Row>
            <Column>
              <h1>personal training</h1>
              <span>40 세션</span>
            </Column>
            <Column>
              <span>1회 / 71,500</span>
              <span>3,575,000</span>
            </Column>
          </Row>
        </div>
      </Wrapper>
    </>
  );
}

export default Price;
