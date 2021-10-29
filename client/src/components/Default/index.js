import React from "react";
import logo from './logo.svg';
//const { app } = window.require('electron').remote;

function Default() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>React + Electron = <span role="img" aria-label="love">😍</span></h2>
            </div>
            <p className="App-intro">
                <b> Release 0.2.7 </b>
            </p>
        </div>
    )
}

export default Default