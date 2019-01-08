import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import AnswerBox from
  '../../components/answerCards/AnswerBox';
import store from '../../helpers/store';

afterEach(cleanup);

describe('AnswerBox component', () => {
   
  it('should render without crashing', () => {
    render(<AnswerBox store={store} />
    );
  });
  it('should handle click to post an answer', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <AnswerBox store={store} />
    );

    const postAnswer = getByTestId('postAnswer');
    postAnswer.onclick = handleClick;
    fireEvent.click(postAnswer);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('should handle change to post a answer', () => {
    const handleChange = jest.fn();

    const { getByTestId } = render(
      <AnswerBox store={store} />
    );

    const changeAnswer = getByTestId('changeAnswer');
    changeAnswer.onchange = handleChange;
    fireEvent.change(changeAnswer, { target: { value: 'dummy' }});
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
