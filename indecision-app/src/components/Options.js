import React from 'react';
import Option from './Option';
import md5 from 'react-native-md5';

// export default class Options extends React.Component {
//     render() {
//         let options = this.props.options;

//         return (
//             <div>
//                 <ol>
//                     {                        
//                         options.map(option => 
//                             <Option
//                                 key={md5.hex_md5(option + '')}
//                                 option={option}
//                                 handleRemoveAnOption={this.props.handleRemoveAnOption}/>
//                         )
//                     }
//                 </ol>
//             </div>
//         );
//     }
// }

const Options = (props) => (
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>
            <button className='remove_all_options button button--link' onClick={props.handleRemoveAllOptions}>Remove all</button>
        </div>
        
        { 
            !(props.options.length > 0) && <p className='widget__message'>Please add an option to get started !</p>
        }
        
        
        <ul className='options'>
            {                        
                props.options.map((option, index) => 
                    <Option
                        key={md5.hex_md5(option + '')}
                        option={option}
                        optionIndex = {index + 1}
                        handleRemoveAnOption={props.handleRemoveAnOption}/>
                )
            }
        </ul>
    </div>
);

export default Options;