import React, { Component } from 'react';
import logo from './Schema_Logo.1bc49eb0e7da4c11a1fce974a38197f2.png';
import './App.css';
import MessageList from './components/MessageList.js'

const MESSAGEDATA = {
  "count": 7,
  "next": "https://aarond-test.herokuapp.com/messages/?page=2",
  "previous": null,
  "results": [
      {
          "id": 1,
          "text": "Knock-knock",
          "url": "https://aarond-test.herokuapp.com/messages/1/",
          "created_at": "2016-10-25T04:45:47.802339Z"
      },
      {
          "id": 2,
          "text": "Who's there?",
          "url": "https://aarond-test.herokuapp.com/messages/2/",
          "created_at": "2016-10-25T04:55:47.802339Z"
      },
      {
          "id": 3,
          "text": "I asked the librarian for a book on Pavlov's dog and Schrödinger's cat. She said it rang a bell, but she wasn't sure if it was on the shelf or not.",
          "url": "https://aarond-test.herokuapp.com/messages/3/",
          "created_at": "2016-10-23T01:55:47.802339Z"
      },
      {
          "id": 4,
          "text": "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.",
          "url": "https://aarond-test.herokuapp.com/messages/4/",
          "created_at": "2016-10-24T03:55:47.802339Z"
      },
      {
          "id": 5,
          "text": "How many programmers does it take to change a light bulb?",
          "url": "https://aarond-test.herokuapp.com/messages/5/",
          "created_at": "2016-10-25T05:10:51.483017Z"
      }
  ]
} 

class App extends Component {
 
  constructor( props ) {
    super( props )
    this.state = {
      messageData: MESSAGEDATA
    }
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
          <MessageList messageData={ this.state.messageData } />
        </div>
      </div>
    );
  }
}

export default App;
