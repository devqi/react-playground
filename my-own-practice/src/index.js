import React from 'react';
import ReactDom from 'react-dom';

const user = {
	'firstname': 'Qi',
	'lastname': 'Zhang'
};

function formatUser(user) {
	return user.lastname + ', ' + user.firstname;
}

class Greeting extends React.Component {
	render(){
		if(this.props.user) {
			return (
				<div>
			        <h1>Hello {formatUser(this.props.user)} !</h1> 
			        <h2 > It is { this.props.date.toLocaleTimeString() }. </h2> 
		        </div>
	        );
		}
		else {
			return (
				<div>
			        <h1>Hello stranger !</h1> 
			        <h2 > It is { new Date().toLocaleTimeString() }. </h2> 
		        </div>
	        );
		}
	}
}

function Clock(props) {
	return (
		<div>
	        <h1>Hello {formatUser(props.user)} !</h1> 
	        <h2 > It is { props.date.toLocaleTimeString() }. </h2> 
        </div>
    );
}

function tick() {
    ReactDom.render(
        <Greeting user={user} date={new Date()} />,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);