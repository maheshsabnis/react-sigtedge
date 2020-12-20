import React from "react";

function MyComponent (props){
    return (
        <div className="container">
            <h3>The First Functional Component</h3>
            <strong>
            Value Received from Caller {props.msg}
            </strong>
        </div>
    );
}

// inform the REactDOM.render() that the current exportable
// module return HTML and must be rendered
export default MyComponent;