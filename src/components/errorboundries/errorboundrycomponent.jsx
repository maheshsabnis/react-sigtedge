import React, { Component } from 'react';


class GloablaExcptionHandlerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            errorMessage: ''
         };
    }
    // subscribe to the property that will listen any crash from child 
    // component. Provide error to state object
    static getDerivedStateFromError(error){
        return{
            errorMessage: error.toString()
        };
    } 

  // method that handles erroos occured in child componnets in tree
  componentDidCatch=(error, logInfo)=>{
      // generate the stack trace`
      this.fakeLogger(error.toString(), logInfo.componentStack);
  }


  // create a fakelogger service
  fakeLogger = console.log;

    render() { 
         // logic for rendering fallback UI if error occured
         if(this.state.errorMessage) {
             // render the fallbakc ui
             return (
                 <div>
                     <strong>Some Error occured inloading component</strong>
                     {
                         this.state.errorMessage
                     }   
                 </div>
             );

         }
         // keep rendering the children
         return this.props.children;
    }

  
}
 
 


class ConterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            counter:0
         };
    }
    increament=()=>{
        this.setState({counter:this.state.counter+1});
    }
    render() { 
        // try{
            if(this.state.counter === 8){
                throw new Error('Ypu have reached to max limit');
            } else {
                return (<div>
                    <strong>{this.state.counter}</strong>
                    <input type="button" value="increament"
                    onClick={this.increament.bind(this)}></input>
                </div>)
            }
        // }catch{
        //     return <div>
        //           <strong>
        //               <p>Error Occured</p>
        //           </strong>
        //     </div>
        // }
    }
}

 
class CounterContainerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  

        };
    }
    refreshPage(){
         // reload the same page
    window.history.go(0);
    }
    render() { 
        return ( 
            <div>
              <GloablaExcptionHandlerComponent>
              <ConterComponent></ConterComponent>
              </GloablaExcptionHandlerComponent>
              <input type="button" value="Refresh"
                onClick={this.refreshPage.bind(this)}/>
            </div>
         );
    }
}
 
export default CounterContainerComponent;

 