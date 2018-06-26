
import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow'
import AvPause from 'material-ui/svg-icons/av/pause'
import VolumeSlide from './VolumeSlide.jsx';


class TurnTableNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        height:'100%',
        flexDirection: 'column'}}>
      <div style={{lineHeight:'25%', border: '3px solid #73AD21'}}>
      1
        </div>
        <div style={{lineHeight:'25%', border: '3px solid #73AD21'}}>
        2
        </div>
        <div style={{lineHeight:'25%', border: '3px solid #73AD21'}}>
        3
        </div>
        <div style={{lineHeight:'25%', border: '3px solid #73AD21'}}>
        4
        </div>
      </div>
    );
  }
}

export default TurnTableNav;