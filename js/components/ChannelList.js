import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';

export default class ChannelList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channels: []
    };
  }

  componentDidMount() {
    axios.get(`https://slack.com/api/channels.list?token=xoxp-149583067808-149583068192-151447687795-a35815c5be35dbd2e99c32b7409de0c7&pretty=1`)
      .then(res => {
          console.log(res);
        const channels = res.data.channels;
        console.log("Channel array" + channels);
        this.setState({ channels });
        console.log(this.state);
      });
      console.log("Individual" + this.state.channels)
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.channels.map(channel =>
            <li key={channel.id}>{channel.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return (
        channels: state.channels
    );
}
