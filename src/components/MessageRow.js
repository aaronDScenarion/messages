import React, { Component } from 'react';

class MessageRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.text}</td>
        <td>{this.props.datePosted}</td>
      </tr>
    );
  }
}

export default MessageRow