"use strict";

var count = 0;

var addOne = function addOne() {
    count++;
    renderCounter();
};

var app = {
    options: ["one", "two"]
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    // standard js: get the value of the elements with the name "option"
    var optionVal = e.target.elements.option.value;

    if (optionVal) {
        app.options.push(optionVal);
        e.target.elements.option.value = '';
        renderCounter();
    }
};

var removeAllOptions = function removeAllOptions() {
    app.options = [];
    renderCounter();
};

var onMakeDecision = function onMakeDecision() {};

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
            app.options.length > 0 ? "Here are your " + app.options.length + " options: " : "No options !"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    null,
                    option
                );
            })
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
        ),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
            "button",
            { onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
            "button",
            { onClick: removeAllOptions },
            "Remove all"
        ),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

renderCounter();
