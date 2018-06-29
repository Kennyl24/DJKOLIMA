
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './components/Gallery.jsx'
import HomePage from './components/HomePage.jsx'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/gallery" component={Gallery}/>
    </Switch>
  </Router>,
  document.getElementById('app'),
);