import React, { Component } from "react";

import './styles/App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Header from './components/header';
import RecentQuestions from './components/recentQuestions';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <RecentQuestions />
                <Footer />
            </div>
        );
    }
}

export default App;
