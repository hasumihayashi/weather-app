import React from 'react';
import './ZipCode.css';
import PropTypes from 'prop-types';
import ReactRouter from 'react-router-dom';

class ZipCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zipcode: ''
        };
        this.handleUpdateZipcode = this.handleUpdateZipcode.bind(this);
        this.handleSubmitZipcode = this.handleSubmitZipcode.bind(this);
    }
    handleSubmitZipcode() {
        this.props.onSubmitZipcode(this.state.zipcode)
        this.setState(function (){
            return {
                zipcode: ''
            }
        });
    }
    handleUpdateZipcode(e) {
        var zip = e.target.value;
        this.setState(function () {
            return {
                zipcode: zip
            }
        });
    }
    render() {
        return (
            <div className="zipcode-container" style={{flexDirection: this.props.direction}}>
            <h1 className="header">Enter a City and State</h1>
                <div className="zipcode-container">
                    <input 
                        className="form-control"  
                        placeholder="St. George, Utah" 
                        type="text" 
                        value={this.state.zipcode}
                        onChange={this.handleUpdateZipcode} 
                    />
                    <button 
                        type="button" 
                        className="btn btn-success" 
                        onClick={this.handleSubmitZipcode}>
                        Get Weather
                    </button>
                </div>
            </div>
        )
    }
}

ZipCode.defaultProps = {
    direction: 'column'
}

ZipCode.PropTypes = {
    direction: PropTypes.string
}

export default ZipCode;