import React from "react";
import styled from "styled-components/macro";
import { HashRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
// Hover했을때 메뉴 파란색으로 변하기(완)
// SPA인데, 네비게이터를 눌렀을때 그 섹션에 엥커되게끔 하는걸로(stories 빼고)(완)
// stories를 따로 맨 우측에 파란색으로 빼는 걸로
// stories 페이지는(브랜드스토리가 들어가는) 따로 페이지로 들어가질 예정
const Nav = styled.nav`
  display: flex;
  /* flex-direction: ; */
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  box-sizing: border-box;
  height: 4rem;
  padding: 0rem 3.125rem;
  background-color: transparent;
  z-index: 10;
`;
const NavColumn = styled.div``;
const NavList = styled.ul`
  display: flex;
  margin-left: 2.5rem;
`;
const NavBtn = styled.li`
  & + & {
    margin-left: 1.5rem;
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

function DesktopNavigation() {
  return (
    <>
      <Nav>
        <HashRouter>
          <NavColumn>
            <NavLink to="/#top">
              logo
              {/* TODO: logo svg image */}
            </NavLink>
          </NavColumn>
          <NavColumn>
            <NavList>
              <NavBtn>
                <NavLink to="/#about">About</NavLink>
              </NavBtn>
              <NavBtn>
                <NavLink to="/#price">Price</NavLink>
              </NavBtn>
              <NavBtn>
                <NavLink to="/#contact">Contact</NavLink>
              </NavBtn>
              <NavBtn>
                <NavLink to="/stories">Stories</NavLink>
              </NavBtn>
            </NavList>
          </NavColumn>
        </HashRouter>
      </Nav>
    </>
  );
}

export default DesktopNavigation;
