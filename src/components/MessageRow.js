import React, { Component } from 'react';

class MessageRow extends Component {
  render() {
    return (
      <tr onClick={ () => this.props.getMessageDetail(this.props.url) }>
        <td>{this.props.text}</td>
        <td>{this.props.datePosted}</td>
      </tr>
    );
  }
}

export default MessageRow