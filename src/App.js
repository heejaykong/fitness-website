import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import DesktopNavigation from './components/DesktopNavigation';
import MobileNavigation from "./components/MobileNavigation";
import Home from './routes/Home';
import Stories from './routes/Stories';
// import Footer from './components/Footer';
import GlobalStyle from './globalStyle';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 1000;
  window.addEventListener('resize', () => setWidth(window.innerWidth));
  return (
    <>
      <GlobalStyle />
      { isMobile ? <MobileNavigation /> : <DesktopNavigation />}
      <HashRouter>
        <Switch>
          <Route path="/" exact={true} component={ Home }/>
          <Route path="/stories" component={ Stories }/>
        </Switch>
      </HashRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
