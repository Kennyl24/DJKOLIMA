import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

class MusicPlayer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showMusicPlayer: true
      }
      this.hideMusicPlayer = this.hideMusicPlayer.bind(this);
  };
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
        {this.state.showMusicPlayer ? 
      <AppBar
        title='Current Song'
        style={{height:'8%', backgroundColor:'#DCDCDC', position:'fixed', bottom: '0'}}
        titleStyle={{fontSize:'25px'}}
        iconElementLeft={leftButtons}
        iconElementRight={navButtons}
        >
      <IconButton color="secondary" aria-label="choose song">
        <Icon>keyboard_arrow_up</Icon>
      </IconButton>
        </AppBar>
        : leftButtons}
      </MuiThemeProvider>
    );
  }
}

export default MusicPlayer;