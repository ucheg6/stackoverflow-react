import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import Signup from
  '../../components/signup/Signup';
import store from '../../helpers/store';

afterEach(cleanup);

describe('Signup page  component', () => {
   
  it('should render without crashing', () => {
    render(<Router><Signup store={store}/></Router>
    );
  });
  it('should handle click to signup a user', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <Router><Signup store={store}/></Router>
    );

    const signup = getByTestId('signup');
    signup.onclick = handleClick;
    fireEvent.click(signup);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('should handle change to signup a user', () => {
    const handleChange = jest.fn();

    const { getByTestId } = render(
      <Router><Signup store={store}/></Router>
    );

    const changesignup = getByTestId('changesignup');
    changesignup.onchange = handleChange;
    fireEvent.change(changesignup, { target: { value: 'dummy' }});
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
