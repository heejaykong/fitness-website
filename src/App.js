import React from 'react';
// import '../src/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Navigator from './components/Navigator';
import Footer from './components/Footer';
import Home from './routes/Home';
import Stories from './routes/Stories';

function App() {
  return (
    <>
      <Navigator />
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
