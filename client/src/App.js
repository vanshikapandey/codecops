import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../src/components/Navbar";
import Landing from "../src/components/Landing";
import About from "../src/components/navcomponents/About";
import Contact from "../src/components/navcomponents/Contact";
import Footer from "../src/components/Footer";
import Blog from "../src/components/navcomponents/Blog";
<<<<<<< HEAD
import Register from "../src/components/auth/Register";
import Login from "../src/components/auth/Login";
import Events from "../src/components/navcomponents/Events";
//redux
import { Provider } from "react-redux";
import store from "./store";

=======
>>>>>>> e48e61dae8322c854677a08292640f058a24f5c5
import "./App.css";
import AOS from 'aos';

function App() {

 
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration : 2000
    });

  return (
    <div className='App'>
<<<<<<< HEAD
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar />
            <Route exact path='/' component={Landing} />
            <section>
              <Switch>
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/events' component={Events} />
              </Switch>
            </section>
            <Footer />
          </Fragment>
        </Router>
      </Provider>
=======
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section>
            <Switch>
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/blog' component={Blog} />
            </Switch>
          </section>
          <Footer />
        </Fragment>
      </Router>
>>>>>>> e48e61dae8322c854677a08292640f058a24f5c5
    </div>
  );
}

export default App;
