import React from "react";
import styled from "styled-components/macro";
import { HashRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import LOGO from "../assets/logos/SAFE-GYM_LOGO_black.png";
import chevronDownSVG from "../assets/icons/chevron-down-solid.svg";
const $ = (selector) => document.querySelector(selector);

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  box-sizing: border-box;
  height: 4rem;
  padding: 0rem 3.125rem;
  background-color: rgba(0, 0, 0, 0.4);
  border-bottom: 0.1px solid rgba(255,255,255,0.5);
  font-size: 0.9rem;
  z-index: 10;
  @media (max-width: ${(props) => props.theme.BREAKPOINT}px) {
    flex-direction: column;
    align-items: center;
    height: 7rem;
    padding: 2rem 0rem;
    /* padding-left: 2rem; */
    font-size: 1.1rem;

    &.shown {
      height: inherit;
    }
  }
`;
const NavColumn = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
`;
const NavList = styled.ul`
  display: flex;
  margin-left: 2rem;

  @media (max-width: ${(props) => props.theme.BREAKPOINT}px) {
    flex-direction: column;
    margin-left: 0rem;
    margin-top: 1rem;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.2s, opacity 0.2s ease-in-out;

    &.shown {
      visibility: visible;
      opacity: 1;
    }
  }
`;
const NavBtn = styled.li`
  & + & {
    margin-left: 1.5rem;
  }
  @media (max-width: ${(props) => props.theme.BREAKPOINT}px) {
    & + & {
      margin-left: 0rem;
      margin-top: 0.5rem;
    }
  }
`;
const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  -webkit-transition: color 0.1s ease-in-out;
  -moz-transition: color 0.1s ease-in-out;
  -ms-transition: color 0.1s ease-in-out;
  -o-transition: color 0.1s ease-in-out;
  transition: color 0.1s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.blue};
  }
`;
// const Arrow = styled.span`
//   @media (min-width: ${(props) => props.theme.BREAKPOINT}px) {
//     display: none;
//   }
//   @media (max-width: ${(props) => props.theme.BREAKPOINT}px) {
//     display: inline-block;
//     transition: transform 0.3s ease-in-out;
//     &.rotated {
//       transform: rotate(-180deg);
//     }
//     &:hover {
//       cursor: pointer;
//     }
//   }
//   `;
const clickHandler = () => {
  $(".Nav").classList.toggle("shown");
  $(".NavList").classList.toggle("shown");
  $(".Arrow").classList.toggle("rotated");
};
const Logo = styled.img`
  width: 2.4rem;
  @media (max-width: ${(props) => props.theme.BREAKPOINT}px) {
    margin-bottom: 0.8rem;
  }
  filter: invert(1);
`;
Logo.defaultProps = {
  src: LOGO,
  alt: "logo",
};
const ArrowDown = styled.img`
  width: 1rem;
  filter: invert(1);
  @media (min-width: ${(props) => props.theme.BREAKPOINT}px) {
    display: none;
  }
  @media (max-width: ${(props) => props.theme.BREAKPOINT}px) {
    display: inline-block;
    transition: transform 0.3s ease-in-out;
    &.rotated {
      transform: rotate(180deg);
    }
    &:hover {
      cursor: pointer;
    }
  }
`;
ArrowDown.defaultProps ={
  src: chevronDownSVG,
  alt: "arrowDown"
}
function Navigation() {
  return (
    <Nav className="Nav">
      <HashRouter>
        <NavColumn>
          <NavLink to="/#top">
            <Logo />
          </NavLink>
          {/* <Arrow className="Arrow" onClick={clickHandler}>
            <ArrowDown/>
          </Arrow> */}
          <ArrowDown className="Arrow" onClick={clickHandler} />
        </NavColumn>
        <NavColumn>
          <NavList className="NavList">
            <NavBtn>
              <NavLink className="eng" to="/#about">SAFE GYM</NavLink>
            </NavBtn>
            <NavBtn>
              <NavLink to="/#price">수강료</NavLink>
            </NavBtn>
            <NavBtn>
              <NavLink to="/#contact">연락처</NavLink>
            </NavBtn>
          </NavList>
        </NavColumn>
      </HashRouter>
    </Nav>
  );
}

export default Navigation;
