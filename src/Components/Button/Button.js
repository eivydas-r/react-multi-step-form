import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Button({ label, backgroundColor = 'red', size = 'md', borderRadius = '0px', handleClick }) {
    let scale = 1;
    if(size === "sm") scale = 0.75;
    if(size === "lg") scale = 1.5;

    const style = {
        backgroundColor,
        border: "none",
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        borderRadius,
    }
    
    return (
        <input onClick={ handleClick } className="btn btn-success" style={style} type="submit" value={label}/>
    );
}

Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(["sm","md","lg"]),
    borderRadius: PropTypes.string,
    handleClick: PropTypes.func
}

export default Button;