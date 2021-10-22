import React, { Component } from 'react';
import { useField, ErrorMessage } from 'formik';
import './TextField.css';

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
    <div>
        <label htmlFor={field.name}>{label}</label>
        <input id="textField" className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        autoComplete="off"
        {...field} {...props}/>
        <ErrorMessage component="div" name={field.name} className="error"/>
    </div>);
}
 
export default TextField;