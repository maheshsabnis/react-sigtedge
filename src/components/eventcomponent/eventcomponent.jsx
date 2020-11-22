import React, { Component } from 'react';
class EventComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            firstName: '',
            middleName: '',
            lastName: '',
            fullName: ''
        };
    }
    handleFirstNameChange=(evt)=>{
        // update the state property value
        this.setState({firstName:evt.target.value});
    }

    handleMiddleNameChange=(evt)=>{
        // update the state property value
        this.setState({middleName:evt.target.value});
    }
    handleLastNameChange=(evt)=>{
        // update the state property value
        this.setState({lastName:evt.target.value});
    }
    getFullNameClick=()=>{
        let name = this.state.firstName + ' ' + this.state.middleName + ' ' + this.state.lastName;
        this.setState({fullName: name});
    }
    render() { 
        return (
            <div className="container">
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text"  className="form-control" value={this.state.firstName}
                     onChange={this.handleFirstNameChange.bind(this)}/>
                     <span>{this.state.firstName}</span>
                </div>   
                <div className="form-group">
                    <label>Middle Name</label>
                    <input type="text" className="form-control" value={this.state.middleName}
                    onChange={this.handleMiddleNameChange.bind(this)}/>
                </div>   
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" value={this.state.lastName}
                     onChange={this.handleLastNameChange.bind(this)}/>
                </div>   
                <div className="form-group">
                    <input type="button" value="clear" className="btn btn-warning"/>
                    <input type="button" value="Generate" className="btn btn-success"
                     onClick={this.getFullNameClick.bind(this)}/>
                </div>   
                <br/>
                <div>
         <strong>{this.state.fullName}</strong>
                </div>
            </div>
        );
    }
}
 
export default EventComponent;