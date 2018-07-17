import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContactForm  from './ContactForm.jsx';
import Icon from '@material-ui/core/Icon';

import IconButton from '@material-ui/core/IconButton';
import { SocialIcon } from 'react-social-icons';
const style = {
  height: 450,
  width: 300,
  margin: 0,
  textAlign: 'center',
  display: 'inline-block',
  background: '#9e5406',
  backgroundSize: '100%',
  position:'relative',
  textAlign:'center',
};


class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveringVideo: false,
      hoveringPhoto: false,
      hoveringDJ: false,
      hoveringLights: false,
    }
    this.select=this.select.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }
  select(index) {
    this.setState({selectedIndex: index})
  };
  mouseOver(e){
    e.preventDefault();
    console.log(e.target.alt)
    if(e.target.alt === 'DJ'){
      this.setState({hoveringDJ: !this.state.hoveringDJ})
    }
    if(e.target.alt === 'Lights'){
      this.setState({hoveringLights: !this.state.hoveringLights})
    }
    if(e.target.alt === 'Video'){
      this.setState({hoveringVideo: !this.state.hoveringVideo})
    }
    if(e.target.alt === 'Photo'){
      this.setState({hoveringPhoto: !this.state.hoveringPhoto})
    }
  }
  mouseLeave(e){
    e.preventDefault();
    console.log(e.target.alt);
    if(e.target.alt === 'DJ'){
      this.setState({hoveringDJ: !this.state.hoveringDJ})
    }
    if(e.target.alt === 'Lights'){
      this.setState({hoveringLights: !this.state.hoveringLights})
    }
    if(e.target.alt === 'Video'){
      this.setState({hoveringVideo: !this.state.hoveringVideo})
    }
    if(e.target.alt === 'Photo'){
      this.setState({hoveringPhoto: !this.state.hoveringPhoto})
    }
  }
  render() {
    return (
      <MuiThemeProvider >
        <div id="About">
        <h1 className="about">SERVICES PROVIDED</h1>
        </div>
    <div style={{  marginLeft:'10%' }}>
    <Paper style={style} zDepth={4} rounded={false}onMouseLeave={this.mouseLeave} onMouseEnter={this.mouseOver}>
    <img src ="https://us.123rf.com/450wm/iko/iko1305/iko130500195/19844934-dj-playing-disco-electro-music-in-a-concert.jpg?ver=6" alt="DJ" height="100%" width="100%"/>
    <h1 className="about-image-header">DJ & MC Services</h1>
    {this.state.hoveringDJ ? <p className="about-image-p">DJ KOLIMA provides music services & more.</p> : null}
    </Paper>
    <Paper style={style} zDepth={4} rounded={false}onMouseLeave={this.mouseLeave} onMouseEnter={this.mouseOver}>
    <img src ="https://us.123rf.com/450wm/iko/iko1305/iko130500195/19844934-dj-playing-disco-electro-music-in-a-concert.jpg?ver=6" alt="Lights" height="100%" width="100%"/>
    <h1 className="about-image-header">LIGHTS</h1>
    {this.state.hoveringLights ? <p className="about-image-p">DJ KOLIMA provides music services & more.</p> : null}
    </Paper>
    <Paper style={style} zDepth={4} rounded={false}onMouseLeave={this.mouseLeave} onMouseEnter={this.mouseOver}>
    <img src ="https://us.123rf.com/450wm/iko/iko1305/iko130500195/19844934-dj-playing-disco-electro-music-in-a-concert.jpg?ver=6" alt="Photo" height="100%" width="100%"/>
    <h1 className="about-image-header">PHOTOGRAPHY</h1>
    {this.state.hoveringPhoto ? <p className="about-image-p">DJ KOLIMA provides music services & more.</p> : null}
    </Paper>
    <Paper style={style} zDepth={4} rounded={false} onMouseLeave={this.mouseLeave} onMouseEnter={this.mouseOver}>
    <img value="test" src ="https://us.123rf.com/450wm/iko/iko1305/iko130500195/19844934-dj-playing-disco-electro-music-in-a-concert.jpg?ver=6" alt="Video" height="100%" width="100%"/>
    <h1 className="about-image-header">VIDEOGRAPHY</h1>
    {this.state.hoveringVideo ? <p className="about-image-p">DJ KOLIMA provides music services & more.</p> : null}
    </Paper>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default AboutMe;