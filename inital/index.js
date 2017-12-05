'use strict';

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'successfully tested JSX'
    ),
    React.createElement(
        'p',
        null,
        'Some info ... '
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item one'
        ),
        React.createElement(
            'li',
            null,
            'item two'
        ),
        React.createElement(
            'li',
            null,
            'item three'
        )
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
