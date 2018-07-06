
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class Speakers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <MuiThemeProvider>
      <Paper className="speaker" style={{backgroundColor:'black', left:'50px'}}>
        </Paper>
        <Paper className="speaker" style={{backgroundColor:'black', right:'50px'}}>
      </Paper>
      </MuiThemeProvider>
    );
  }
}

export default Speakers;