import React from "react";
import styled from "styled-components/macro";
import Wrapper from "../css/my-styled-components/Wrapper";
import { MainCopy, EngCopy } from "../css/my-styled-components/Copy";

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
  & > ${EngCopy} {
    color: ${(props) => props.theme.blue};
    /* font-size: 1rem; */
    font-weight: 600;
  }
  &:last-child {
    align-items: flex-end;
  }
  &:last-child > ${EngCopy} {
    letter-spacing: -0.1rem;
  }
`;
const THeader = styled.div`
  border-top: 1.5px solid ${(props) => props.theme.blue};
  border-bottom: 1.5px solid ${(props) => props.theme.blue};
  padding-top: 1rem;
  margin-bottom: 2.5rem;
  @media (max-width: ${(props) => props.theme.BREAKPOINT}px) {
    /* mobile view */
    padding-top: 0rem;
    margin-bottom: 0rem;
  }
`;
const H1 = styled(MainCopy)`
  font-weight: 600;
  color: ${(props) => props.theme.blue};
  text-transform: uppercase;
  letter-spacing: -0.025rem;
`;
function Price() {
  return (
    <>
      <Wrapper columnDir id="price" backgroundColor="white">
        <TableBox>
          <THeader>
            <TRow>
              <TData>
                <div>
                  <H1 className="eng">safe gym</H1>
                  <H1 className="eng">personal training price</H1>
                </div>
              </TData>
            </TRow>
          </THeader>
          <TRow>
            <TData>
              <EngCopy className="eng">PERSONAL TRAINING</EngCopy>
              <EngCopy className="eng">10 sessions</EngCopy>
            </TData>
            <TData>
              <EngCopy>1회 / 99,000</EngCopy>
              <EngCopy>990,000</EngCopy>
            </TData>
          </TRow>
          <TRow>
            <TData>
              <EngCopy className="eng">PERSONAL TRAINING</EngCopy>
              <EngCopy className="eng">20 sessions</EngCopy>
            </TData>
            <TData>
              <EngCopy>1회 / 88,000</EngCopy>
              <EngCopy>1,760,000</EngCopy>
            </TData>
          </TRow>
          <TRow>
            <TData>
              <EngCopy className="eng">PERSONAL TRAINING</EngCopy>
              <EngCopy className="eng">30 sessions</EngCopy>
            </TData>
            <TData>
              <EngCopy>1회 / 77,000</EngCopy>
              <EngCopy>2,310,000</EngCopy>
            </TData>
          </TRow>
        </TableBox>
      </Wrapper>
    </>
  );
}

export default Price;
