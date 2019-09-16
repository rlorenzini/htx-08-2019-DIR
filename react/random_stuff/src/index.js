import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import BaseLayout from './components/BaseLayout';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Route path='/' exact component = {App}/>
    </BaseLayout>
  </BrowserRouter>
  ,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
