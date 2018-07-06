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

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.select=this.select.bind(this);
  }
  select(index) {
    this.setState({selectedIndex: index})
  };

  render() {
    return (
      <MuiThemeProvider>
      <Paper id="Content" style={{backgroundColor:'#F5F5F5', marginTop:'2%'}} zDepth={1}>
      <br />
      <br />
      <h1 style={{textAlign:'center'}}>Services Provided</h1>
      <br />
      <h1 style={{textAlign:'center'}} className="blink_me">Weddins</h1>
      <h1 style={{textAlign:'center'}} className="blink_me">Quinces</h1>
      <h1 style={{textAlign:'center'}} className="blink_me">Other Events</h1>
      <h1 style={{textAlign:'center'}} className="blink_me">I take Photos</h1>
      <h1 style={{textAlign:'center'}} className="blink_me">I do Videos</h1>
      <h1 style={{textAlign:'center'}} className="blink_me">Weddins</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      </Paper>
      </MuiThemeProvider>
    );
  }
}

export default AboutMe;