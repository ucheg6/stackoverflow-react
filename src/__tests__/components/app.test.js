import React from 'react';
import { render } from 'react-testing-library';
import App from '../../App';
global.fetch = require('jest-fetch-mock');

 describe('App', () => {
  it('should render without crashing', () => {
    render(<App />);
  });
});