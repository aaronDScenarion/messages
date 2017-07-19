import React, { Component } from 'react';
import MessageRow from './MessageRow.js'
import { Table  } from 'react-bootstrap';

class MessageList extends Component {

	render() {
		var rows = []

		if (this.props.messageData) {

			this.props.messageData.results.forEach( ( message, idx ) => {
				rows.push(
					<MessageRow
						text={ message.text }
						datePosted={ message.created_at } 
						key={ message.id } />)
			})
		}

		return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Text</th>
            <th>Date Posted</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>			
		)
	}

}

export default MessageList