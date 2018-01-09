import React from 'react';
// import ReactDOM from 'react-dom';
import OptionModal from './OptionModal';
import Header from './Header';
import Actions from './Actions';
import Options from './Options';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [
                'first', 
                'erueroueijflkcxkjxiufoiewuerueroueijflkcxkjxiufoiewuerueroueijflkcxkjxiufoiewuer' +
                        'ueroueijflkcxkjxiufoiewuerueroueijflkcxkjxiufoiewuerueroueijflkcxkjxiufoiewuerue' +
                        'roueijflkcxkjxiufoiewuerueroueijflkcxkjxiufoiewuerueroueijflkcxkjxiufoiewueruero' +
                        'ueijflkcxkjxiufoiewuerueroueijflkcxkjxiufoiewuerueroueijflkcxkjxiufoiewuerueroue' +
                        'ijflkcxkjxiufoiewu'
            ],
            selectedOption: undefined
        };

        this.handleChooseAnOption = this
            .handleChooseAnOption
            .bind(this);
        this.handleRemoveAllOptions = this
            .handleRemoveAllOptions
            .bind(this);
        this.handleRemoveAnOption = this
            .handleRemoveAnOption
            .bind(this);
        // this.handleAddAnOption = this.handleAddAnOption.bind(this);
        this.handleClearSelectedOption = this
            .handleClearSelectedOption
            .bind(this);
    }

    handleChooseAnOption() {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        this.setState({selectedOption: option});
    }

    handleRemoveAllOptions() {
        this.setState({options: []});
    }

    handleRemoveAnOption(optionToRemove) {
        this.setState(prevState => ({
            options: prevState
                .options
                .filter(option => optionToRemove !== option)
        }));
    }

    handleAddAnOption = (option) => {

        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState(prevState => ({
            options: prevState
                .options
                .concat(option)
        }));
    }

    handleClearSelectedOption() {
        this.setState({selectedOption: undefined});
    }

    render() {
        const options = this.state.options;

        return (
            <div>
                <Header/>
                <div className='container'>
                    <Actions options={options} handleChooseAnOption={this.handleChooseAnOption}/>
                    <div className='widget'>
                        <Options
                            options={options}
                            handleRemoveAnOption={this.handleRemoveAnOption}
                            handleRemoveAllOptions={this.handleRemoveAllOptions}/>
                        <AddOption options={options} handleAddAnOption={this.handleAddAnOption}/>
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}/>
            </div>
        );
    }
}