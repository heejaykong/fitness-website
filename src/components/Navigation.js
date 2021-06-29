import React from "react";
import styled from "styled-components/macro";
import { HashRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
// Hover했을때 메뉴 파란색으로 변하기(완)
// SPA인데, 네비게이터를 눌렀을때 그 섹션에 엥커되게끔 하는걸로(stories 빼고)(완)
// stories를 따로 맨 우측에 파란색으로 빼는 걸로(완)
// stories 페이지는(브랜드스토리가 들어가는) 따로 페이지로 들어가질 예정(완)
const $ = (selector) => document.querySelector(selector);
const BREAKPOINT = 935;

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
  background-color: transparent;
  font-size: 0.9rem;
  z-index: 10;
  @media (max-width: ${BREAKPOINT}px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 0rem;
    padding-left: 2rem;
    font-size: 1.1rem;
  }
`;
const NavColumn = styled.div`
`;
const NavList = styled.ul`
  display: flex;
  margin-left: 2.5rem;
  @media (max-width: ${BREAKPOINT}px) {
    flex-direction: column;
    margin-left: 0rem;
    margin-top: 1rem;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.2s, opacity 0.2s ease-in-out;
    /* height: 0;
    overflow: hidden;
    transition: height 0.2s ease-in-out; */
    &.shown {
      visibility: visible;
      opacity: 1;
      /* height: 50px; */
    }
  }
`;
const NavBtn = styled.li`
  & + & {
    margin-left: 1.5rem;
  }
  &:last-child {
    color: var(--blue);
  }
  @media (max-width: ${BREAKPOINT}px) {
    & + & {
      margin-left: 0rem;
      margin-top: 0.5rem;
    }
  }
`;
const NavLink = styled(Link)`
  font-weight: 500;
  -webkit-transition: color 0.1s ease-in-out;
  -moz-transition: color 0.1s ease-in-out;
  -ms-transition: color 0.1s ease-in-out;
  -o-transition: color 0.1s ease-in-out;
  transition: color 0.1s ease-in-out;
  &:hover {
    color: var(--blue);
  }
`;
const Arrow = styled.span`
  @media (min-width: ${BREAKPOINT}px){
    display: none;
  }
  @media (max-width: ${BREAKPOINT}px){
    display: inline-block;
    margin: 0 0.5rem;
    transition: transform 0.3s ease-in-out;
    &.rotated {
      transform: rotate(-180deg);
    }
    &:hover {
      cursor: pointer;
    }
  }
`;
const clickHandler = () => {
  $(".NavList").classList.toggle("shown");
  $(".Arrow").classList.toggle("rotated");
}
function Navigation() {
  return(
    <Nav>
      <HashRouter>
        <NavColumn>
          <NavLink to="/#top">logo</NavLink>
          <Arrow className="Arrow" onClick={clickHandler}>🔽</Arrow>
        </NavColumn>
        <NavColumn>
          <NavList className="NavList">
            <NavBtn><NavLink to="/#about">회사소개</NavLink></NavBtn>
            <NavBtn><NavLink to="/#price">수강료</NavLink></NavBtn>
            <NavBtn><NavLink to="/#contact">연락처</NavLink></NavBtn>
            <NavBtn><NavLink to="/stories">이야기</NavLink></NavBtn>
          </NavList>
        </NavColumn>
      </HashRouter>
    </Nav>
  );
}

export default Navigation;
