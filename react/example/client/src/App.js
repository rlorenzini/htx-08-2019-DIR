import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//=============COMPONENT IMPORTS=======================
import BaseLayout from './components/BaseLayout';

import Counter from './components/Counter';
import Clock from './components/Clock';

//Switch loads components, BaseLayout displays components as props.children

//BrowserRouter passes components to BaseLayout as props.children

//Switch says "switch the display between these Routes"

//Route = components; the active route is the one being displayed

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <BaseLayout>
          <Switch>

          <Route path='/' exact component={Counter} />
          <Route path='/clock' component={Clock} />

          </Switch>
        </BaseLayout>

      </BrowserRouter>
    );
  }
}

export default App;


//counter
//clock
//navlinks
//
