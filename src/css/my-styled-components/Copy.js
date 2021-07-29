import styled from "styled-components/macro";

export const MainCopy = styled.h1`
  /* font-size: 2.4rem; */
  font-size: clamp(1.4rem, 3.5vw, 2.8rem);
  font-weight: 700;
  letter-spacing: -0.025rem;
  -webkit-transition: font-size 0.5s ease-in-out;
  -moz-transition: font-size 0.5s ease-in-out;
  -ms-transition: font-size 0.5s ease-in-out;
  -o-transition: font-size 0.5s ease-in-out;
  transition: font-size 0.5s ease-in-out;
`;

export const SubCopy = styled.h4`
/* font-size: 1.4rem; */
font-size: clamp(1rem, 1.8vw, 1.8rem);
font-weight: 600;
letter-spacing: -0.025rem;
-webkit-transition: font-size 0.5s ease-in-out;
-moz-transition: font-size 0.5s ease-in-out;
-ms-transition: font-size 0.5s ease-in-out;
-o-transition: font-size 0.5s ease-in-out;
transition: font-size 0.5s ease-in-out;
`;

export const EngCopy = styled(SubCopy)`
  font-size: clamp(0.5rem, 1vw, 1rem);
  text-transform: uppercase;
`;