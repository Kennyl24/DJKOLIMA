
import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow'
import AvPause from 'material-ui/svg-icons/av/pause'
import VolumeSlide from './VolumeSlide.jsx';


class TurnTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <MuiThemeProvider>
      <div 
      style={{width:'80%', 
      height:'70%',
      display: 'flex',
      alignItems: 'flexStart',
      flexWrap: 'wrap',
      }}>
      <div style={{width:'100%', height:'80%'}}>
      <Paper style={{marginTop:'8%', marginLeft:'auto', marginRight:'auto', height: '80%', width:'80%'}} zDepth={5} circle={true}> 
      <Paper style={{position:'relative', top:'80px', marginLeft:'auto', marginRight:'auto', height: '40%', width:'40%'}} zDepth={2} circle={true}>
      <h1 style={{position:'relative', fontSize:'20px', textAlign:'center', top:'40px'}}>DJ COLIMA</h1>
      </Paper>
      </Paper>
      </div>
      <div style={{width:'70%'}}>
      <div style={{position:'relative', bottom:'0px'}}>
      <PlayArrow/>
      <AvPause/>
      </div>
      </div>
      <div style={{width:'30%', textAlign:'center'}}>
      VOLUME
      <VolumeSlide/>
      </div>
      </div>   
      </MuiThemeProvider>
    );
  }
}

export default TurnTable;