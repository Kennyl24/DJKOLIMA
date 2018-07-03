

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
      <h1 style={{textAlign:'center'}}>Getting in touch</h1>
      <h1 style={{textAlign:'center'}}>Call me @ <span>4084428474</span></h1>
      <h2 style={{textAlign:'center'}}>
      Please reach out if you have any questions or if you would like to schedule an appoitment
      </h2>
      <br />
      <div style={{argin:'auto', display:'flex'}}>
      {/* <div style={{margin:'auto'}}>
      <IconButton color="secondary" aria-label="Add an alarm">
        <img href="https://png.icons8.com/metro/1600/facebook.png" alt=""/>      
      </IconButton>
      <IconButton color="secondary" aria-label="Add an alarm">
        <Icon>pause</Icon>
      </IconButton>
      <IconButton color="secondary" aria-label="Add an alarm">
        <Icon>alarm</Icon>
      </IconButton>
      </div> */}
    <div style={{margin:'auto'}}>
    <a href="http://instagram.com" target="_blank"><img height="200px" width="200px"src="http://www.freelogovectors.net/wp-content/uploads/2016/12/Instagram_Icon.png"/></a>
    <br />
    <a href="http://facebook.com" target="_blank"><img height="200px" width="200px"src="http://pluspng.com/img-png/png-facebook-logo-for-email-marketing-you-can-trust-1000.png"/></a>
    </div>
      <ContactForm style={{margin:'auto'}}/>
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