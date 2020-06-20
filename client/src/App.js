import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../src/components/Navbar";
import Landing from "../src/components/Landing";
import About from "../src/components/navcomponents/About";
import Footer from "../src/components/Footer";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section>
            <Switch>
              <Route exact path='/about' component={About} />
            </Switch>
          </section>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
