import React, {Component} from 'react';

// the class component
// use the PascalCase for Component Name
class SimpleComponent extends Component {
     constructor(props){  
         super(props);
         // define the State, the local mutable state for the component
         this.state ={
              pName: 'James Bond'
         };
    }   
    // return an HTML that is compoled by JSX parser 
    render(){
        return(
            <div>
                <h2>The Simple Component</h2>
                <strong>
                    The value received from the Parent {this.props.msg}
                    <br/>
                    {this.props.val}
                </strong>
                <br/>
                <ChildComponent1 name={this.state.pName}></ChildComponent1>
            </div>
        );
    }
}



class ChildComponent1 extends Component {
    render(){
        return(
            <div>
                <h4>The Child 1 Component </h4>
                {this.props.name}
            </div>
        );
    }
}




// the class SimpleComponent will export an instance, 
// the caller of this class need not to create an instance
// explicitely
export default SimpleComponent;
