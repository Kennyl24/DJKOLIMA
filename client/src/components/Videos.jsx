import React from 'react';
import ReactDOM from 'react-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import LeadBar from './LeadBar.jsx';
import MusicPlayer from './MusicPlayer';
import VideoTabs from './VideoTabs';

const theme = createMuiTheme({
  palette: {
    primary: { main: 'rgb(63, 6, 245)' },
    secondary: { main: 'rgb(63, 6, 245)' }
  },
});

class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <LeadBar/>
        <div style={{position:'relative', top:'13px'}}>
        <VideoTabs/>
        </div>
        <MusicPlayer/>
      </MuiThemeProvider>
    );
  };
}

export default Videos;