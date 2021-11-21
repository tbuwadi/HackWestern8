import React, { Component } from "react";
import "./AnnouncementsStyles.css";

import AnnouncementsWindow from "./AnnouncementsWindow";
import AnnouncementsComposer from "./AnnouncementComposer";

export default class Announcements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { text: "Welcome everyone!" }
      ]
    };
  }

  // if new message was submitted from child component // process
  submitted = getNewMessage => {
    if (getNewMessage != "") {
      // match the state format
      const newMessage = { text: getNewMessage };
      // merge new message in copy of state stored messages
      let updatedMessages = [...this.state.messages, newMessage];
      // update state
      this.setState({
        messages: updatedMessages
      });
    }
  };

  render() {
    return (
      <div style={{textAlign: "center"}} className="App">
        <h3>Announcements</h3>
        {/* send stored messages as props to chat window */}
        <AnnouncementsWindow messagesList={this.state.messages} />
        {/* send submitted props to chat composer */}
        {this.props.userType==="admin"?(<AnnouncementsComposer submitted={this.submitted} />):(<></>)}
      </div>
    );
  }
}

