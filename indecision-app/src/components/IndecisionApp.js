import React from 'react';
import ReactDOM from 'react-dom';
// import OptionModal from './OptionModal'
import Header from './Header';
import Actions from './Actions';
import Options from './Options';
import AddOption from './AddOption';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            options: ['first']
        };

        this.handleChooseAnOption = this
            .handleChooseAnOption
            .bind(this);
        this.handleRemoveAllOptions = this
            .handleRemoveAllOptions
            .bind(this);
        this.handleRemoveAnOption = this.handleRemoveAnOption.bind(this);
        this.handleAddAnOption = this.handleAddAnOption.bind(this);
    }

    handleChooseAnOption() {}

    handleRemoveAllOptions() {
        this.setState({options: []});
    }

    handleRemoveAnOption() {}

    handleAddAnOption(option) {
        
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState(prevState => ({
            options: prevState.options.concat(option)
        }));
    }

    render() {
        const options = this.state.options;

        return (
            <div>
                <Header/>
                <Actions
                    options={options}
                    handleChooseAnOption={this.handleChooseAnOption}
                    handleRemoveAllOptions={this.handleRemoveAllOptions}/>
                <Options options={options} handleRemoveAnOption={this.handleRemoveAnOption}/>
                <AddOption options={options} handleAddAnOption={this.handleAddAnOption}/>
            </div>
        );
    }
}

ReactDOM.render(
    <IndecisionApp/>, document.getElementById('root'));