import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './../node_modules/font-awesome/css/font-awesome.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

