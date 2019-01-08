import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from
  '../../components/dashboard/Dashboard';
import store from '../../helpers/store';
global.fetch = require('jest-fetch-mock');

afterEach(cleanup);

describe('Dashboard  component', () => {
   
  it('should render without crashing', () => {
    render(<Provider store={store}>
        <Router>
            <Dashboard/>
        </Router>
    </Provider>
    );
  });
  it('should handle open modal', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
        <Provider store={store}>
        <Router>
            <Dashboard />
        </Router>
    </Provider>
    );

    const openDashboard = getByTestId('openDashboard');
    openDashboard.onclick = handleClick;
    fireEvent.click(openDashboard);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('should handle click to close modal', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
        <Provider store={store}>
        <Router>
            <Dashboard />
        </Router>
    </Provider>
    );

    const close = getByTestId('close');
    close.onclick = handleClick;
    fireEvent.click(close);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
