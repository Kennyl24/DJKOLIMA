
import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from '@material-ui/core/Paper';
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
      <Paper style={{height:'100px', width:'100px', marginRight:'40px'}}>
      <img src="https://zurb.com/playground/uploads/upload/upload/195/image-04.jpg" height="90px" width="90px"/>
          <p>Videos</p>
      </Paper>
      <Paper style={{height:'100px', width:'100px', marginRight:'40px'}}>
      <img src="https://zurb.com/playground/uploads/upload/upload/195/image-04.jpg" height="90px" width="90px"/>
          <p>Videos</p>
      </Paper>
      <Paper style={{height:'100px', width:'100px', marginRight:'40px'}}>
      <img src="https://zurb.com/playground/uploads/upload/upload/195/image-04.jpg" height="90px" width="90px"/>
          <p>Videos</p>
      </Paper>
      <Paper style={{height:'100px', width:'100px'}}>
      <img src="https://zurb.com/playground/uploads/upload/upload/195/image-04.jpg" height="90px" width="90px"/>
          <p>Videos</p>
      </Paper>
      </div>
    );
  }
}

export default TurnTableNav;