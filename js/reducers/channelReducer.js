export default function(state={channels:[]},action){
    var newState = Object.assign(state);
    //action.type is required!
    if(action.type=="LOAD_CHANNELS"){
        console.log(action);
        var channels = state.channels.concat(action.payload);
        newState = { ...state, channels:channels };
    }
    return newState; //returns the new value of the state
}
