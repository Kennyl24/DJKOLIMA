import React from 'react';
import moment from 'moment';

import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/FlatButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { SocialIcon } from 'react-social-icons';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';


const eventTypes = [
  {
    value: 'Quince',
    label: 'Quince',
  },
  {
    value: 'Wedding',
    label: 'Wedding',
  },
  {
    value: 'Birthday',
    label: 'Birthday',
  },
  {
    value: 'Other Event',
    label: 'Other Event',
  },
];

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
      startDate: moment().format("YYYY-MM-DD"),
    }
    this.nameChange=this.nameChange.bind(this);
    this.emailChange=this.emailChange.bind(this);
    this.numberChange=this.numberChange.bind(this);
    this.typeChange=this.typeChange.bind(this);
    this.dateChange=this.dateChange.bind(this);
    this.messageChange=this.messageChange.bind(this);
    this.checkDates = this.checkDates.bind(this);
  };
componentDidMount(){
  this.checkDates();
}
checkDates(){
  const m = moment().format("YYYY-MM-DD");
  console.log(m)
}
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
typeChange(event){
  console.log(event.target.value);
  this.setState({
    eventType: event.target.value
  });
}
dateChange(event){
  this.setState({
    eventDate: event.target.value
  });
  console.log(this.state.eventDate);
}
messageChange(event){
  console.log(event.target.value);
  this.setState({
    message: event.target.value
  });
}
render(){
  return (
  <div style={{width:'40%', marginLeft:'20%'}}>
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
          type="search"
          margin="normal"
          placeholder="email"
          fullWidth={true}
        />
        <br />
        <form>
         <TextField
          id="date"
          label="event date"
          margin="normal"
          type="date"
          defaultValue={this.state.startDate}
          fullWidth={true}
          />
          </form>
        <br />
         <TextField
          id="search"
          select
          label="Event Type"
          value={this.state.eventType}
          onChange={this.typeChange}
          margin="normal"
          placeholder="Placeholder"
          fullWidth={true}
          >
          {eventTypes.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br />
         <TextField
          id="search"
          // label="Search field"
          type="search"
          margin="normal"
          placeholder="message"
          onChange={this.messageChange}
          multiline={true}
          required={true}
          fullWidth={true}
        />
    <br/>
     <Button variant="raised" color="secondary" style={{position:'relative', marginTop:'20px'}}>
      Submit
    </Button>
    <br />
    <br />
  </div>
);
}
};

export default ContactForm;