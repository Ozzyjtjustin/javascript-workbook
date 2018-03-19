import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TicTacToeContainer from './Components/ContainerComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TicTacToeContainer />, document.getElementById('root'));
registerServiceWorker();
