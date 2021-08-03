import styled from "styled-components/macro";

export const MainCopy = styled.h1`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  @media (max-width: ${(props) => props.theme.BREAKPOINT}px) {
    /* mobile view */
    font-size: clamp(1.3rem, 5vw, 2.5rem);
  }
  font-weight: ${ props => props.thick? 900 : 600};
  /* letter-spacing: -0.1rem; */
  text-transform: uppercase;
  -webkit-transition: font-size 0.5s ease-in-out;
  -moz-transition: font-size 0.5s ease-in-out;
  -ms-transition: font-size 0.5s ease-in-out;
  -o-transition: font-size 0.5s ease-in-out;
  transition: font-size 0.5s ease-in-out;
`;

export const SubCopy = styled.h4`
  font-size: clamp(1.4rem, 2.3vw, 1rem);
  @media (max-width: ${(props) => props.theme.BREAKPOINT}px) {
    /* mobile view */
    font-size: clamp(0.9rem, 3.5vw, 2rem);
  }
  font-weight: 100;
  text-transform: uppercase;
  -webkit-transition: font-size 0.5s ease-in-out;
  -moz-transition: font-size 0.5s ease-in-out;
  -ms-transition: font-size 0.5s ease-in-out;
  -o-transition: font-size 0.5s ease-in-out;
  transition: font-size 0.5s ease-in-out;

  ${MainCopy} + & {
    margin-top: 1rem;
  }
`;

export const EngCopy = styled(SubCopy)`
  /* font-size: clamp(1rem, 2vw, 2rem); */
  font-size: clamp(0.8rem, 2vw, 2rem);
`;