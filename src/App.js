import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Navigator from './components/Navigator';
import Footer from './components/Footer';
import Home from './routes/Home';

function App() {
  return (
    <HashRouter>
      <Navigator />
      <Switch>
        <Route path="/" exact={true} component={ Home }/>
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
