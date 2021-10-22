import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Screen from '../Screen/Screen';
import './Step3.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/exportActions'
import { store } from '../../state/store';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import TextField from '../TextField/TextField';
import NavButton from '../NavButton/NavButton';

// Refactored all formik forms into class components
// Implemented dynamic navigation button validation
// Added circles showing step progress

class Step3 extends React.Component {
    render(){
        const validate = Yup.object({
            userName: Yup.string()
                .max(15, 'Username must be a maximum of 15 characters')
                .min(5, 'Username must be at least 5 characters')
                .required('Username is required'),
            password: Yup.string()
                .min(4, 'Password must be at least 4 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm password is required')
        })
        return (
            <Screen>
                <div className="main">
                    <Formik
                        initialValues={{
                            userName: '',
                            password: '',
                            confirmPassword: '',
                        }}
                        validationSchema={validate}
                        onSubmit={values => {
                            console.log('Values',values);
                            this.props.history.push('/');
                        }}
                    >
                        {formik => (
                            <div className="form-group row" style={{ marginTop: '-25px', justifyContent: 'space-around' }}>
                                <div className="col-xs-4">
                                    {console.log('error',formik.values)}
                                    <span class="circle"/>
                                    <span class="circle"/>
                                    <span class="circle" id="circle-selected"/>
                                    <h1 style={{marginLeft:"0px"}}>Step 3:</h1>
                                    <Form>
                                        <TextField label="Username:" name="userName" type="userName"/>
                                        <TextField label="Password:" name="password" type="password"/>
                                        <TextField label="Confirm password:" name="confirmPassword" type="password"/>
                                        <br/>
                                        <NavButton nav={'/steps/2'} disabled={false}>Previous</NavButton>
                                        <button className={`btn btn-${formik.values.userName.length !== 0 && Object.keys(formik.errors).length === 0 ? 'success' : 'dark'} mt-4 ml-2 btn-lg`} type="submit">Next</button>
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
export default Step3;


/*function Step3(props) {
    console.log(store.getState());
  
    const dispatch = useDispatch();
    const { updateUsername, updatePassword } = bindActionCreators(actionCreators, dispatch);

    const usernameInput = React.createRef();
    const passwordInput = React.createRef();

    const handleInput = () => {
        var input1 = usernameInput.current.value;
        var input2 = passwordInput.current.value;

        updateUsername(input1);
        updatePassword(input2);
    }

    return (
        // Step 3: Enter username, password
        <Screen>
                <div className="main">
                    <h1 style={{marginLeft:"0px"}}>Step 3:</h1>
                    <form className="form">
                        <label style={{fontSize: "20px"}}>
                            Username: 
                            <input style={{marginLeft: "10px"}} type="text" name="firstName" ref={usernameInput} defaultValue={store.getState().updateData.userName}/>
                        </label>
                        <label style={{fontSize: "20px"}}>
                            Password: 
                            <input style={{marginLeft: "10px"}} type="password" name="lastName" ref={passwordInput} defaultValue={store.getState().updateData.password}/>
                        </label>
                        <br/>
                        <Link to="/steps/2">
                            <input onClick={handleInput} className="btn btn-success" style={{fontSize: "20px", marginTop: "10px", backgroundColor:"gray", marginRight:"10px"}} type="submit" value="Back"/>
                        </Link>
                        <Link to="/">
                            <input onClick={handleInput} className="btn btn-success" style={{fontSize: "20px", marginTop: "10px"}} type="submit" value="Submit"/>
                        </Link>
                    </form>
                </div>
                <Link to="/">
                    <button className="btn btn-primary" style={{marginTop:'25px', fontSize: '20px'}}>Back to start</button>
                </Link>
            </Screen>
    );
}
export default Step3;*/
