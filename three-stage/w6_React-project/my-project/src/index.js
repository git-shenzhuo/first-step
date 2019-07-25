import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {HashRouter} from 'react-router-dom'

// 引入react-redux
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
    // Provider 等同于 MyContext.provider，必须在最外层
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    
    , 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
