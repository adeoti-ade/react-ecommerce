import React from 'react';

const FormInput = ({handleChange, label, ...otherProps}) => {
    return ( 
        <div className="form-group__row">

            <input className="form-input"  onChange={handleChange} {...otherProps}/>
        </div>
     );
}
 
export default FormInput;