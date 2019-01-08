import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import MostPopular from
  '../../components/mostPopularQuestion/MostPopular';
import store from '../../helpers/store';
global.fetch = require('jest-fetch-mock');

afterEach(cleanup);
const questions = {
    id: 2,
    slug: 'atitle-7458687',
    bookmarkFlag: true
  };  
describe('MostPopular questions component', () => {
   
  it('should render without crashing', () => {
    render(<Router>
            <MostPopular questions={questions} store={store} />
        </Router>
    );
  });
});
