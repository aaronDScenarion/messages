import React, { Component } from 'react';
import logo from './Schema_Logo.1bc49eb0e7da4c11a1fce974a38197f2.png';
import './App.css';
import MessageList from './components/MessageList.js'
import fetchJSON from './components/fetchJSON.js'
import ButtonBar from './components/ButtonBar.js'

class App extends Component {
 
  constructor( props ) {
    super( props )
    this.state = {
      messageData: {}
    }
    this.getMessages = this.getMessages.bind(this)
  }

  getMessages( next ) {

      fetchJSON( next )
        .then( messageData => {
          this.setState ({ messageData })         
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
            getMessages={ this.getMessages } />
        </div>
      </div>
    );
  }
}

export default App;
