'use strict';

var template = React.createElement(
  'h1',
  null,
  'This is a successfully tested JSX from app.js !'
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
