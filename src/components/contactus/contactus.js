import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class ContactUs extends Component {


  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
      feedback: "",
      senderEmail: "",
      senderName: ""
    }
  }


  onChange(e){
    this.setState({[e.target.name]:[e.target.value]})
  }


  onSubmit(event) {
    event.preventDefault();

    const obj = {
      name: this.state.senderName,
      email: this.state.senderEmail,
      feedback: this.state.feedback
    }

    window.location.reload();

  }

  



  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact" className="container" onSubmit={this.onSubmit}>
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to provide me with your valuable feedback about my projects and portfolio
              </p>
            </div>
          </div>
           
          <Form style={{width: "50%", margin: "0 auto"}} >
        <FormGroup>
          <Label for="name" style={{float:"none"}}>Name</Label>
          <Input type="text" name="senderName" id="senderName" placeholder="Please Enter your name" onChange={this.onChange} value={this.state.name}/>
        </FormGroup>
        <FormGroup>
          <Label for="email" style={{float:"none"}}>Email</Label>
          <Input type="email" name="senderEmail" id="senderEmail" placeholder="Please Enter your email" onChange={this.onChange} value={this.state.senderEmail} />
        </FormGroup>
        
        
        <FormGroup>
          <Label for="feedback" style={{float:"none"}}>Your feedback</Label>
          <Input type="textarea" name="feedback" id="feedback" onChange={this.onChange} value={this.state.feedback}/>
        </FormGroup>
        <div>
        <Button >Submit</Button>
        </div>
      </Form>
      
        </section>
        );
  }
}

