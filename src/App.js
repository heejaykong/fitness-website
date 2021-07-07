import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import Stories from "./routes/Stories";
// import Footer from './components/Footer';
import GlobalStyle from "./globalStyle";
const BREAKPOINT = 935;

function App() {
  const [width, setWidth] = useState(document.body.clientWidth);
  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(document.body.clientWidth);
    document.title = `${width}`;
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  });
  const isMobile = width <= BREAKPOINT;

  return (
    <>
      <GlobalStyle />
      <Navigation isMobile={isMobile}/>
      <HashRouter>
        <Switch>
          <Route
            path="/"
            exact={true}
            component={ () => <Home isMobile={isMobile}/> }
          />
          <Route
            path="/stories"
            component={ () => <Stories isMobile={isMobile}/> }
          />
        </Switch>
      </HashRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
