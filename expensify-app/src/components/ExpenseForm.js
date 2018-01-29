import React from 'react';

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: ''
    };

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
        if(amount.match(regex)){
            this.setState( () => ({amount}) );            
        }
    };

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Description..."
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange} />
                    <input
                        type="number"
                        placeholder="Amount..." 
                        value={this.state.amount}
                        onChange={this.onAmountChange} />
                    <textarea
                        placeholder="Add a note for your expense (optional) ..."
                        value={this.state.note}
                        onChange={this.onNoteChange} />
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}