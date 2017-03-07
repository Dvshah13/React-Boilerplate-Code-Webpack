import React from "react";
import ReactDOM from "react-dom";
import ChannelList from "./ChannelList"
// import LoadMessages from "./components/LoadMessages";
// import ChannelList from "./components/ChannelList";
// import AddMessages from "./components/AddMessages";
import { Provider,connect } from "react-redux";
// import * as channels from "../actions/channelActions";

@connect((store)=>{
    //the return becomes props
    return {
        channels:store.channels
    }
})
export default class Demo extends React.Component {
    constructor(){
        super();
    }

    // doMessage(message,event){
    //     this.setState({message:message});
    //     var self = this;
    //     axios.post(`https://slack.com/api/chat.postMessage?token=&channel=C4EB439J9&text=${message}&pretty=1.json`)
    //         .then(function(){
    //             self.setState({
    //                 timestamp: Date.now(),
    //                 message: message
    //             });
    //         });
    // }

        render() {
            return (
                <div>
                    <div>
                    My Channels
                    <ChannelList />
                    </div>

                </div>
            );
        }
}

const app = document.getElementById('app');


// store.dispatch({type:"ADD_TODO",payload:{text:"something"}});
// store.dispatch({type:"ADD_TODO",payload:{text:"something else"}});
//
// store.dispatch((dispatch) => {
//         dispatch({type:"ADD_TODO",payload:{text:"#3"}});
//         //async here
//         axios.get("https://jsonplaceholder.typicode.com/posts")
//             .then((response) => {
//                 console.log(response);
//                 dispatch({type:"ADD_TODO",payload:{text:"#4"}});
//             })
//             .catch((err) => {
//                 //dispatch error
//             });
//         //done with async
// })


ReactDOM.render(<Provider store={store}><Demo /></Provider>, app);
