import React from "react";
import styled from "styled-components/macro";
import { HashRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  padding: 2rem 0rem;
  padding-left: 2rem;
  z-index: 10;
`;
const NavColumn = styled.div``;
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
const NavBtn = styled.li`
  & + & {
    margin-top: 0.3rem;
  }
  &:last-child {
    color: var(--blue);
  }
`;
const NavLink = styled(Link)`
  font-weight: 500;
  transition: color 0.1s ease-in-out;
  &:hover {
    color: var(--blue);
  }
`;
const clickHandler = (e) =>{
  console.log(e);
}
function MobileNavigation() {
  return (
    <>
      <Nav>
        <HashRouter>
          <NavColumn>
            <NavLink to="/#top">logo</NavLink>
            <div onClick={clickHandler}>toggle me</div>
          </NavColumn>
          <NavColumn>
            <NavList>
              <NavBtn><NavLink to="/#about">About</NavLink></NavBtn>
              <NavBtn><NavLink to="/#price">Price</NavLink></NavBtn>
              <NavBtn><NavLink to="/#contact">Contact</NavLink></NavBtn>
              <NavBtn><NavLink to="/stories">Stories</NavLink></NavBtn>
            </NavList>
          </NavColumn>
        </HashRouter>
      </Nav>
    </>
  );
}

export default MobileNavigation;
