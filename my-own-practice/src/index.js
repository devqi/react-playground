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
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render(){
		if(this.state.user) {
			return (
				<div>
			        <h1>Hello {formatUser(this.state.user)} !</h1> 
			        <h2 > It is { this.state.date.toLocaleTimeString() }. </h2> 
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

ReactDom.render(
	<Greeting />,
	document.getElementById('root')
);