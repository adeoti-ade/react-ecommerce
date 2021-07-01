import React from 'react';
import './styles.css'

const FormInput = ({handleChange, label, ...otherProps}) => {
    return ( 
        <div className="form-group__row">
            {label && (
                <label>
                    {label}
                </label>
            )}

            <input className="form-input"  onChange={handleChange} {...otherProps}/>
        </div>
     );
}
 
export default FormInput;