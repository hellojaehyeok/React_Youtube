import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.jsx';
import Youtube from './service/youtube';

const youtube = new Youtube(process.env.REACT_APP_YOUYUBE_API);
ReactDOM.render(
  <>
    <App youtube={youtube} />
  </>,
  document.getElementById('root')
);
