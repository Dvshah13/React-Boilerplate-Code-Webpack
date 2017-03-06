import React from "react";
import ReactDOM from "react-dom";
import LoadMessages from "./components/LoadMessages";
import ChannelList from "./components/ChannelList";
import AddMessages from "./components/AddMessages";
import axios from "axios";

console.log("working");



class Demo extends React.Component {
    constructor(){
        super();
        this.state = {
            message: " ",
            timestamp: Date.now()
        }
        this.doMessage = this.doMessage.bind(this);
    }

    doMessage(message,event){
        this.setState({message:message});
        var self = this;
        axios.post(`https://slack.com/api/chat.postMessage?token=xoxp-149583067808-149583068192-150342085556-c7b575098803fc466a8d9905b4a4ace0&channel=C4EB439J9&text=${message}&pretty=1.json`)
            .then(function(){
                self.setState({
                    timestamp: Date.now(),
                    message: message
                });
            });
    }

        render() {
            return (
                <div>
                    <div>
                    My Channels
                    <ChannelList />
                    My messages
                    <LoadMessages />
                    <AddMessages doMessage={this.doMessage} />
                    </div>

                </div>
            );
        }
}

ReactDOM.render(<Demo />, document.getElementById('app'));
