import React from 'react';
import ReactDOM from 'react-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import LeadBar from './LeadBar.jsx';

import GalleryImages from './GalleryImages.jsx';
import Paper from '@material-ui/core/Paper';
import {Tabs, Tab} from '@material-ui/core/Tabs';
import Slider from 'material-ui/Slider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
const theme = createMuiTheme({
  palette: {
    primary: { main: 'rgb(63, 6, 245)' },
    secondary: { main: 'rgb(63, 6, 245)' }
  },
});

class GalleryTabs extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
<MuiThemeProvider theme={theme}>
  
<Tabs>
<Tab label="Quinces" >
  <GalleryImages/>
</Tab>
<Tab label="Weddings" >
  <div>
    <h2 style={styles.headline}>Tab Two</h2>
    <p>
      This is another example tab.
    </p>
  </div>
</Tab>
<Tab
  label="Other Events"
>
  <div>
    <h2 style={styles.headline}>Tab Three</h2>
    <p>
      This is a third example tab.
    </p>
  </div>
</Tab>
</Tabs>
    <div style={{backgroundColor:'#fafafa'}}>
    <div 
      style={{paddingLeft: '350px',paddingTop:'2%'
      }}
      >
</div>
</div>
</MuiThemeProvider>
)
  }
}
export default GalleryTabs;