

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

class BottomNav extends React.Component {
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
      <Paper id="Content" style={{backgroundColor:'#F5F5F5', marginTop:'-2%'}} zDepth={1}>
      <br />
      <br />
      <h1 style={{textAlign:'center'}}>Contact Me</h1>
      <br />
      <div style={{argin:'auto', display:'flex'}}>
    <ContactForm style={{marginLeft:'20%'}}/>
    <div style={{margin:'auto'}}>
    <span style={{fontSize:'40px', textAlign:'center'}}>CONNECT</span>
    <br/>
    <span style={{fontSize:'40px'}}>4084428474</span>
    <br/>
    <a href="http://instagram.com" target="_blank"><img height="100px" width="100px"src="http://www.freelogovectors.net/wp-content/uploads/2016/12/Instagram_Icon.png"/></a>
    {/* <br /> */}
    <a href="http://facebook.com" target="_blank"><img height="100px" width="120px"src="http://pluspng.com/img-png/png-facebook-logo-for-email-marketing-you-can-trust-1000.png"/></a>
    </div>
      </div>
      <br />
        <footer style={{textAlign:'center'}}>
          Designed by Kenneth Laprelle
      </footer>
      <br />
      <br />
      <br />
      <br />
      </Paper>
      </MuiThemeProvider>
    );
  }
}

export default BottomNav;