import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css';
import App from './model/App';
import registerServiceWorker from './helpers/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
document.title = "rdejesu slideshow";
registerServiceWorker();