import React from 'react';
import styled from 'styled-components/macro';
import { HashRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../assets/logo/safe-gym-logo.png';
// Hover했을때 메뉴 파란색으로 변하기(완)
// SPA인데, 네비게이터를 눌렀을때 그 섹션에 엥커되게끔 하는걸로(stories 빼고)(완)
// stories를 따로 맨 우측에 파란색으로 빼는 걸로
// stories 페이지는(브랜드스토리가 들어가는) 따로 페이지로 들어가질 예정

const NavBlock = styled.nav`
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  z-index: 10;
`;

const NavWrapper = styled.nav`
  position: relative;
  transition: background-color 0.4s ease 0s, box-shadow 0.4s ease 0s;
  background-color: transparent;
  box-shadow: transparent 0px 1px 0px 0px;
`;

const Nav = styled.nav`
  padding-left: 3.125rem;
  padding-right: 3.125rem;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 4rem;
  width: 100%;
  color: white;
`;

const LogoArea = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const NavLinks = styled.div`
  flex: 1 1 0%;
  margin-left: 2.5rem;
  transition: color 0.4s ease 0s;
  display: flex;
  position: relative;
`;

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: 600;

    &:last-child {
      color: #155be8;
    }

    &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
    }

    &:hover {
      color: #155be8;
    }

    & + & {
      margin-left: 1.5rem;
    }
`;

// .nav-stories {
//   /* text-decoration: none; */
//   color: #155be8;
// }

function Navigator() {
  return (
    <NavBlock>
      <NavWrapper>
        <Nav>
          <HashRouter>
            <LogoArea>
              <StyledLink to="/#top"><img src={logo} width="50" alt="safe-gym-logo" style={{filter: "invert(1)"}} /></StyledLink>
            </LogoArea>
            <NavLinks>
              <StyledLink to="/#about">About</StyledLink>
              <StyledLink to="/#price">Price</StyledLink>
              <StyledLink to="/#contact">Contact</StyledLink>
              <StyledLink to="/stories">Stories</StyledLink>
            </NavLinks>
          </HashRouter>
        </Nav>
      </NavWrapper>
    </NavBlock>
  );
}

export default Navigator;
