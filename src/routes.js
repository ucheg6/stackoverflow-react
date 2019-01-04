import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import NotFound from './components/NotFound';
import SingleQuestion from './components/singleQuestion/singleQuestion';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';
import Dashboard from './components/dashboard/Dashboard';

const Routes = () => (
  <div>
      <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route path="/not-found" component={NotFound} />
      <Route path="/signup" component={Signup} />
      <Route path="/question/:id" component={SingleQuestion} />
      <Route path="/signin" component={Signin} />
      <Route path="/dashboard" component={Dashboard} />
      <Redirect to="/" />
    </Switch>
    <Footer />
  </div>
);

export default Routes;