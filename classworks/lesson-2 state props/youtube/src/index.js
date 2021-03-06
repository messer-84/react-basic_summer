import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

YTSearch({ key: API_KEY, term: 'matrix' }, data => {
  console.log(data);
});
// videoId - https://www.youtube.com/embed/:videoId

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
