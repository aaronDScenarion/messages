import React, { Component } from 'react';
import MessageRow from './MessageRow.js'
import { Table, ButtonToolbar, Button  } from 'react-bootstrap';

class MessageList extends Component {

	render() {
		var rows = []

		if (this.props.messageData.results) {

			this.props.messageData.results.forEach( ( message, idx ) => {
				rows.push(
					<MessageRow
						text={ message.text }
						datePosted={ message.created_at } 
						key={ message.id } />)
			})

			return (
				<div>
	      <ButtonToolbar>
	        <Button 
	        	bsStyle="primary"
	        	disabled={!this.props.messageData.next}
	        	onClick={() => this.props.getMessages(this.props.messageData.next)}>Next Messages
	        </Button>
	        <Button bsStyle="primary"
	        	disabled={!this.props.messageData.previous}
	        	onClick={() => this.props.getMessages(this.props.messageData.previous)}>Previous Message
	        </Button>
	      </ButtonToolbar>
	      <Table striped bordered condensed hover>
	        <thead>
	          <tr>
	            <th>Text</th>
	            <th>Date Posted</th>
	          </tr>
	        </thead>
	        <tbody>{rows}</tbody>
	      </Table>		
	      </div>	
			)
		}
		return null
	}

}

export default MessageList