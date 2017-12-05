"use strict";

var count = 0;

var addOne = function addOne() {
    count++;
    renderCounter();
};

var renderCounter = function renderCounter() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "successfully tested JSX"
        ),
        React.createElement(
            "p",
            null,
            "Some info ..."
        ),
        React.createElement(
            "ol",
            null,
            React.createElement(
                "li",
                null,
                "item one"
            ),
            React.createElement(
                "li",
                null,
                "item two"
            ),
            React.createElement(
                "li",
                null,
                "item three"
            )
        ),
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { id: "my-button", className: "button", onClick: addOne },
            "+1"
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

renderCounter();
