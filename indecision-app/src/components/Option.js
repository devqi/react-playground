import React from 'react';


export default class Option extends React.Component {
    
    render() {
        return (
            <li>
                {this.props.option}
                <button onClick={e => this.props.handleRemoveAnOption(this.props.option) } >remove</button>
            </li>
        );
    }
}