import React, { Component } from 'react';
import logo from './Schema_Logo.1bc49eb0e7da4c11a1fce974a38197f2.png';
import './App.css';
import MessageList from './components/MessageList.js'
import fetchJSON from './components/fetchJSON.js'
import ButtonBar from './components/ButtonBar.js'
import MessageDetail from './components/MessageDetail.js'

class App extends Component {
 
  constructor( props ) {
    super( props )
    this.state = {
      messageData: {},
      messageDetails: {}
    }
    this.getMessages = this.getMessages.bind(this)
    this.getMessageDetail = this.getMessageDetail.bind(this)
  }

  getMessages( url ) {

      fetchJSON( url )
        .then( messageData => {
          this.setState ({ messageData })         
        })

        .catch( err => console.log( 'ERROR: ' + err ))    
  }

  getMessageDetail( url ) {

      fetchJSON( url )
        .then( messageDetails => {
          this.setState ({ messageDetails })         
        })

        .catch( err => console.log( 'ERROR: ' + err ))    
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Schema Messages</h2>
        </div>
        <p className="App-intro">
          Click a message to view details.
        </p>
        <div>
          <ButtonBar getMessages={ this.getMessages } />
        </div>
        <div>
          <MessageList 
            messageData={ this.state.messageData } 
            getMessages={ this.getMessages } 
            getMessageDetail={ this.getMessageDetail }/>
        </div>
        <div>
          <MessageDetail
             messageDetails= { this.state.messageDetails }/>
        </div>
      </div>
    );
  }
}

export default App;
