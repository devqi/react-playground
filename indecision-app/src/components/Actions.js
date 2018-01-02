import React from 'react';

export default class OperateOption extends React.Component {

    render() {
        const btnsWhenHasOptions = <div className='operation_buttons'>
            <button className='choose_an_option' onClick={this.props.handleChooseAnOption}>What should I do?</button>
            <button className='remove_all_options' onClick={this.props.handleRemoveAllOptions}>Remove all</button>
        </div>;

        return (
            this.props.options.length > 0 ? btnsWhenHasOptions : ''
        );
    }
}