var template = (
    <div>
        <h1>successfully tested JSX</h1>
        <p>Some info ... </p>
        <ol>
            <li>item one</li>
            <li>item two</li>
            <li>item three</li>
        </ol>
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
