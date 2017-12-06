let count = 0;

const addOne = () => {
    count++;
    renderCounter();
};

const app = {
    options: ["one", "two"]
};

const onFormSubmit = (e) => {
    e.preventDefault();

    // standard js: get the value of the elements with the name "option"
    const optionVal = e.target.elements.option.value;

    if(optionVal){
        app.options.push(optionVal);
        e.target.elements.option.value = '';
        renderCounter();
    }
};

const removeAllOptions = () => {
    app.options = [];
    renderCounter();
};

const onMakeDecision = () => {

};

const renderCounter = () => {
    const template = (
        <div>
            <h1>Put your life under control</h1>
            <p>{app.options.length > 0 ? "Here are your " + app.options.length + " options: " : "No options !"}</p>
            <ol>
                {
                    app.options.map(option => <li>{option}</li>)
                }
            </ol>
            <h1>Count: {count}</h1>
            <button id="my-button" className="button" onClick={addOne}>+1</button>
            <br />
            <br />
            <button onClick={onMakeDecision}>What should I do?</button>
            <br />
            <br />
            <button onClick={removeAllOptions}>Remove all</button>
            <br />
            <br />
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button> 
            </form>
            
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
};

renderCounter();

