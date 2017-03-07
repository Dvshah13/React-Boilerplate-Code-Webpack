import { combineReducers } from "redux";
import channelReducer from "./channelReducer";
// import messagesReducer from "./messagesReducer";
// import addMessageReducer from "./addMessageReducer";
// import deleteMessagesReducer from "./deleteMessagesReducer";
export default combineReducers({
    channels:channelReducer
});
