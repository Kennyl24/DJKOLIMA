import React from 'react';
import ReactDOM from 'react-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// main app
import LeadBar from './components/LeadBar.jsx';
import DiscoBall from './components/DiscoBall.jsx';
import BottomNav from './components/BottomNav.jsx';
import TurnTable from './components/TurnTable.jsx';
import indigo from '@material-ui/core/colors/indigo';
import FrontImages from './components/FrontImages';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <MuiThemeProvider>
        <LeadBar/>
        <DiscoBall/>
        {/* <TurnTable/> */}
        <FrontImages/>
        <BottomNav/>
      </MuiThemeProvider>
    );
  };
}
ReactDOM.render(<App />, document.getElementById('app'));