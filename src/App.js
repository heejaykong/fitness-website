import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Navigator from './components/Navigator';
import Footer from './components/Footer';
import Home from './routes/Home';
import About from './routes/About';
import Stories from './routes/Stories';
import Contact from './routes/Contact';

function App() {
  return (
    <HashRouter>
      <Navigator />
      <Switch>
        <Route path="/" exact={true} component={ Home }/>
        <Route path="/about" component={ About }/>
        <Route path="/stories" component={ Stories }/>
        <Route path="/contact" component={ Contact }/>
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
