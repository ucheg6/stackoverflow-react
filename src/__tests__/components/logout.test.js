import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import Logout from
  '../../components/logout';
import store from '../../helpers/store';

afterEach(cleanup);
describe('logout component', () => {
   
  it('should render without crashing', () => {
    render(<Router>
            <Logout store={store} />
        </Router>
    );
  });
});
