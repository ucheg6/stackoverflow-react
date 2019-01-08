import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import Modal from
  '../../components/Modal';
import store from '../../helpers/store';

afterEach(cleanup);

describe('Modal page  component', () => {
   
  it('should render without crashing', () => {
    render(<Router><Modal store={store}/></Router>
    );
  });
  it('should handle click to close modal', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <Modal close={jest.fn()} store={store} />
    );

    const close = getByTestId('close');
    close.onclick = handleClick;
    fireEvent.click(close);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('should handle click to post a question', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <Modal store={store} />
    );

    const post = getByTestId('post');
    post.onclick = handleClick;
    fireEvent.click(post);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('should handle change to post a question', () => {
    const handleChange = jest.fn();

    const { getByTestId } = render(
      <Modal store={store} />
    );

    const change = getByTestId('change');
    change.onchange = handleChange;
    fireEvent.change(change, { target: { value: 'dummy' }});
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
