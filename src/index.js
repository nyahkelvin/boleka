import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './store/store'

let app = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
    <Router>
        <App/>
    </Router>
</Provider>, app);
registerServiceWorker();
