import React from 'react';
import ReactDOM from 'react-dom';

const User = (props) => {
    return (
        <div>
            <p>Name: {props.Name} </p>
            <p>Age: {props.Age}</p>
        </div>
    );
};

User.defaultProps = {
    Name: "SomeUser",
    Age: 31
};

// ReactDOM.render(<User />, document.getElementById('root'));