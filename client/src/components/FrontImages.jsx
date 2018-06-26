import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


class FrontImages extends React.Component {
    constructor(props) {
      super(props);
  };
  render(){
    return (
    <div className="test">
    <div className="test-container" >
    <div className="polaroid" style={{webkitTransform : 'rotate(-10deg)'}} >
    <img src="https://zurb.com/playground/uploads/upload/upload/195/image-04.jpg" height="250px" width="200px"/>
    <p>Weddings1</p>
    </div>
    <div className="polaroid" style={{webkitTransform : 'rotate(10deg)'}}>
    <img src="https://zurb.com/playground/uploads/upload/upload/195/image-04.jpg" height="250px" width="200px"/>
    <p>Weddings2</p>
    </div>
    <div className="polaroid" style={{webkitTransform : 'rotate(-10deg)'}} >
    <img src="https://zurb.com/playground/uploads/upload/upload/195/image-04.jpg" height="250px" width="200px"/>
    <p>Weddings3</p>
    </div>
    <span style={{fontSize:'30px'}}> DJ COLIMA </span>
    </div>
    <div className="test-container" >
    <div className="polaroid" style={{webkitTransform : 'rotate(10deg)'}}>
    <img src="https://zurb.com/playground/uploads/upload/upload/195/image-04.jpg" height="250px" width="200px"/>
    <p>Weddings4</p>
    </div>
    <div className="polaroid" style={{webkitTransform : 'rotate(-10deg)'}} >
    <img src="https://zurb.com/playground/uploads/upload/upload/195/image-04.jpg" height="250px" width="200px"/>
    <p>Weddings5</p>
    </div>
    </div>
    </div>
    );
  }
}
export default FrontImages;