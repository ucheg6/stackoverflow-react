import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import NotFound from './components/NotFound';
import SingleQuestion from './components/singleQuestion';



const Routes = () => (
  <div>
      <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route path="/not-found" component={NotFound} />
      <Route path="/question/:id" component={SingleQuestion} />

      <Redirect to="/" />
    </Switch>
    <Footer />
  </div>
);

export default Routes;