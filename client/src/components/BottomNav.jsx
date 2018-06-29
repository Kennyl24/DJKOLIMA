

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
      <Paper style={{backgroundColor:'white', marginTop:'-2%'}} zDepth={1}>
      <br />
      <br />
      <h1 style={{textAlign:'center'}}>Getting in touch</h1>
      <br />
      <br />
      <h2 style={{textAlign:'center'}}>
      Please reach out if you have any questions or if you would like to schedule an appoitment
      </h2>
      <br />
      <br />
      <br />
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
        <IconButton color="secondary" aria-label="Add an alarm">
    <SocialIcon style={{ height: 200, width: 200 }} url="http://twitter.com/" />
    </IconButton>
    <br />
    <IconButton color="secondary" aria-label="Add an alarm">
    <SocialIcon style={{ height: 200, width: 200 }} url="http://facebook.com/" />
    </IconButton>
    <br />
    <IconButton color="secondary" aria-label="Add an alarm">
    <SocialIcon style={{ height: 200, width: 200 }}url="http://instagram.com/" />
    </IconButton>
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