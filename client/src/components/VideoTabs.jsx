import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GalleryImages from './GalleryImages.jsx';
import LeadBar from './LeadBar.jsx';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import VideoGallery from './VideoGallery.jsx';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class VideoTabs extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
<MuiThemeProvider >
<div style={{backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_NeNvOB8s6i7s-lsPJUMZBFZ9bRSVu40hMsp8VapelC2VIs6x)'}}>
  <h1 className="neon-writing" style={{textAlign:'center', fontSize:'72px'}}>Videos</h1>
<Tabs style={{position:'relative'}}>
<Tab label="Quinces" style={{backgroundColor:'white'}} buttonStyle={{color:'black'}}>
  <VideoGallery/>
</Tab>
<Tab label="Weddings" style={{backgroundColor:'white'}}
  buttonStyle={{color:'black'}}
>
</Tab>
<Tab
style={{backgroundColor:'white'}} buttonStyle={{color:'black'}}
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
</div>
</MuiThemeProvider>
)
  }
}
export default VideoTabs;