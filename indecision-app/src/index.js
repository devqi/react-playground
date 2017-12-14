import React from 'react';
import ReactDOM from 'react-dom';
const User = () => {
    return (
        <div>
            <p>Name: </p>
            <p>Age: </p>
        </div>
    );
};

ReactDOM.render(<User />, document.getElementById('root'));