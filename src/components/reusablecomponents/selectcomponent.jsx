import React, { Component } from 'react';
class SelectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    // The hanleChange event that will be used to pass data from 
    // SelectComponent to its parent
    handleChange=(evt)=>{
        // the 'selectedValue' is props object
        // this is used as a method taht will be
        // used to pass data to its parent
        // using function equality of JavaScript
        this.props.selectedValue(evt.target.value);
    }


    render() { 
        return ( 
            // set the 'value' property for the element
            // this will be used to provided selected value
            // to parent component. 'pvalue' will be the selected value
            // the 'dataSource' is passed to parent element
            <select className="form-control" value={this.props.pvalue}
             onChange={this.handleChange.bind(this)}>
                <option>Select Data</option>
                {
                    this.props.dataSource.map((val,idx)=>(
                    <option key={idx} value={val}>{val}</option>
                    ))
                }
            </select>
         );
    }
}
 
export default SelectComponent;