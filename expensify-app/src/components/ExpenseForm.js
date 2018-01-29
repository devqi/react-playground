import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount.toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFoused: false,
            error: ''
        };
    }    

    onDescriptionChange = (e) => {
        /**
         * snippet#1: bind input with state.description
         */
        // this.setState({ description: e.target.value });

        /**
         * snippet#2: bind input with state.description
         */
        // e.persist(); this.setState( () => ({ description: e.target.value}));

        /**
         * snippet#3: bind input with state.description
         */
        const description = e.target.value;
        this.setState(() => ({description}));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        // constrain the input for amount to be a number rounded to two decimal places
        const regex = /^\d*(\.\d{0,2})?$/;
        if (!amount || amount.match(regex)) {
            this.setState(() => ({amount}));
        }
    };

    onDateChange = ( createdAt ) => {
        if(createdAt) {
            this.setState( () => ({createdAt}) );            
        }
    };

    onFocusChange = ( { focused } ) => {
        this.setState( () => ({ calendarFoused: focused }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount) {
            const errorMsg = 'Please provide description and amount.';
            this.setState( () => ({ error: errorMsg}) );
        }
        else {
            this.setState( () => ({ error: '' }) );
            this.props.onSubmit( {
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            } );
        }
    };

    render() {
        console.log(this.state.description);
        return (
            <div>
                <p>{this.state.error}</p>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description..."
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}/>
                    <input
                        type="number"
                        placeholder="Amount..."
                        value={this.state.amount}
                        onChange={this.onAmountChange}/>
                    <SingleDatePicker 
                        date={this.state.createdAt} 
                        onDateChange={this.onDateChange} 
                        focused={this.state.calendarFoused} 
                        onFocusChange={this.onFocusChange} 
                        numberOfMonths={1} // set how many months dispalyed at one time
                        isOutsideRange={ () => false } // set old dates available
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional) ..."
                        value={this.state.note}
                        onChange={this.onNoteChange}/>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}