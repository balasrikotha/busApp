import React, { Component } from 'react';

export class InputField extends Component {
    constructor(props) {
        super(props);
    
    }
    render(){
        return (
            <input type={this.props.iType} placeholder={this.props.hint} />
        );
    }

}
export class Button extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <input type='Submit' value={this.props.buttonText} onClick={this.props.click}/> 
        );
    }
}

