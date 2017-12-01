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
		this.state = {
			date: new Date(),
			isToggleOn: true
		};

		/**
		 * Must be careful about the meaning of this in JSX callbacks. 
		 * In JavaScript, class methods are not bound by default. 
		 * If you forget to bind this.handleClick and pass it to onClick,
		 *  this will be undefined when the function is actually called.
		 * 
		 * This is not React-specific behavior;
		 *  it is a part of "how functions work in JavaScript". 
		 * Generally, if you refer to a method without () after it, 
		 * such as onClick={this.handleClick}, you should bind that method.
		 * https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/
		 */
		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
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

	handleClick() {
		this.setState( prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
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
					<button onClick={this.handleClick}>
						{this.state.isToggleOn ? "On" : "Off"}
					</button>
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

/**
 * It works because in JavaScript, 
 * true && expression always evaluates to expression, 
 * and false && expression always evaluates to false.
 */
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
  }
  
const messages = ['React', 'Re: React', 'Re:Re: React'];

function WarningBanner(props) {
	if (!props.warn) {
	  return null;
	}
  
	return (
	  <div className="warning">
		Warning!
	  </div>
	);
  }
  
  class Page extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {showWarning: true}
	  this.handleToggleClick = this.handleToggleClick.bind(this);
	}
  
	handleToggleClick() {
	  this.setState(prevState => ({
		showWarning: !prevState.showWarning
	  }));
	}
  
	render() {
	  return (
		<div>
		  <WarningBanner warn={this.state.showWarning} />
		  <button onClick={this.handleToggleClick}>
			{this.state.showWarning ? 'Hide' : 'Show'}
		  </button>
		</div>
	  );
	}
  }
  
function App() {
	  return (
		  <div>
			  <Greeting />
			  <Mailbox unreadMessages={messages} />
			  <Page />
		  </div>
	  );
  }

ReactDom.render(
	<App />,
	document.getElementById('root')
);