import React, { Component } from 'react';
import './Screen.css';

class Screen extends React.Component {
    render() { 
        return (
            <div className="screen-small">
                {this.props.display}
            </div>
        );
    }
}
 
export default Screen;