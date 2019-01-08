import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Upvotes from
  '../../components/answerCards/Upvotes';
import store from '../../helpers/store';

afterEach(cleanup);

describe('Upvotes component', () => {
   
  it('should render without crashing', () => {
    render(<Upvotes store={store} />
    );
  });
  it('should handle click to Upvote an answer', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <Upvotes store={store} />
    );

    const upvote = getByTestId('upvote');
    upvote.onclick = handleClick;
    fireEvent.click(upvote);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
