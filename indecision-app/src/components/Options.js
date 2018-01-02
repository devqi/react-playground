import React from 'react';
import Option from './Option';
import md5 from 'react-native-md5';

export default class Options extends React.Component {
    render() {
        let options = this.props.options;

        return (
            <div>
                <ol>
                    {                        
                        options.map(option => 
                            <Option
                                key={md5.hex_md5(option + '')}
                                option={option}
                                handleRemoveAnOption={this.props.handleRemoveAnOption}/>
                        )
                    }
                </ol>
            </div>
        );
    }
}
