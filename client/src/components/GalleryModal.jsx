
import React from 'react';
import ReactDOM from 'react-dom';

import Paper from 'material-ui/Paper';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
 paper: {
   position: 'absolute',
   width: theme.spacing.unit * 50,
   backgroundColor: theme.palette.background.paper,
   boxShadow: theme.shadows[5],
   padding: theme.spacing.unit * 4,
 },
});

class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

 handleOpen(){
   this.setState({ open: true });
 };

 handleClose (){
   this.setState({ open: false });
 };

 render() {

   return (
     <div>
       <Modal
         aria-labelledby="simple-modal-title"
         aria-describedby="simple-modal-description"
         open={this.state.open}
         onClose={this.handleClose}
       >
           <Paper style={{position:'relative', top:'80px', marginLeft:'auto', marginRight:'auto', height: '70%', width:'70%'}} zDepth={2}>
           <p style={{position:'relative', fontSize:'20px', textAlign:'center'}}>DJ COLIMA</p>
      <img className="main-image"src="https://i.imgur.com/3ss8qJF.jpg" alt=""/>
      <Icon className="left-image-nav"color="action">
        navigate_before
      </Icon>
      <Icon className="right-image-nav" color="action">
        navigate_next
      </Icon>
           </Paper>
       </Modal>
     </div>
   );
 }
}



export default GalleryModal;