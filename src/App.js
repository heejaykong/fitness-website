import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './routes/Home';
import Stories from './routes/Stories';
// import Footer from './components/Footer';
import GlobalStyle from './globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
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
