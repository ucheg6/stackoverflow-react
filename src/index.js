import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { createStore } from 'redux';

const store = createStore(reducer);

function reducer() {
    return 'state';
}
ReactDOM.render(<App />, document.getElementById('root'));
