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
            if(!values.phone){
                errors.phone = 'Required'
            }
            console.log('Form values', formik.values);
            return errors;
        }});
        // Formik not functioning for now

    return (
        // Step 2: Enter email, phone number
        <Screen>
                <div className="main">
                    <h1 style={{marginLeft:"0px"}}>Step 2:</h1>
                    <form className="form" onSubmit={formik.handleSubmit}>
                        <label style={{fontSize: "20px"}}>
                            Email: 
                            <input style={{marginLeft: "10px"}} type="text" name="email" ref={emailInput} defaultValue={store.getState().updateData.email}/>
                        </label>
                        <label style={{fontSize: "20px"}}>
                            Phone: 
                            <input style={{marginLeft: "10px"}} type="text" name="phone" ref={phoneInput} defaultValue={store.getState().updateData.phoneNumber}/>
                        </label>
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
