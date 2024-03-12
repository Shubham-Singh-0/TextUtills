import React from 'react'

import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TextUtils</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">{props.aboutText}</a>

                            </li>
                        </ul>
                        
                        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode}type="checkbox"  id="flexSwitchCheckChecked" />
                            <label className="form-check-label" htmlfor="flexSwitchCheckChecked">Enable Dark Mode</label>
                        </div>


                    </div>

                </div>

            </nav >
        </>
    )
}

Navbar.PropTypes = {
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    aboutText: 'About Us'
}
