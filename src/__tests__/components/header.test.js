import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from
  '../../components/header';
import store from '../../helpers/store';

afterEach(cleanup);

describe('Header  component', () => {
   
  it('should render without crashing', () => {
    render(<Provider store={store}>
        <Router>
            <Header />
        </Router>
    </Provider>
    );
  });
  it('should handle open modal', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
        <Provider store={store}>
        <Router>
            <Header />
        </Router>
    </Provider>
    );

    const open = getByTestId('open');
    open.onclick = handleClick;
    fireEvent.click(open);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('should handle click to close modal', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
        <Provider store={store}>
        <Router>
            <Header />
        </Router>
    </Provider>
    );

    const close = getByTestId('close');
    close.onclick = handleClick;
    fireEvent.click(close);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
