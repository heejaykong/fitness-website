import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 40em;
  background-color: ${(props) => props.theme.blue};
`;

export default Wrapper;