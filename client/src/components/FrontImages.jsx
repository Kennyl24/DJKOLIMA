import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


class FrontImages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        color: '$'
      }
      this.randomColor = this.randomColor.bind(this);
  };
  componentDidMount(){
    this.randomColor();
  }
  randomColor(){
    const allowed = "ABCDEF0123456789";
    const color = "#";
    while(this.state.color.length < 7){
        this.state.color += allowed.charAt(Math.floor((Math.random()*16)+1));
    }
    this.setState({ 
      color: this.state.color
     }) ;
     console.log(this.state.color)
 }
  render(){
    return (
    <div className="test">
    <div className="test-container" >
    <div className="polaroid" style={{webkitTransform : 'rotate(-10deg)'}} >
    <img src="https://zurb.com/playground/uploads/upload/upload/195/image-04.jpg" height="250px" width="200px"/>
    <p>Weddings</p>
    </div>
    <div className="polaroid" style={{webkitTransform : 'rotate(10deg)'}}>
    <img src="https://zurb.com/playground/uploads/upload/upload/195/image-04.jpg" height="250px" width="200px"/>
    <p>Quinces</p>
    </div>
    <div className="polaroid" style={{webkitTransform : 'rotate(-10deg)'}} >
    <img src="https://zurb.com/playground/uploads/upload/upload/195/image-04.jpg" height="250px" width="200px"/>
    <p>Other Events</p>
    </div>
    {/* <div className="test-container" style={{marginTop:'5%'}}> */}
    <div className="polaroid" style={{webkitTransform : 'rotate(10deg)', marginTop:'5%'}}>
    <img src="https://zurb.com/playground/uploads/upload/upload/195/image-04.jpg" height="250px" width="200px"/>
    <p>Videos</p>
    </div>
    <span className="neon-writing" style={{position: 'relative', font: '400 18px/1 "Kaushan Script", cursive', left: '40px', top: '200px', fontSize:'80px'}}> DJ KOLIMA </span>
    <div className="polaroid" style={{webkitTransform : 'rotate(-10deg)', marginTop:'5%'}} >
    <img src="https://zurb.com/playground/uploads/upload/upload/195/image-04.jpg" height="250px" width="200px"/>
    <p>DJ KOLIMA</p>
    {/* </div> */}
    </div>
    </div>
    </div>
    );
  }
}
export default FrontImages;