import React, { Component } from 'react';
import { FormGroup, Col, FormControl, Form, ControlLabel  } from 'react-bootstrap';


class MessageDetail extends Component {
  render() {
		if ( !this.props.messageDetails.id ) {
			return null
		} else {

	    return (
			  <Form horizontal>
			    <FormGroup controlId='id'>
			      <Col componentClass={ControlLabel} sm={2}>
			        ID
			      </Col>
			      <Col sm={10}>
			        <FormControl value={this.props.messageDetails.id} readOnly />
			      </Col>
			    </FormGroup>

			    <FormGroup controlId='text'>
			      <Col componentClass={ControlLabel} sm={2}>
			        Text
			      </Col>
			      <Col sm={10}>
			        <FormControl value={this.props.messageDetails.text} readOnly />
			      </Col>
			    </FormGroup>

			    <FormGroup controlId='author'>
			      <Col componentClass={ControlLabel} sm={2}>
			       	Author
			      </Col>
			      <Col sm={10}>
			        <FormControl value={this.props.messageDetails.author} readOnly />
			      </Col>
			    </FormGroup>

			    <FormGroup controlId='in_reply_to'>
			      <Col componentClass={ControlLabel} sm={2}>
			       	In Reply To
			      </Col>
			      <Col sm={10}>
			        <FormControl value={this.props.messageDetails.in_reply_to} readOnly />
			      </Col>
			    </FormGroup>

			    <FormGroup controlId='utc_offset'>
			      <Col componentClass={ControlLabel} sm={2}>
			       	UTC Offset
			      </Col>
			      <Col sm={10}>
			        <FormControl value={this.props.messageDetails.utc_offset} readOnly />
			      </Col>
			    </FormGroup>

			    <FormGroup controlId='created_at'>
			      <Col componentClass={ControlLabel} sm={2}>
			        Craeted At
			      </Col>
			      <Col sm={10}>
			        <FormControl value={this.props.messageDetails.created_at} readOnly />
			      </Col>
			    </FormGroup>

			    <FormGroup controlId='updated_at'>
			      <Col componentClass={ControlLabel} sm={2}>
			       	Upadated At
			      </Col>
			      <Col sm={10}>
			        <FormControl value={this.props.messageDetails.updated_at} readOnly />
			      </Col>
			    </FormGroup>

			  </Form>

	    );
	  }
	}
}

export default MessageDetail