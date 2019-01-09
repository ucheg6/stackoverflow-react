import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import SingleQuestion from
  '../../components/singleQuestion/singleQuestion';
import store from '../../helpers/store';
global.fetch = require('jest-fetch-mock');

afterEach(cleanup);

describe('MostPopular questions component', () => {
    const match = {
        params: {
          id: '12'
        }
    }
  it('should render without crashing', () => {
    render(<Provider store={store}><Router>
            <SingleQuestion store={store} match={match}/>
        </Router></Provider>
    );
  });
});
