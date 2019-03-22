import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact" className="container">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel provide me with your valuable feedback
              </p>
            </div>
          </div>
           
          <Form style={{width: "50%", margin: "0 auto"}}>
        <FormGroup>
          <Label for="name" style={{float:"none"}}>Name</Label>
          <Input type="text" name="name" id="name" placeholder="Please Enter your name" />
        </FormGroup>
        <FormGroup>
          <Label for="email" style={{float:"none"}}>Email</Label>
          <Input type="email" name="email" id="email" placeholder="Please Enter your email" />
        </FormGroup>
        
        
        <FormGroup>
          <Label for="feedback" style={{float:"none"}}>Your feedback</Label>
          <Input type="textarea" name="feedback" id="feedback" />
        </FormGroup>
        <div>
        <Button >Submit</Button>
        </div>
      </Form>
      
        </section>
        );
  }
}
