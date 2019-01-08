import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import CommentCards from
  '../../components/comment/CommentCards';
import store from '../../helpers/store';
global.fetch = require('jest-fetch-mock');

afterEach(cleanup);
describe('CommentCards component', () => {
   
  it('should render without crashing', () => {
    render(<CommentCards store={store} />
    );
  });
});
