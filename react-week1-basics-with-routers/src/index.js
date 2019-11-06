import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//IMPORT ROUTER
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//IMPORTING BASE COMPONENTS
import BaseLayout from './components/BaseLayout';
//IMPORTING NAVLINK COMPONENTS
import Home from './components/NavLinks/Home';
import BookStore from './components/NavLinks/BookStore';
import BookPage from './components/NavLinks/BookPage';
import TimeTracking from './components/NavLinks/TimeTracking';
import PageNotFound from './components/NavLinks/PageNotFound';

//BaseLayout has been designated, BY ME, to hold to history/children information
//from the Router. The DOM structure IS VERY IMPORTANT. BrowserRouter must contain
//the component which will be holding the this.props.information (history and children)
//and that component MUST HOLD the Switch. The Switch allows this.props.children
//to dynamically change based on which PATH (action/ROUTE) you use and which
//COMPONENT is associated with that PATH.


//NOTE: ONE ROUTE MUST HAVE THE KEY WORD EXACT!!!!!! THIS IS NOT OPTION!!!!!!
//This is the component which will load by default. Without this, the Route will
//fail and crash your app. I pute the key world EXACT on my Home/Index page.

//NOTE: The Route passes the components as THIS.PROPS.CHILDREN. This is VERY
//important to keep in mind. Now, my BaseLayout has a prop called CHILDREN.

//The last Route has no path and is a catch for any and all attempts to go to
//undefined URLs.

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/bookStore' exact component={BookStore} />
        <Route path='/bookStore/:id' exact component={BookPage} />
        <Route path='/timeTracking' exact component={TimeTracking} />
        <Route component={PageNotFound} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
