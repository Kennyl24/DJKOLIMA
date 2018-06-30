import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GalleryImages from './GalleryImages.jsx';
import LeadBar from './LeadBar.jsx';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class GalleryTabs extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
<MuiThemeProvider >
<Tabs style={{position:'relative'}}>
<Tab label="Quinces" >
  <GalleryImages/>
</Tab>
<Tab label="Weddings" >
</Tab>
<Tab
  label="Other Events"
>
<GalleryImages/>
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