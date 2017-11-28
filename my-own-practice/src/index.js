import React from 'react';
import ReactDom from 'react-dom';

const user = {
	'firstname': 'Qi',
	'lastname': 'Zhang'
};

function formatUser(user) {
	return user.lastname + ', ' + user.firstname;
}

function greeting(user) {
	if(user) {
		return 'Hello ' + formatUser(user) + ' !';
	}
	else {
		return 'Hello Stranger !';
	}
}

ReactDom.render(
	<h1>{greeting()}</h1>,
	document.getElementById('root')
);

