import React, { Component } from 'react';
import { ButtonToolbar, Button  } from 'react-bootstrap';


class ButtonBar extends Component {
  render() {
    return (
      <ButtonToolbar>
        <Button 
            bsStyle="primary" 
            onClick={() => this.props.getMessages("https://aarond-test.herokuapp.com/messages/")} >
            List Messages
        </Button>
        <Button bsStyle="primary">New Message</Button>
      </ButtonToolbar>    );
  }
}

export default ButtonBar