import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Notepad from 'modules/Notepad';
import store from 'redux/store';
import './global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Notepad />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);