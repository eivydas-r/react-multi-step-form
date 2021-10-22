import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateUsername } from '../../state/actions/actions';
import { store } from '../../state/store';
import LoginHeader from '../LoginHeader/LoginHeader';

class HomePage extends React.Component {
    state = {
        userName: ''
    }
    
    // update redux without hook
    handleUpdatingData = () => {
        console.log("handleUpdatingData() called")
        store.dispatch(updateUsername(''));
        this.setState({userName : ''})
        // re-renders component
    }

    render() { 
        var userName = store.getState().updateData.userName;
        var loggedIn = userName !== '' ? true : false;    

        return (
        <div>
            { loggedIn ? <LoginHeader userName={ userName }/> : null }
            { !loggedIn ? // if not logged in           
            <Link to="/steps/1"> 
                <button className="btn btn-success signupBtn">Sign up</button>
            </Link> :
            <Link to="/">
                <button onClick={this.handleUpdatingData} className="btn btn-success signupBtn">Sign out</button>
            </Link> }
        </div>);
    }
}
 
export default HomePage;