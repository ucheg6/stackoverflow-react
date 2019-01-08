import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from
  '../../components/navbar';
import store from '../../helpers/store';

afterEach(cleanup);
describe('navbar component', () => {
   
  it('should render without crashing', () => {
    localStorage.setItem('userToken', 'bhedhbhhdfgh');
    localStorage.getItem('userToken', 'bhedhbhhdfgh');
    expect(localStorage.getItem('userToken')).toBe('bhedhbhhdfgh');
    render(<Router>
            <Navbar store={store} />
        </Router>
    );
  });
});
