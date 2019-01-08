import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import AcceptAnswer from
  '../../components/answerCards/AcceptAnswer';
import store from '../../helpers/store';

afterEach(cleanup);

describe('AcceptAnswer component', () => {
   
  it('should render without crashing', () => {
    render(<AcceptAnswer store={store} />
    );
  });
  it('should handle click to accept answer', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <AcceptAnswer store={store} />
    );

    const accept = getByTestId('accept');
    accept.onclick = handleClick;
    fireEvent.click(accept);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
