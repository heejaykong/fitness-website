import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import Stories from "./routes/Stories";
// import Footer from './components/Footer';
import { ThemeProvider } from "styled-components/macro";
import GlobalStyle from "./css/globalStyle";
import theme from "./css/theme";

function App() {
  const [width, setWidth] = useState(document.body.clientWidth);
  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(document.body.clientWidth);
    document.title = `${width}`;
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  });

  const isMobile = width <= theme.BREAKPOINT;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation />
        <HashRouter>
          <Switch>
            <Route
              path="/"
              exact={true}
              component={() => <Home isMobile={isMobile} />}
            />
            <Route
              path="/stories"
              component={() => <Stories isMobile={isMobile} />}
            />
          </Switch>
        </HashRouter>
        {/* <Footer /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
