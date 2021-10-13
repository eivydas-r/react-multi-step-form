import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Screen from '../Screen/Screen';
import './Step1.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/exportActions'
import App from '../../App';


class Step1 extends React.Component {
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.state = {
            firstName: '',
            lastName: ''
        }
    }

    handleInput = () => {
        var input = this.firstName.current.value;
        var input2 = this.lastName.current.value;
        console.log(input);
        this.setState((prevState) => ({
             firstName: input,
             lastName: input2
        }));
    }
    
   
    render() { 
        console.log(this.state);
        // Step 1: Enter firstName, lastName
        return (
            <Screen>
                <div className="main">
                    <h1 style={{marginLeft:"0px"}}>Step 1:</h1>
                    <form className="form">
                        <label style={{fontSize: "20px"}}>
                            First name: 
                            <input style={{marginLeft: "10px"}} type="text" name="firstName" ref={this.firstName} defaultValue={this.state.firstName}/>
                        </label>
                        <label style={{fontSize: "20px"}}>
                            Last name: 
                            <input style={{marginLeft: "10px"}} type="text" name="lastName" ref={this.lastName} defaultValue={this.state.lastName}/>
                        </label>
                        <br/>
                        <Link to="/steps/2">
                            <input onClick={this.handleInput} className="btn btn-success" style={{fontSize: "20px", marginTop: "10px"}} type="submit" value="Next"/>
                        </Link>
                    </form>
                </div>
            </Screen>
        );
    }
}
 
export default Step1;