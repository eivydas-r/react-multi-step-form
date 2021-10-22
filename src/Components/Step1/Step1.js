import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Screen from '../Screen/Screen';
import './Step1.css';
import { store } from '../../state/store';
import { updateFirstName, updateLastName } from '../../state/actions/actions';
import NavButton from '../NavButton/NavButton';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import TextField from '../TextField/TextField';

// Started using history for navigation
// Created custom button component for route navigation
// Reactored a couple components into class components
// In progress of refactoring formik into class components
// and implementing onto all forms

class Step1 extends React.Component {
    render(){
        const validate = Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('First name is required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Last name is required'),
        })
        return (
            <Screen>
                <div className="main">
                    <Formik
                        initialValues={{
                            firstName: store.getState().updateData.firstName,
                            lastName: store.getState().updateData.lastName,
                        }}
                        validationSchema={validate}
                        onSubmit={values => {
                            console.log('Values',values);
                            // update store data upon submission  
                            store.dispatch(updateFirstName(values.firstName));
                            store.dispatch(updateLastName(values.lastName));
                            console.log("Submitted to redux", store.getState().updateData)
                            
                            this.props.history.push('/steps/2');
                        }}
                    >
                        {formik => (
                            <div className="form-group row" style={{ marginTop: '-25px', justifyContent: 'space-around' }}>
                                <div className="col-xs-4">
                                    {/*console.log(formik.values)*/}
                                    <span class="circle" id="circle-selected"/>
                                    <span class="circle"/>
                                    <span class="circle"/>
                                    <h1 style={{marginLeft:"0px"}}>Step 1</h1>
                                    <Form>
                                        <TextField label="First name:" name="firstName" type="text"/>
                                        <TextField label="Last name:" name="lastName" type="text"/>
                                        <br/>
                                        <NavButton nav={'/'} disabled={false}>Cancel</NavButton>
                                        <button className={`btn btn-${formik.values.firstName.length !== 0 && Object.keys(formik.errors).length === 0 ? 'success' : 'dark'} mt-3 ml-2 btn-lg`} type="submit">Next</button>
                                        <button className="btn btn-danger mt-3 ml-2 btn-lg" type="reset">Reset</button>
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
export default Step1;


/*

    state = {
        firstName: '',
        lastName: '',
    }

    handleUpdatingData = (event) => {
        // store into local state, will be used for submit
        if(event.target.name === "firstName"){
            this.setState({firstName: event.target.value});
        } else if(event.target.name === "lastName"){
            this.setState({lastName: event.target.value});
        }
    }

    handleSubmit = () => {      
        // update store data upon submission  
        store.dispatch(updateFirstName(this.state.firstName));
        store.dispatch(updateLastName(this.state.lastName));

        console.log("Submit")
    }

    componentDidMount(){
        // updating state with store data
        this.setState({
            firstName: store.getState().updateData.firstName,
            lastName: store.getState().updateData.lastName
        });
    }

    render(){
        return (
            // Step 1: Enter firstName, lastName
            <Screen>
                <div className="main">
                    <h1 style={{marginLeft:"0px"}}>Step 1:</h1>
                    <form className="form">
                        <label style={{fontSize: "20px"}}>
                            First name: 
                            <input onChange={this.handleUpdatingData} style={{marginLeft: "10px"}} type="text" name="firstName" defaultValue={store.getState().updateData.firstName}/>
                        </label>
                        <label style={{fontSize: "20px"}}>
                            Last name: 
                            <input onChange={this.handleUpdatingData} style={{marginLeft: "10px"}} type="text" name="lastName" defaultValue={store.getState().updateData.lastName}/>
                        </label>
                        <br/>
                        
                        <NavButton submit={this.handleSubmit} nav={'/steps/2'} disabled={false}>Next</NavButton>
                    </form>
                </div>
                <Link to="/">
                    <button className="btn btn-primary" style={{marginTop:'25px', fontSize: '20px'}}>Back to start</button>
                </Link>
            </Screen>
        );
    }
}

*/