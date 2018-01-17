// Higher Order Component (HOC) - A component (HOC) that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

/**
 * this is a high order component
 * @param {passed-in Component, therefore capitalized} WrappedComponent 
 */
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>The info is private. Please don't share.</p>}
            <WrappedComponent {...props} /> 
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin={false} info="There are the details." />, document.getElementById('root'));