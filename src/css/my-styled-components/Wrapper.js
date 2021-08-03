import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.columnDir? `column` : `row`};
  justify-content: center;
  align-items: center;
  position: ${props => props.relative? `relative` : `static`};
  width: 100%;
  height: ${props => props.height || `40em;`};
  background-color: ${props => props.backgroundColor || props.theme.blue};

  .mobile {
  }
`;

export default Wrapper;