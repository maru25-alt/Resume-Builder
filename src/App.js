import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from './navigation/index'
import Footer from './navigation/footer'

import Home from './views/Home'
import About from './views/Aboutus'
import Resume from './views/Resume'
import CreateResume from './views/Forms';

function App() {
  return (
      <Router>
         <div>
          <Navigation />
          <Switch>
              <Route  path="/aboutus">
                <About />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/createResume/:id">
                <CreateResume  />
              </Route>
          </Switch>

          <Footer />
        </div>
    </Router>
   
  );
}

export default App;
