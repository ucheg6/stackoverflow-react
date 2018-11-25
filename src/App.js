import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './helpers/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Routes from './routes';
// import updateUserState from './helpers/updateUserState';

import './styles/App.css';


// window.store = store;
// updateUserState(store);
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Routes />
                </Router>

            </Provider>
        );
    }
}

export default App;
