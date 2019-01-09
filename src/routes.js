import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import SingleQuestion from './components/singleQuestion/singleQuestion';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';
import Dashboard from './components/dashboard/Dashboard';
import Comments from './components/comment/Comments';
import logout from './components/logout';

const Routes = () => (
  <div>
      <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/question/:id" component={SingleQuestion} />
      <Route path="/signin" component={Signin} />
      <Route path="/logout" component={logout} />
      <Route path="/dashboard" component={Dashboard} />
      <Route exact path="/comments/:id" component={Comments} />
      <Redirect to="/" />
    </Switch>
    <Footer />
  </div>
);

export default Routes;