import React from 'react'
import './Header.css'

const Header = (props) => {
    return (
        <header className="header container-fluid">
            <h1 className="mt-3 ml-3">
                <i className={`fa fa-${props.icon}`}></i> {props.title}
            </h1>
            <p className="lead">{props.subtitle}</p>
        </header>
    );
}

export default Header