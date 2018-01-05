import React from 'react';

// export default class Option extends React.Component {
    
//     render() {
//         return (
//             <li>
//                 {this.props.option}
//                 <button onClick={e => this.props.handleRemoveAnOption(this.props.option) } >remove</button>
//             </li>
//         );
//     }
// }

const Option = (props) => (
    <li className='option'>
        <p className='option__text'>{props.optionIndex}.  {props.option}</p>
        <button className='button--link' onClick={e => props.handleRemoveAnOption(props.option) } >remove</button>
    </li>
);

export default Option;