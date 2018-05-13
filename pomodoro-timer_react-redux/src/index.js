import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
import { store } from './redux/store';
import App from './components/presentational/App';
import registerServiceWorker from './registerServiceWorker';


window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);


registerServiceWorker();
