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
      this.state = {
        backgroundColor: 'transparent'
      }
      this.fireOnScroll = this.fireOnScroll.bind(this);
  };
  fireOnScroll(e) {
    console.log('yello!');
      if (window.scrollY > 600) {
        this.setState({ 
          backgroundColor:'rgb(63, 6, 245)' 
      });
      }  else {
        this.setState({ 
          backgroundColor:'transparent' 
      });
      }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.fireOnScroll, true);
  }
  render(){
    const navButtons = (
      <div>
        <Link to={{ pathname:'/' }}><FlatButton label="Home" style={{color:'black'}}></FlatButton></Link>
        <Link to={{ pathname:'/gallery' }}><FlatButton label="Gallery" style={{color:'black'}} /></Link>
        <Link to={{ pathname:'/videos' }}><FlatButton label="Videos" style={{color:'black'}}/></Link>
        <HashLink to="/#Content"><FlatButton label="Contact" style={{color:'black'}}/></HashLink>
      </div>
    );
    const leftButtons = (
      <div>
        
      </div>
    );
    return (
      <MuiThemeProvider>
      <AppBar
        id="myNav"
        title='DJ KOLIMA'
        style={{backgroundColor: this.state.backgroundColor, maxWidth:'100%',position:'fixed', top: '0'}}
        titleStyle={{fontSize:'40px', color:'black'}}
        iconElementLeft={leftButtons}
        iconElementRight={navButtons}
        >
        </AppBar>
        </MuiThemeProvider>
    );
  }
}
export default LeadBar;