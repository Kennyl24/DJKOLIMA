

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
      {/* <div className="sun">
    <div className="ray_box">
        <div className="ray ray1"></div>
    </div>
</div> */}
      <br />
      <br />
      <h1 style={{textAlign:'center', marginTop:'.5%', marginBottom:'1.5%'}}>Contact Me</h1>
    <div style={{marginLeft:'39%', marginBottom:'2%'}}>
    <a href="http://instagram.com" target="_blank"><img height="70px" width="70px"src="http://www.freelogovectors.net/wp-content/uploads/2016/12/Instagram_Icon.png"/></a>
    <a style={{paddingLeft:'5%'}} href="http://instagram.com" target="_blank"><img height="70px" width="70px"src="https://png.icons8.com/metro/1600/phone.png"/></a>
    <a style={{paddingLeft:'5%'}} href="http://facebook.com" target="_blank"><img height="70px" width="80px"src="http://pluspng.com/img-png/png-facebook-logo-for-email-marketing-you-can-trust-1000.png"/></a>
    </div>
    <ContactForm style={{marginLeft:'40%'}}/>
      <br />
        <footer style={{textAlign:'center', marginTop:'1%'}}>
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