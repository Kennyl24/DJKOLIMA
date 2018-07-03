import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { HashLink } from "react-router-hash-link";

class LeadBar extends React.Component {
    constructor(props) {
      super(props);
  };
  render(){
    const navButtons = (
      <div>
        <Link to={{ pathname:'/' }}><FlatButton label="Home" style={{color:'white'}}></FlatButton></Link>
        <Link to={{ pathname:'/gallery' }}><FlatButton label="Gallery" style={{color:'white'}} /></Link>
        <Link to={{ pathname:'/videos' }}><FlatButton label="Videos" style={{color:'white'}}/></Link>
        <HashLink to="/#Content"><FlatButton label="Bookings" style={{color:'white'}}/></HashLink>
      </div>
    );
    const leftButtons = (
      <div>
        
      </div>
    );
    return (
      <MuiThemeProvider>
      <AppBar
        title='DJ KOLIMA'
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