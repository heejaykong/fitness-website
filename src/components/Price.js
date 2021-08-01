import React from "react";
import styled from "styled-components/macro";
import Wrapper from "../css/my-styled-components/Wrapper";

const TableBox = styled.table`
  width: 70%;
`;
const TRow = styled.tr`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;
const TData = styled.td`
  display: flex;
  flex-direction: column;
  & > span {
    color: ${props=>props.theme.blue};
    font-size: 1.2rem;
    font-weight: 600;
  }
  &:last-child{
    align-items: flex-end;
  }
  &:last-child > span {
    letter-spacing: -0.1rem;
  }
`;
const THeader = styled.div`
  border-top: 1.5px solid ${props=>props.theme.blue};
  border-bottom: 1.5px solid ${props=>props.theme.blue};
  padding-top: 1rem;
  margin-bottom: 2.5rem;
`;
const H1 = styled.h1`
  font-size: 1.7rem;
  font-weight: 900;
  color: ${props=>props.theme.blue};
  text-transform: uppercase;
`;
const H4 = styled(H1)`
  font-size: 1rem;
  font-weight: 400;
`;
function Price() {
  return (
    <>
      <Wrapper columnDir id="price"
      backgroundColor="white">
        <TableBox>
          <THeader>
            <TRow>
              <TData>
                <div>
                  <H1>safe gym</H1>
                  <H1>personal training price</H1>
                  <H4 as="h4">
                    이화여대 체육학 석사, 건강운동관리사, 경력 7년 이상
                  </H4>
                </div>
              </TData>
            </TRow>
          </THeader>
          <TRow>
            <TData>
              <span>PERSONAL TRAINING</span>
              <span>10 sessions</span>
            </TData>
            <TData>
              <span>1회 / 99,000</span>
              <span>990,000</span>
            </TData>
          </TRow>
          <TRow>
            <TData>
              <span>PERSONAL TRAINING</span>
              <span>20 sessions</span>
            </TData>
            <TData>
              <span>1회 / 88,000</span>
              <span>1,170,000</span>
            </TData>
          </TRow>
          <TRow>
            <TData>
              <span>PERSONAL TRAINING</span>
              <span>30 sessions</span>
            </TData>
            <TData>
              <span>1회 / 77,000</span>
              <span>2,310,000</span>
            </TData>
          </TRow>
        </TableBox>
      </Wrapper>
    </>
  );
}

export default Price;
