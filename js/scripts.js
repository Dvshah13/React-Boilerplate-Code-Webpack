import React from "react";
import ReactDOM from "react-dom";
import List from "./components/List";
console.log("working");

class Demo extends React.Component {
        render() {
            return (
                <div>
                    <div>
                    I am a react Component
                    </div>
                    <List />
                </div>
            );
        }
}

ReactDOM.render(<Demo />, document.getElementById('app'));
