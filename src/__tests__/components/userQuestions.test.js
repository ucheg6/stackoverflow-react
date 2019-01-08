import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import UserQuestions from
    '../../components/dashboard/UserQuestions';
import store from '../../helpers/store';
global.fetch = require('jest-fetch-mock');

afterEach(cleanup);

describe('UserQuestions  component', () => {

    it('should render without crashing', () => {
        render(<Provider store={store}>
            <Router>
                <UserQuestions />
            </Router>
        </Provider>
        );
    });
    //   it('should handle delete question', () => {
    //     const handleClick = jest.fn();

    //     const { getByTestId } = render(
    //         <Provider store={store}>
    //         <Router>
    //             <UserQuestions />
    //         </Router>
    //     </Provider>
    //     );

    //     const del = getByTestId('del');
    //     del.onclick = handleClick;
    //     fireEvent.click(del);
    //     expect(handleClick).toHaveBeenCalledTimes(1);
    //   });
});
