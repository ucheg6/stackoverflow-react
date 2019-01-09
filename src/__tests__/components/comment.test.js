import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { Provider } from 'react-redux';
import Comments from
  '../../components/comment/Comments';
import store from '../../helpers/store';
global.fetch = require('jest-fetch-mock');

afterEach(cleanup);

describe('Comments component', () => {
    const match = {
        params: {
          id: '67'
        }
    }
  it('should render without crashing', () => {
    render(<Provider store={store}>
    <Comments match={match}/>
    </Provider>
    );
  });
  it('should handle click to post a Comment', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
        <Provider store={store}>
        <Comments match={match}/>
        </Provider>
    );

    const postComment = getByTestId('postComment');
    postComment.onclick = handleClick;
    fireEvent.click(postComment);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('should handle change to post a Comment', () => {
    const handleChange = jest.fn();

    const { getByTestId } = render(
        <Provider store={store}>
        <Comments match={match}/>
        </Provider>
    );

    const changeComment = getByTestId('changeComment');
    changeComment.onchange = handleChange;
    fireEvent.change(changeComment, { target: { value: 'dummy' }});
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
