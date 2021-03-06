

import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from '@material-ui/core/BottomNavigation';
import Paper from '@material-ui/core/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow'
import AvPause from 'material-ui/svg-icons/av/pause'
import VolumeSlide from './VolumeSlide.jsx';
import DiscPlayer from './DiscPlayer.jsx';
import TurnTableNav from './TurnTableNav.jsx';
import TurnTableSongs from './TurnTableSongs.jsx';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import DiscoBall from './DiscoBall.jsx';
import SongPicker from './SongPicker.jsx';
import Speakers from './Speakers.jsx';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#11cb5f' }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
});
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

class TurnTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className="disco">
      <IconButton style={{position:'absolute', top:'10px', right:'30px'}}color="secondary" aria-label="choose song">
        <Icon>clear</Icon>
      </IconButton>
      <DiscoBall/>
      <Speakers/>
      <Paper 
      style={{
        position:'relative',
        top: '365px',
      marginLeft: 'auto',
      marginRight: 'auto',
      height:'400px', width:'400px',
      display: 'flex',
      alignItems: 'flexStart',
      flexWrap: 'wrap',
      }}zDepth={1}>
      <DiscPlayer/>
      <div style={{width:'20%', height:'80%'}}>
      <TurnTableNav/>
      </div>
      <div style={{width:'100%', height:'20%'}}>
      </div>
      </Paper>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default TurnTable;