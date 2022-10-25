import React from 'react';
import './Button.scss';

const Button = (props) => {
    return (
        <button 
        type={props.type} 
        onClick={props.onClick} 
        className ={props.classes}
        id ={props.id}
        disabled={props.disabled}>{props.children}</button>
    )
};
export default Button;