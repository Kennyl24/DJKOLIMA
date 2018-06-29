import React from 'react';
import ReactDOM from 'react-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// main app
import LeadBar from './LeadBar.jsx';
import DiscoBall from './DiscoBall.jsx';
import BottomNav from './BottomNav.jsx';
import TurnTable from './TurnTable.jsx';
import indigo from '@material-ui/core/colors/indigo';
import FrontImages from './FrontImages';
import MusicPlayer from './MusicPlayer';

const theme = createMuiTheme({
  palette: {
    primary: { main: 'rgb(63, 6, 245)' },
    secondary: { main: 'rgb(63, 6, 245)' }
  },
});

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <LeadBar/>
        <DiscoBall/>
        {/* <TurnTable/> */}
        <FrontImages/>
        <BottomNav/>
        <MusicPlayer/>
      </MuiThemeProvider>
    );
  };
}

export default HomePage;