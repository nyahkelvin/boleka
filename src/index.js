import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'

let app = document.getElementById('root')
ReactDOM.render(
<Router>
    <App />
</Router>, app);
registerServiceWorker();
