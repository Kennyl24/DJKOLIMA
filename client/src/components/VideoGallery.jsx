import React from 'react';
import ReactDOM from 'react-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeadBar from './LeadBar.jsx';
import GalleryModal from './GalleryModal.jsx';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

const styles = {
  root: {
    width: '80%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingLeft:'12%',
    paddingTop:'3%'
  },
  gridList: {
    width: 300,
    height: 607.5,
    overflowY: 'auto',
    order: '0',
    flexGrow: '2',
  },
};
const style = {
  height: '207px',
  // position:'relative',
  // order: '1',
  width: '66%',
  paddingTop:'5px',
  textAlign: 'center',
  verticalAlign:'top',
  display: 'inline-block', 
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto',
  overflow: 'hidden', 
};
const style2 = {
  height: '107px',
  // position:'relative',
  // order: '1',
  width: '25%',
  textAlign: 'center',
  verticalAlign:'top',
  display: 'inline-block', 
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto',
  // overflow: 'hidden', 
};

const tilesData = [
  {
    img: 'https://i.imgur.com/PmqU0Jd.jpg',
    title: 'Napa Valley Transmissions1',
    // featured: true,
  },
  {
    img: 'https://i.imgur.com/YCLcUrX.jpg',
    title: 'Napa Valley Transmissions2',
  },
  {
    img: 'https://i.imgur.com/YCLcUrX.jpg',
    title: 'Napa Valley Transmissions3',
  },
  {
    img: 'https://i.imgur.com/3ss8qJF.jpg',
    title: 'Napa Valley Transmissions4',
  },
  {
    img: 'https://i.imgur.com/3ss8qJF.jpg',
    title: 'Napa Valley Transmissions5',
  },
  {
    img: 'https://i.imgur.com/3ss8qJF.jpg',
    title: 'Napa Valley Transmissions6',
  },
  {
    img: 'https://i.imgur.com/3ss8qJF.jpg',
    title: 'Napa Valley Transmissions7',
  },
  {
    img: 'https://i.imgur.com/3ss8qJF.jpg',
    title: 'Napa Valley Transmissions8',
  },
  {
    img: 'https://i.imgur.com/3ss8qJF.jpg',
    title: 'Napa Valley Transmissions9',
  },
];
class VideoGallery extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      currentImage: '',
      hovered: false,
      biggerPics: false,
    }
    this.clicked=this.clicked.bind(this);
    this.hovered=this.hovered.bind(this);
    this.test=this.test.bind(this);
  }
  clicked (e) {
    console.log('hello', e);
    this.setState({
      clicked: true,
      currentImage: e,
    })
  }
  hovered (e) {
    this.setState({
      hovered: !this.state.hovered,
    })
  }
  test (e, key) {
    e.preventDefault();
    console.log('hi kenny', e.key)
    this.setState({
      biggerPics: !this.state.biggerPics,
    })
  }
  render () {
    let images = tilesData.map(image => {
      return <img key={image.tile} src={image.img} alt="" 
      className="image-test"
      onMouseOver={this.hovered}/>
    });
    return (
      <MuiThemeProvider>
    <div style={styles.root}>
    {this.state.biggerPics ? <GalleryModal images={tilesData} currentImage={this.state.currentImage}/> : null}
    <GridList
      cols={3}
      cellHeight={300}
      padding={40}
      style={styles.gridList}
    >
       {tilesData.map((tile) => (
        <GridTile
          key={tile.title}
          title={this.state.hovered ? tile.title : null}
          titlePosition="top"
          actionIcon={this.state.hovered ? <IconButton onClick={this.clicked.bind(this, tile.img)}><StarBorder color="white" /></IconButton> : null}
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 3 : 1}
          rows={tile.featured ? 3 : 1}
        >
        <iframe width="300" height="300" src="https://www.youtube.com/embed/f5I79eakR8E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </GridTile>
      ))}
    </GridList>
  </div>
  </MuiThemeProvider>
);
}
}

export default VideoGallery;