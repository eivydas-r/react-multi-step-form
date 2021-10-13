import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Screen from '../Screen/Screen';
import './Step1.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/exportActions'
import { store } from '../../state/store';

function Step1(props) {
    console.log(store.getState());
  
    const dispatch = useDispatch();
    const { updateFirstName, updateLastName } = bindActionCreators(actionCreators, dispatch);

    const firstNameInput = React.createRef();
    const lastNameInput = React.createRef();

    const handleInput = () => {
        var input1 = firstNameInput.current.value;
        var input2 = lastNameInput.current.value;

        updateFirstName(input1);
        updateLastName(input2);
        //store.dispatch({ type: "UPDATE_FIRST"}, 'jim')
    }

    return (
        // Step 1: Enter firstName, lastName
        <Screen>
            <div className="main">
                <h1 style={{marginLeft:"0px"}}>Step 1:</h1>
                <form className="form">
                    <label style={{fontSize: "20px"}}>
                        First name: 
                        <input style={{marginLeft: "10px"}} type="text" name="firstName" ref={firstNameInput} defaultValue={store.getState().updateData.firstName}/>
                    </label>
                    <label style={{fontSize: "20px"}}>
                        Last name: 
                        <input style={{marginLeft: "10px"}} type="text" name="lastName" ref={lastNameInput} defaultValue={store.getState().updateData.lastName}/>
                    </label>
                    <br/>
                    <Link to="/steps/2">
                        <input onClick={handleInput} className="btn btn-success" style={{fontSize: "20px", marginTop: "10px"}} type="submit" value="Next"/>
                    </Link>
                </form>
            </div>
        </Screen>
    );
}
export default Step1;
