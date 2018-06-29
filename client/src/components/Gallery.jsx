import React from 'react';
import ReactDOM from 'react-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import LeadBar from './LeadBar.jsx';
import MusicPlayer from './MusicPlayer';
import GalleryTabs from './GalleryTabs';

const theme = createMuiTheme({
  palette: {
    primary: { main: 'rgb(63, 6, 245)' },
    secondary: { main: 'rgb(63, 6, 245)' }
  },
});

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <GalleryTabs/>
        <MusicPlayer/>
      </MuiThemeProvider>
    );
  };
}

export default Gallery;