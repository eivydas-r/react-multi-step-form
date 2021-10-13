import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Screen from '../Screen/Screen';
import './Step3.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/exportActions'
import { store } from '../../state/store';

function Step3(props) {
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
                            <input style={{marginLeft: "10px"}} type="text" name="lastName" ref={passwordInput} defaultValue={store.getState().updateData.password}/>
                        </label>
                        <br/>
                        <Link to="/steps/2">
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
export default Step3;
