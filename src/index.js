import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {StopWatch} from './stopWatch';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StopWatch />, document.getElementById('root'));
registerServiceWorker();
