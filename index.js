import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers';

const store = createStore(reducer, window.INITIAL_STATE, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
   document.getElementById('app')
);
