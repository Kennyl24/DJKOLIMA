import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


class DiscoBall extends React.Component {
    constructor(props) {
      super(props);
  };
  render(){
    return (
      <div>
        <div>
        <img src='https://www.houstonquinceanera.com/sites/default/files/attach/djluna-02.jpg' alt='' height="730px" width="100%"/>
        </div>
    {/* <div className="stage">
        <figure className="ball"><span className="shadow"></span></figure>
    </div> */}
    </div>
    );
  }
}
export default DiscoBall;