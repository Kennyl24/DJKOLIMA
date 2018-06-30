
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './components/Gallery.jsx'
import HomePage from './components/HomePage.jsx'
import TurnTable from './components/TurnTable.jsx';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/gallery" component={Gallery}/>
      <Route exact path="/disc" component={TurnTable}/>
    </Switch>
  </Router>,
  document.getElementById('app'),
);