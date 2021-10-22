import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Screen from '../Screen/Screen';
import './Step2.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/exportActions'
import { store } from '../../state/store';
import { Formik, Form } from 'formik';
import { updateEmail, updatePhone } from '../../state/actions/actions';
import TextField from '../TextField/TextField';
import * as Yup from 'yup';
import { oneOf } from 'prop-types';
import NavButton from '../NavButton/NavButton';
import { useHistory } from "react-router-dom";


class Step2 extends React.Component {
    render(){
        // TODO: create regex validation function
        const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

        const validate = Yup.object({
            email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
            phoneNumber: Yup.string()
                .matches(phoneRegExp, 'Phone number is invalid')
                .required('Phone is required'),
        })
        return (
            <Screen>
                <div className="main">
                    <Formik
                        initialValues={{
                            email: '',
                            phoneNumber: '',
                        }}
                        validationSchema={validate}
                        onSubmit={values => {
                            console.log('Values',values);
                            this.props.history.push('/steps/3');
                        }}
                    >
                        {formik => (
                            <div className="form-group row" style={{ marginTop: '-25px', justifyContent: 'space-around' }}>
                                <div className="col-xs-4">
                                    {/*console.log(formik.values)*/}
                                    <span class="circle"/>
                                    <span class="circle" id="circle-selected"/>
                                    <span class="circle"/>
                                    <h1 style={{marginLeft:"0px"}}>Step 2:</h1>
                                    <Form>
                                        <TextField label="Email:" name="email" type="email"/>
                                        <TextField label="Phone number:" name="phoneNumber" type="phone"/>
                                        <br/>
                                        <NavButton nav={'/steps/1'} disabled={false}>Previous</NavButton>
                                        <button className={`btn btn-${formik.values.email.length !== 0 && Object.keys(formik.errors).length === 0 ? 'success' : 'dark'} mt-4 ml-2 btn-lg`} type="submit">Next</button>
                                        <button className="btn btn-danger mt-4 ml-2 btn-lg" type="reset">Reset</button>
                                    </Form>
                                </div>
                            </div>
                        )}
                    </Formik>
            </div>
            </Screen>
        );
    }
}
export default Step2;







/*
<div className="main">
                        <h1 style={{marginLeft:"0px"}}>Step 2:</h1>
                        <form className="form" onSubmit={formikProps.handleSubmit}>
                            <label htmlFor="email" style={{fontSize: "20px"}}> 
                                Email: 
                                <input type="email" style={{marginLeft: "10px"}} id="email" name="email" defaultValue={store.getState().updateData.email} onChange={formikProps.handleChange}/>
                            </label>
                            {formikProps.errors.email ? <div className="error">{formikProps.errors.email}</div> : null}

                            <label htmlFor="phone" style={{fontSize: "20px"}}>
                                Phone: 
                                <input style={{marginLeft: "10px"}} type="text" id="phone" name="phone" defaultValue={store.getState().updateData.phoneNumber} onChange={formikProps.handleChange}/>
                            </label>
                            {formikProps.errors.phone ? <div className="error" id="bottom">{formikProps.errors.phone}</div> : null}
                            <br/>
                            <Link to="/steps/1">
                                <input onClick={handleUpdatingData} className="btn btn-success" style={{fontSize: "20px", marginTop: "10px", backgroundColor:"gray", marginRight:"10px"}} type="submit" value="Back"/>
                            </Link>
                            <Link to="/steps/3">
                                <input onClick={console.log("clicked")} className="btn btn-success" style={{fontSize: "20px", marginTop: "10px"}} type="submit" value="Next"/>
                            </Link>
                        </form>
                    </div>
*/
/*
<Screen>
    <div className="main">
        <h1 style={{marginLeft:"0px"}}>Step 2:</h1>
        <form className="form" onSubmit={formik.handleSubmit}>
            <label htmlFor="email" style={{fontSize: "20px"}}> 
                Email: 
                <input type="email" style={{marginLeft: "10px"}} id="email" name="email" ref={emailInput}  defaultValue={store.getState().updateData.email} onChange={formik.handleChange}/>
            </label>
            {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}

            <label htmlFor="phone" style={{fontSize: "20px"}}>
                Phone: 
                <input style={{marginLeft: "10px"}} type="text" id="phone" name="phone" ref={phoneInput} defaultValue={store.getState().updateData.phoneNumber} onChange={formik.handleChange}/>
            </label>
            {formik.errors.phone ? <div className="error" id="bottom">{formik.errors.phone}</div> : null}
            <br/>
            <Link to="/steps/1">
                <input onClick={handleUpdatingData} className="btn btn-success" style={{fontSize: "20px", marginTop: "10px", backgroundColor:"gray", marginRight:"10px"}} type="submit" value="Back"/>
            </Link>
            <Link to="/steps/3">
                <input onClick={isSubmittable ? handleUpdatingData : null } className="btn btn-success" style={{fontSize: "20px", marginTop: "10px"}} type="submit" value="Next"/>
            </Link>
        </form>
    </div>
    <Link to="/">
        <button className="btn btn-primary" style={{marginTop:'25px', fontSize: '20px'}}>Back to start</button>
    </Link>
</Screen>
*/

// console.log(store.getState());
  
    // const emailInput = React.createRef();
    // const phoneInput = React.createRef();

    // const handleUpdatingData = () => {
    //     console.log("handleUpdatingData() called")

    //     var input1 = emailInput.current.value;
    //     var input2 = phoneInput.current.value;

    //     store.dispatch(updateEmail(input1));
    //     store.dispatch(updatePhone(input2));
    // }

    
        //console.log('Form values', formik.values);

    // const isSubmittable = () => {
    //     // if errors don't exist, submit
    //     if(!formik.errors.email && !formik.errors.phone){
    //         return true;
    //     }
    //     return false;
    // }

    /*
const handleUpdatingData = () => {
            console.log("handleUpdatingData() called")

            store.dispatch(updateEmail('input1'));
            store.dispatch(updatePhone('input2'));
        }

        const formikProps = {
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
            }};



    */