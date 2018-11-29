import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './helpers/store';
import { BrowserRouter as Router } from 'react-router-dom';
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
