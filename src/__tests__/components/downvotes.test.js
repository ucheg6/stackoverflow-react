import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Downvotes from
  '../../components/answerCards/Downvotes';
import store from '../../helpers/store';

afterEach(cleanup);

describe('Downvotes component', () => {
   
  it('should render without crashing', () => {
    render(<Downvotes store={store} />
    );
  });
  it('should handle click to Downvote an answer', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <Downvotes store={store} />
    );

    const downvote = getByTestId('downvote');
    downvote.onclick = handleClick;
    fireEvent.click(downvote);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
