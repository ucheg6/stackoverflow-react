import React from 'react';
import { render, cleanup } from 'react-testing-library';
import AnswerCards from
  '../../components/answerCards/AnswerCards';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../helpers/store';

afterEach(cleanup);
describe('AnswerCards component', () => {
    const answers = [ {
        answerid: 2,
        answer: 'a title'
    }
    ];
  it('should render without crashing', () => {
    render(<Provider store={store}><Router>
            <AnswerCards answers={answers} />
            </Router>
            </Provider>
    );
  });
});
