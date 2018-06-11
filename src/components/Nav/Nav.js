import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    
    render() {
        return (
            <div className="navbar">
            <h1 className="header">Weather</h1>
                <div className="zipcode-container">
                    <input className="form-control" placeholder="St. George, Utah" type="text" value=""/>
                    <button type="button" className="btn btn-success" >Get Weather</button>
                </div>
            </div>
        )
    }
}

export default Nav;