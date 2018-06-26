import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class LeadBar extends React.Component {
    constructor(props) {
      super(props);
  };
  render(){
    const navButtons = (
      <div>
        <FlatButton label="Home" style={{color:'white'}}/>
        <FlatButton label="Weddings" style={{color:'white'}} />
        <FlatButton label="Quince's" style={{color:'white'}}/>
        <FlatButton label="Bookings" style={{color:'white'}}/>
      </div>
    );
    const leftButtons = (
      <div>
        
      </div>
    );
    return (
      <MuiThemeProvider>
      <AppBar
        title='DJ COLIMA'
        style={{backgroundColor:'#3f06f5', position:'fixed', top: '0'}}
        titleStyle={{fontSize:'40px'}}
        iconElementLeft={leftButtons}
        iconElementRight={navButtons}
        >
        </AppBar>
        </MuiThemeProvider>
    );
  }
}
export default LeadBar;