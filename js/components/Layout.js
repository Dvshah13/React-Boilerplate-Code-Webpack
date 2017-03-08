import React from "react";
import ReactDOM from "react-dom";
import ChannelList from "./ChannelList";
import LoadMessages from "./LoadMessages";
import AddDeleteMessages from "./AddMessages";
// import axios from 'axios';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
            <ChannelList />
            <LoadMessages />
            </div>
        );
    }
}
