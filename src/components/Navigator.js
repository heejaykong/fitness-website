import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../assets/logo/safe-gym-logo.png';
// stories를 따로 맨 우측에 파란색으로 빼는 걸로
// Hover했을때 메뉴 파란색으로 변하기
// SPA인데, 네비게이터를 눌렀을때 그 섹션에 엥커되게끔 하는걸로(stories 빼고)
// stories 페이지는(브랜드스토리가 들어가는) 따로 페이지로 들어가질 예정

function Navigator() {
  return (
    <>
      <nav>
        <HashRouter>
          <Link to="/">
            <img src={logo} className="nav-logo" width="50" alt="safe-gym-logo" />
          </Link>
          <Link to="/#about" className="nav-link">About</Link>
          <Link to="/#price" className="nav-link">Price</Link>
          <Link to="/#contact" className="nav-link">Contact</Link>
          <a href="/#stories" className="nav-link">Stories</a>
        </HashRouter>
      </nav>
    </>
  );
}

export default Navigator;
