import React, { Component } from 'react';
import { store } from '../../state/store';
import './LoginHeader.css';

class LoginHeader extends React.Component {
    render() { 
        return (
        <div className='header'>
            Logged in as: {this.props.userName}
        </div>);
    }
}
 


export default LoginHeader;
