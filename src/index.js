import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from "./app-router.js";


ReactDOM.render( <AppRouter/>, document.getElementById('root'));
registerServiceWorker();
