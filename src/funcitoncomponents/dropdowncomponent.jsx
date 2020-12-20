import React  from 'react';

const DropDownComponent=(props)=>{
    const handleChange=(val)=>{
        props.emitSelectedValue(val);
    }

//   {/* props.data is the state property passed from  parent component  to DropDownComponent 
//             handleChange(evt.target.value) will pass selected value to parent component
//         */}

    return(
        <select className="form-control"
         value= {props.data}
         onChange={(evt)=> {handleChange(evt.target.value)}}>
            <option>Select Category</option>
            {
                props.dataSource.map((val,idx)=>(
                    <option key={idx} value={val}>{val}</option>
                ))
            }
        </select>
    );
}

export default DropDownComponent;