import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore } from 'redux' 
import { Provider } from 'react-redux';

import reducer from './reducers';

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import movieReducer from './reducers';


// function reducer() {
//   return {
//     title: movieReducer.state.title,
//     director: movieReducer.state.director,
//     genre: movieReducer.state.genre,
//     metascore: movieReducer.state.metascore,
//     description: movieReducer.state.description
//   }
// }


const store = createStore(reducer);


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);