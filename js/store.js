import { createStore,applyMiddleware } from "redux";
import reducers from "./reducers/reducers";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//plugin middleware
import logger from "redux-logger";
import Layout from "./components/Layout"

//read https://www.npmjs.com/package/redux-thunk
//allows you to delay actions
import thunk from "redux-thunk";
//TODO move store here:
//second argument is the starting state

//export it
export default createStore(reducers, {},applyMiddleware(thunk, logger()));
store.subscribe(()=> {
        console.log("store changed:");
        console.log(store.getState());
    }
);

const store = createStore(reducers);

const app = document.getElementById('app');
ReactDOM.render(<Provider store={store}><Layout /></Provider>, app);
