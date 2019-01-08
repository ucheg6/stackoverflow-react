import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import Signin from
  '../../components/signin/Signin';
import store from '../../helpers/store';

afterEach(cleanup);

describe('Signin page  component', () => {
   
  it('should render without crashing', () => {
    render(<Router><Signin store={store}/></Router>
    );
  });
  it('should handle click to login a user', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <Router><Signin store={store}/></Router>
    );

    const login = getByTestId('login');
    login.onclick = handleClick;
    fireEvent.click(login);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('should handle change to login a user', () => {
    const handleChange = jest.fn();

    const { getByTestId } = render(
      <Router><Signin store={store}/></Router>
    );

    const changelogin = getByTestId('changelogin');
    changelogin.onchange = handleChange;
    fireEvent.change(changelogin, { target: { value: 'dummy' }});
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
