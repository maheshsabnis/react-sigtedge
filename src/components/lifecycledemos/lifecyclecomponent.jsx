import React, { Component } from 'react';

class LifeCycleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            pValue:0
        };
    }
    componentDidMount=()=>{
        console.log('COmponent Did Mount in Parent');
    }
    componentWillMount=()=>{
        console.log('COmponent Will Mount in Parent');
    }
    componentDidUpdate=()=>{
        console.log('COmponent Did Update in Parent');
    }
    render() { 
        
             if(this.state.pValue % 2 === 0) {
                   return (
                       <div className="container">
                           <h2>The Parent Component</h2>
                            <input type="text"
                             className="form-control"
                             value={this.state.pValue}
                             onChange={(evt)=>{
                                 this.setState({pValue:evt.currentTarget.value})
                             }}/>
                             <MyFirsChileComponent
                              data={this.state.pValue}></MyFirsChileComponent>
                       </div>
                   ); 
             } else {
                return (
                    <div className="container">
                        <h2>The Parent Component</h2>
                         <input type="text"
                          className="form-control"
                          value={this.state.pValue}
                          onChange={(evt)=>{
                              this.setState({pValue:evt.currentTarget.value})
                          }}/>
                          <MySecondChildComponent
                           data={this.state.pValue}></MySecondChildComponent>
                    </div>
                ); 
             }
        
    }
}
 

class MyFirsChileComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            x:0,
            y:0
        };
   
    }
    getMousePosition=(event)=>{
       
        this.setState({x:event.clientX});
        this.setState({y:event.clientY});
        console.log(`x = ${this.state.x} and y = ${this.state.y}`);
    }
    componentDidMount=()=>{
        console.log('COmponent Did Mount in My First Child');
        window.addEventListener('mousemove', this.getMousePosition);
    }
    componentWillMount=()=>{
        console.log('COmponent Will Mount in My First Child');
    }
    componentDidUpdate=()=>{
        console.log('COmponent Did Update My First Child');
    }
    componentWillUnmount=()=>{
        console.log('First Child Component is unmounted');
        window.removeEventListener('mousemove', this.getMousePosition);
    }
    render(){
        return (
            <div className="container">
                <h2>The First Child Component</h2>
                <div>
        <strong>Data Received from Parent {this.props.data}</strong>
                    <div>
                        X position of Mouse = {this.state.x} && 
                        Y position of Mouse = {this.state.y}
                    </div>
                </div>
            </div>
        );
    }    
}

class MySecondChildComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            x:10
        };
    }

    componentDidMount=()=>{
        console.log('COmponent Did Mount in My Second Child');
    }
    componentWillMount=()=>{
        console.log('COmponent Will Mount in My Second Child');
    }
    componentDidUpdate=()=>{
        console.log('COmponent Did Update My Second Child');
    }
    componentWillUnmount=()=>{
        console.log('Second Child Component is unmounted');
    }
    render(){
        return(
            <div className="container">
                <h2>The Second Child Component</h2>
        <strong>The Value received from Parent {this.props.data}</strong>
            </div>
        );
    }
}


export default LifeCycleComponent;