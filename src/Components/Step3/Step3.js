import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Screen from '../Screen/Screen';
import './Step3.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/exportActions'
import App from '../../App';

function Step3(props) {
    const state = useSelector((state) => state.step1);
    console.log("state");
    console.log(state);
  
    const dispatch = useDispatch();
    const { updateFirstName, updateLastName } = bindActionCreators(actionCreators, dispatch);

    const handleInput = () => {
        updateFirstName('Jones'); // redux
        var input = this.firstName.current.value;
        var input2 = this.lastName.current.value;
        console.log(input);
        this.setState((prevState) => ({
             firstName: input,
             lastName: input2
        }));
    }

    return (
        // Step 3: Enter username, password
        <Screen>
                <div className="main">
                    <h1 style={{marginLeft:"0px"}}>Step 3:</h1>
                    <form className="form">
                        <label style={{fontSize: "20px"}}>
                            Username: 
                            <input style={{marginLeft: "10px"}} type="text" name="firstName"/>
                        </label>
                        <label style={{fontSize: "20px"}}>
                            Password: 
                            <input style={{marginLeft: "10px"}} type="text" name="lastName"/>
                        </label>
                        <br/>
                        <Link to="/steps/2">
                            <input className="btn btn-success" style={{fontSize: "20px", marginTop: "10px", backgroundColor:"gray", marginRight:"10px"}} type="submit" value="Back"/>
                        </Link>
                        <Link to="/steps/3">
                            <input className="btn btn-success" style={{fontSize: "20px", marginTop: "10px"}} type="submit" value="Next"/>
                        </Link>
                    </form>
                </div>
            </Screen>
    );
}
export default Step3;
