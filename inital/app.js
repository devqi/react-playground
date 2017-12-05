let count = 0;

const addOne = () => {
    count++;
    renderCounter();
}

const renderCounter = () => {
    const template = (
        <div>
            <h1>successfully tested JSX</h1>
            <p>Some info ...
            </p>
            <ol>
                <li>item one</li>
                <li>item two</li>
                <li>item three</li>
            </ol>
            <h1>Count: {count}</h1>
            <button id="my-button" className="button" onClick={addOne}>+1</button>
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
};

renderCounter();