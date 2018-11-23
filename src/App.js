import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './helpers/store';

import './styles/App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Header from './components/header';
import RecentQuestions from './components/recentQuestions';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Navbar />
                    <Header />
                    <RecentQuestions />
                    <Footer />
                </div>
            </Provider>
        );
    }
}

export default App;
