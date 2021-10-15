import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Screen from '../Screen/Screen';
import './Step2.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/exportActions'
import { store } from '../../state/store';
import { useFormik } from 'formik';


function Step2(props) {
    console.log(store.getState());
  
    const dispatch = useDispatch();
    const { updateEmail, updatePhone } = bindActionCreators(actionCreators, dispatch);

    const emailInput = React.createRef();
    const phoneInput = React.createRef();

    const handleInput = () => {
        var input1 = emailInput.current.value;
        var input2 = phoneInput.current.value;

        updateEmail(input1);
        updatePhone(input2);
    }

    

    const formik = useFormik({
        initialValues: {
            email: '',
            phone: ''
        },
        onSubmit: values => {
            console.log('Form data', values);
        },
        validate: values => {
            // values.email, values.phone
            // errors.email, errors.phone 
            // errors.email = 'This field is required'
            let errors = {};

            if(!values.email){
                errors.email = 'Required'
            } else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
                errors.email = 'Invalid email format'
            }
            // 
            if(!values.phone){
                errors.phone = 'Phone is required'
            } else if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(values.phone)){
                errors.phone = 'Invalid phone number'
            }
            console.log('Form errors', errors);
            return errors;
        }});
        // Formik not functioning for now
        console.log('Form values', formik.values);

    return (
        // Step 2: Enter email, phone number
        //defaultValue={store.getState().updateData.email}
        //  defaultValue={store.getState().updateData.phoneNumber}
        <Screen>
            <div className="main">
                <h1 style={{marginLeft:"0px"}}>Step 2:</h1>
                <form className="form" onSubmit={formik.handleSubmit}>
                    <label htmlFor="email" style={{fontSize: "20px"}}> 
                        Email: 
                        <input type="email" style={{marginLeft: "10px"}} id="email" name="email" ref={emailInput}  value={formik.values.email} onChange={formik.handleChange}/>
                    </label>
                    {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
 
                    <label htmlFor="phone" style={{fontSize: "20px"}}>
                        Phone: 
                        <input style={{marginLeft: "10px"}} type="text" id="phone" name="phone" ref={phoneInput} value={formik.values.phone} onChange={formik.handleChange}/>
                    </label>
                    {formik.errors.phone ? <div className="error" id="bottom">{formik.errors.phone}</div> : null}
                    <br/>
                    <Link to="/steps/1">
                        <input onClick={handleInput} className="btn btn-success" style={{fontSize: "20px", marginTop: "10px", backgroundColor:"gray", marginRight:"10px"}} type="submit" value="Back"/>
                    </Link>
                    <Link to="/steps/3">
                        <input onClick={handleInput} className="btn btn-success" style={{fontSize: "20px", marginTop: "10px"}} type="submit" value="Next"/>
                    </Link>
                </form>
            </div>
            <Link to="/">
                <button className="btn btn-primary" style={{marginTop:'25px', fontSize: '20px'}}>Back to start</button>
            </Link>
        </Screen>
    );
}
export default Step2;
