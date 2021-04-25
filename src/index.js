import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';   
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import middleware from './middleware';
import reducers from './reducers';
import { createStore } from 'redux';


const store = createStore (reducers, middleware);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

