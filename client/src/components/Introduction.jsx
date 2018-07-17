import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import AboutMe from './AboutMe.jsx';
import Button from '@material-ui/core/Button';
import { HashLink } from "react-router-hash-link";

class Introduction extends React.Component {
    constructor(props) {
      super(props);
  };
  render(){
    return (
      <div>
        <div>
          <div style={{opacity:'1', fontSize:'50px', fontWeight:'bold', color: 'white', position:'absolute', left:'30%', top:'150px'}}>
          <h1 style={{letterSpacing: '8px'}}>DJ KOLIMA </h1>
          <h1 style={{fontSize:'35px', textAlign:'center'}}>For any of your event DJ Needs </h1>
          </div>
       <HashLink to="/#About">
        <Button variant="raised" color="secondary" style={{opacity:'1', position:'absolute', top:'450px', left:'700px', marginTop:'3%'}}>
      Learn More
    </Button>
    </HashLink>
        <img style={{opacity:'1'}}src='https://www.houstonquinceanera.com/sites/default/files/attach/djluna-02.jpg' alt='' height="730px" width="100%"/>
        <AboutMe/>
        </div>
    </div>
    );
  }
}
export default Introduction;