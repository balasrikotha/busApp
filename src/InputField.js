import React from 'react';

const InputField = (props) =>{

    return(
        <input type = {props.type} placeholder = {props.placeholder} className = {props.ClassName+" input-field"} id = {props.id} />
    )

}

export default InputField;