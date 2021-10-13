import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Screen from '../Screen/Screen';
import './Step2.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/exportActions'
import { store } from '../../state/store';

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

    return (
        // Step 2: Enter email, phone number
        <Screen>
                <div className="main">
                    <h1 style={{marginLeft:"0px"}}>Step 2:</h1>
                    <form className="form">
                        <label style={{fontSize: "20px"}}>
                            Email: 
                            <input style={{marginLeft: "10px"}} type="text" name="firstName" ref={emailInput} defaultValue={store.getState().updateData.email}/>
                        </label>
                        <label style={{fontSize: "20px"}}>
                            Phone: 
                            <input style={{marginLeft: "10px"}} type="text" name="lastName" ref={phoneInput} defaultValue={store.getState().updateData.phoneNumber}/>
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
            </Screen>
    );
}
export default Step2;
