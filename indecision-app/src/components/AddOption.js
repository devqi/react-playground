import React from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: undefined
        };

        this.handleAddAnOption = this
            .handleAddAnOption
            .bind(this);

    }

    handleAddAnOption(e) {
        e.preventDefault();

        // get the content of <input>
        const option = e.target.elements.option.value.trim();
        // pass 'option' to the function in IndecisionApp.js
        const error = this.props.handleAddAnOption(option);

        this.setState(() => ({ error }));
        
        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddAnOption}>
                    <input type="text" name="option"/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}