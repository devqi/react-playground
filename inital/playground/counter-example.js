class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            options: ["one", "two"]
        };

        this.handleAddOne = this
            .handleAddOne
            .bind(this);
        this.handleMinusOne = this
            .handleMinusOne
            .bind(this);
        this.handleReset = this
            .handleReset
            .bind(this);
        this.onFormSubmit = this
            .onFormSubmit
            .bind(this);
        this.removeAllOptions = this
            .removeAllOptions
            .bind(this);
    }

    handleAddOne() {
        this.setState( prevState => {
            return ({
                count: prevState.count + 1,
                options: prevState.options
            });
        });       
    }

    handleMinusOne() {
        this.setState( prevState => {
            return ({
                count: prevState.count - 1,
                options: prevState.options
            });
        });
    }

    handleReset() {
        this.setState( prevState => {
            return ({
                count: 0,
                options: prevState.options
            });
        });
    }

    onFormSubmit(e) {
        e.preventDefault();

        // standard js: get the value of the elements with the name "option"
        const optionVal = e.target.elements.option.value;

        if (optionVal) {
            this.setState(prevState => {
                const options = prevState.options.push(optionVal);
                return ({
                    count: options.length, 
                    options: options
                });
            });
            e.target.elements.option.value = '';
        }
    }

    removeAllOptions() {
        this.setState({
            count: 0, 
            options: []
        });
    }

    render() {
        const options = this.state.options;
        const count = this.state.count;
        return (
            <div>
                <h1>Put your life under control</h1>
                <p>{options.length > 0
                        ? "Here are your " + options.length + " options: "
                        : "No options !"}</p>
                <ol>
                    {
                        options.map(option => <li>{option}</li>)
                    }
                </ol>
                <h1>Count: {count}</h1>
                <button id="addOne" className="button" onClick={this.handleAddOne}>+1</button>
                <button id="minusOne" className="button" onClick={this.handleMinusOne}>-1</button>
                <button id="reset" className="button" onClick={this.handleReset}>reset</button>
                <br/>
                <br/>
                <br/>
                <br/>
                <button onClick={this.removeAllOptions}>Remove all</button>
                <br/>
                <br/>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>

            </div>
        );

    }
}

ReactDOM.render(
    <Counter/>, document.getElementById('app'));
