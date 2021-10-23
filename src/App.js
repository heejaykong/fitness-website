import React, { useState, useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import { ThemeProvider } from "styled-components/macro";
import GlobalStyle from "./css/globalStyle";
import theme from "./css/theme";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowSizeChange);
    setIsMobile(width <= theme.BREAKPOINT);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [width]);

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
          </Switch>
        </HashRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
