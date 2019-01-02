import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './helpers/store';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import 'font-awesome/css/font-awesome.min.css';
import './styles/App.css';

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
