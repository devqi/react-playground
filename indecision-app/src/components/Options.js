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
        <p>
            { 
                props.options.length > 0
                ? "Here are your " + props.options.length + " options: "
                : "Please add an option to get started !"
            }
        </p>
        
        <ol>
            {                        
                props.options.map(option => 
                    <Option
                        key={md5.hex_md5(option + '')}
                        option={option}
                        handleRemoveAnOption={props.handleRemoveAnOption}/>
                )
            }
        </ol>
    </div>
);

export default Options;