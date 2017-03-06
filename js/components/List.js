import React from "react";

OAuth Token: xoxp-149583067808-149583068192-150293942834-4aeceb0be75edb7ded1a881ddb3bedaa

export default class List extends React.Component {
    render() {
        return (
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ul>
        );
    }
}

// Show channel listing
axios.post('https://slack.com/api/channels.list?token=xoxp-149583067808-149583068192-150342085556-c7b575098803fc466a8d9905b4a4ace0&pretty=1')

// Load a channel messages
axios.post('https://slack.com/api/channels.history?token=xoxp-149583067808-149583068192-150342085556-c7b575098803fc466a8d9905b4a4ace0&channel=C4EB439J9&pretty=1')

// Add methods
axios.post('https://slack.com/api/chat.postMessage?token=xoxp-149583067808-149583068192-150342085556-c7b575098803fc466a8d9905b4a4ace0&channel=C4EB439J9&text=Hola&pretty=1')

// Delete method
axios.post('https://slack.com/api/chat.delete?token=xoxp-149583067808-149583068192-150342085556-c7b575098803fc466a8d9905b4a4ace0&ts=1488820611.930208&channel=C4EB439J9&pretty=1')

// module.exports = List;
