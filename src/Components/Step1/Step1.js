import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Screen from '../Screen/Screen';
import './Step1.css';

class Step1 extends React.Component {
    render() { 
        // Step 1: Enter firstName, lastName
        const html = (
            <div className="main">
                <h1 style={{marginLeft:"0px"}}>Step 1:</h1>
                <form className="form">
                    <label style={{fontSize: "20px"}}>
                        First name: 
                        <input style={{marginLeft: "10px"}} type="text" name="firstName"/>
                    </label>
                    <label style={{fontSize: "20px"}}>
                        Last name: 
                        <input style={{marginLeft: "10px"}} type="text" name="lastName"/>
                    </label>
                    <br/>
                    <Link to="/steps/2">
                        <input className="btn btn-success" style={{fontSize: "20px", marginTop: "10px"}} type="submit" value="Next"/>
                    </Link>
                </form>
            </div>
        );
        return (
            <div>
                <Screen display={html}/>
            </div>
        );
    }
}
 
export default Step1;