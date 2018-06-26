import React from 'react';
import TextField from 'material-ui/TextField';
import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/FlatButton';

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
  <div>
    <div style={{marginLeft:'25%'}}>
    <TextField
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
    /><br />
    <FlatButton backgroundColor='purple'>
      SUBMIT
    </FlatButton>
  </div>
  </div>
);
}
};

export default ContactForm;