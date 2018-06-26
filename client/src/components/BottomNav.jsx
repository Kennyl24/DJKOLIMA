

import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContactForm  from './ContactForm.jsx';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';


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
      <ContactForm />
      <IconButton color="secondary" aria-label="Add an alarm">
        <Icon>alarm</Icon>
      </IconButton>
      <br />
      <br />
        <footer style={{textAlign:'center'}}>
          Designed by Kenneth Laprelle
          </footer>
      </Paper>
      </MuiThemeProvider>
    );
  }
}

export default BottomNav;