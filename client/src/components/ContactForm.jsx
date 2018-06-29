import React from 'react';

import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/FlatButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { SocialIcon } from 'react-social-icons';
import IconButton from '@material-ui/core/IconButton';
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      phoneNumber:'', 
      eventType:'', 
      eventDate:'', 
      message: '',
    }
    this.nameChange=this.nameChange.bind(this);
    this.emailChange=this.emailChange.bind(this);
    this.numberChange=this.numberChange.bind(this);
    this.typeChange=this.typeChange.bind(this);
    this.dateChange=this.dateChange.bind(this);
    this.messageChange=this.messageChange.bind(this);
  };
nameChange(event, newValue){
  this.setState({
    name: newValue
  });
  console.log(this.state.name);
}
emailChange(event, newValue){
  this.setState({
    email: newValue
  });
  console.log(this.state.email);
}
numberChange(event, newValue){
  this.setState({
    phoneNumber: newValue
  });
  console.log(this.state.phoneNumber);
}
typeChange(event, newValue){
  this.setState({
    eventType: newValue
  });
  console.log(this.state.eventType);
}
dateChange(event, newValue){
  this.setState({
    eventDate: newValue
  });
  console.log(this.state.eventDate);
}
messageChange(event, newValue){
  this.setState({
    message: newValue
  });
  console.log(this.state.message);
}
render(){
  return (
  <div style={{width:'40%', marginRight:'10%'}}>
    {/* <TextField
      hintText="Name"
      onChange={this.nameChange}
    /><br />
    <TextField
      hintText="Email"
      onChange={this.emailChange}
    /><br />
    <TextField
      hintText="Phone Number"
      onChange={this.numberChange}
    /><br />
    <TextField
      hintText="Type of Event"
      onChange={this.typeChange}
    /><br />
    <TextField
      hintText="Date of Event"
      onChange={this.dateChange}
    /><br />
    <TextField
      hintText="Message"
      onChange={this.messageChange}
      multiLine={true}
      rows={2}
      rowsMax={4}
    /> */}
    <TextField
          id="search"
          // label="Search field"
          type="search"
          margin="normal"
          placeholder="Name"
          required={true}
          fullWidth={true}
        />
        <br />
         <TextField
          id="search"
          // label="Search field"
          type="search"
          margin="normal"
          placeholder="phone number"
          required={true}
          fullWidth={true}
        />
        <br />
         <TextField
          id="search"
          // label="Search field"
          type="search"
          margin="normal"
          placeholder="event type"
          // required={true}
          fullWidth={true}
        />
        <br />
         <TextField
          id="search"
          // label="Search field"
          type="search"
          margin="normal"
          placeholder="date of event"
          // required={true}
          fullWidth={true}
        />
        <br />
         <TextField
          id="search"
          // label="Search field"
          type="search"
          margin="normal"
          placeholder="Placeholder"
          // required={true}
          fullWidth={true}
        />
        <br />
         <TextField
          id="search"
          // label="Search field"
          type="search"
          margin="normal"
          placeholder="message"
          multiline={true}
          required={true}
          fullWidth={true}
        />
    <br/>
     <Button variant="raised" color="secondary">
      Submit
    </Button>
    <br />
    <br />
  </div>
);
}
};

export default ContactForm;