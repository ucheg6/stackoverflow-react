import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from
  '../../components/home/Home';
import store from '../../helpers/store';
global.fetch = require('jest-fetch-mock');

afterEach(cleanup);
const questions = {
    id: 2,
    slug: 'atitle-7458687',
    bookmarkFlag: true
  };  
describe('Home page  component', () => {
   
  it('should render without crashing', () => {
    render(<Provider store={store}>
        <Router>
            <Home questions={questions} />
        </Router>
    </Provider>
    );
  });
});
