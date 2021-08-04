import { createGlobalStyle } from "styled-components/macro";
import FoundersGroteskCondensedRegularWOFF2 from "../assets/fonts/founders-grotesk-condensed-web-regular.woff2";
import FoundersGroteskCondensedSemiBoldWOFF2 from "../assets/fonts/founders-grotesk-condensed-web-semibold.woff2";
const GlobalStyle = createGlobalStyle`
  /* local 영문 폰트 */
  @font-face {
  font-family: 'Founders Grotesk Condensed';
    src: url(${FoundersGroteskCondensedRegularWOFF2}) format('woff2');
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Founders Grotesk Condensed';
    src: url(${FoundersGroteskCondensedSemiBoldWOFF2}) format('woff2');
    font-weight: 600;
    font-display: swap;
  }
  
  /* reset.css */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* 여기부턴 커스텀 */
  * {
    box-sizing: border-box;
    letter-spacing: -0.025rem;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    line-height: 1.4;
    margin-top: 4rem;
    @media (max-width: ${(props) => props.theme.BREAKPOINT}px) {
      margin-top: 7rem;
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .eng {
    font-family: "Founders Grotesk Condensed";
    letter-spacing: 0;
    font-weight: 600;
  }
`;

export default GlobalStyle;
