import React from 'react';
import ReactDOM from 'react-dom';

const scaleNames = {
    c: "Celsisus",
    f: "Fahrenheit"
};

function BoilingVerdict(props) {
    // if(props.celsius !== '') { }
    if (props.celsius >= 100) {
        return (
            <p>The water is boiled.</p>
        );
    } else {
        return (
            <p>The water is not boiled.</p>
        );
    }
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this
            .handleChange
            .bind(this);
    }

    handleChange(e) {
        // this.setState({temperature: e.target.value});
        this
            .props
            .onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <div>
                <legend>{scaleNames[this.props.scale]}:</legend>
                <input value={temperature} onChange={this.handleChange}/>
                <br/>

            </div>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c'
        };

        this.handleCelsiusChange = this
            .handleCelsiusChange
            .bind(this);
        this.handleFahrenheitChange = this
            .handleFahrenheitChange
            .bind(this);
    }

    handleCelsiusChange(temperature) {
        this.setState({temperature: temperature, scale: 'c'});
    }

    handleFahrenheitChange(temperature) {
        this.setState({temperature: temperature, scale: 'f'});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = (scale === 'f')
            ? converter(temperature, F2C)
            : temperature;
        const fahrenheit = (scale === 'c')
            ? converter(temperature, C2F)
            : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}/>

                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </div>
        );
    }
}

/**
 * convert from Celsius to Fahrenheit
 * @param {*} celsius
 */
function C2F(celsius) {
    return (celsius * 9 / 5) + 32;
}

/**
 * convert from Fahrenheit to Celsius
 * @param {*} fahrenheit
 */
function F2C(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

/**
 *
 * @param {*} temperature
 * @param {*} convertType: a converter function - C2F or F2C
 */
function converter(temperature, convertType) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }

    const output = convertType(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();

}

ReactDOM.render(
    <Calculator/>, document.getElementById('root'));