import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import TurnTable from './TurnTable.jsx';

class MusicPlayer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showMusicPlayer: true,
        showDjFun: true,
      }
      this.hideMusicPlayer = this.hideMusicPlayer.bind(this);
      this.showDjFun = this.showDjFun.bind(this);
  };
  showDjFun(){
    console.log('in dis');
    this.setState({
      showDjFun: !this.state.showDjFun
    });
  }
  hideMusicPlayer(){
    console.log('in this thang')
    this.setState({
      showMusicPlayer: !this.state.showMusicPlayer
    });
  }
  render(){
    const navButtons = (
      <div>
         <IconButton color="secondary" aria-label="previous song">
        <Icon>skip_previous</Icon>
      </IconButton>
        <IconButton color="secondary" aria-label="play song">
        <Icon>play_arrow</Icon>
      </IconButton>
      <IconButton color="secondary" aria-label="Add an alarm">
        <Icon>pause</Icon>
      </IconButton>
      <IconButton color="secondary" aria-label="next song">
        <Icon>skip_next</Icon>
      </IconButton>
      <IconButton color="secondary" aria-label="next song">
        <Icon>volume_off</Icon>
      </IconButton>
      </div>
    );
    const leftButtons = (
      <div>
        <IconButton onClick={this.hideMusicPlayer} color="secondary" aria-label="choose song">
        <Icon>keyboard_arrow_down</Icon>
      </IconButton>
      </div>
    );
    return (
      <MuiThemeProvider>
        {this.state.showDjFun ? 
      <AppBar
        title='Current Song'
        style={{height:'8%', backgroundColor:'#DCDCDC', position:'fixed', bottom: '0'}}
        titleStyle={{fontSize:'25px'}}
        iconElementLeft={leftButtons}
        iconElementRight={navButtons}
        >
    <div style={{position:'absolute',top: '20%',
    left: '50%'}}>
      <IconButton onClick={this.showDjFun} color="secondary" aria-label="choose song">
        <Icon>keyboard_arrow_up</Icon>
      </IconButton>
      Be the DJ!
      </div>
        </AppBar>
        : <TurnTable/>}
      </MuiThemeProvider>
    );
  }
}

export default MusicPlayer;