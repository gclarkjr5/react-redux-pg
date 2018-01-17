import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import initialState from './store/initialState.json';
import store from './store/index';

let storeInstance = store(initialState);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
