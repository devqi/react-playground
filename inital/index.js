"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.state = {
            count: 0,
            options: ["one", "two"]
        };

        _this.handleAddOne = _this.handleAddOne.bind(_this);
        _this.handleMinusOne = _this.handleMinusOne.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);
        _this.onFormSubmit = _this.onFormSubmit.bind(_this);
        _this.removeAllOptions = _this.removeAllOptions.bind(_this);
        return _this;
    }

    _createClass(Counter, [{
        key: "handleAddOne",
        value: function handleAddOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1,
                    options: prevState.options
                };
            });
        }
    }, {
        key: "handleMinusOne",
        value: function handleMinusOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1,
                    options: prevState.options
                };
            });
        }
    }, {
        key: "handleReset",
        value: function handleReset() {
            this.setState(function (prevState) {
                return {
                    count: 0,
                    options: prevState.options
                };
            });
        }
    }, {
        key: "onFormSubmit",
        value: function onFormSubmit(e) {
            e.preventDefault();

            // standard js: get the value of the elements with the name "option"
            var optionVal = e.target.elements.option.value;

            if (optionVal) {
                this.setState(function (prevState) {
                    var options = prevState.options.push(optionVal);
                    return {
                        count: options.length,
                        options: options
                    };
                });
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: "removeAllOptions",
        value: function removeAllOptions() {
            this.setState({
                count: 0,
                options: []
            });
        }
    }, {
        key: "render",
        value: function render() {
            var options = this.state.options;
            var count = this.state.count;
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Put your life under control"
                ),
                React.createElement(
                    "p",
                    null,
                    options.length > 0 ? "Here are your " + options.length + " options: " : "No options !"
                ),
                React.createElement(
                    "ol",
                    null,
                    options.map(function (option) {
                        return React.createElement(
                            "li",
                            null,
                            option
                        );
                    })
                ),
                React.createElement(
                    "h1",
                    null,
                    "Count: ",
                    count
                ),
                React.createElement(
                    "button",
                    { id: "addOne", className: "button", onClick: this.handleAddOne },
                    "+1"
                ),
                React.createElement(
                    "button",
                    { id: "minusOne", className: "button", onClick: this.handleMinusOne },
                    "-1"
                ),
                React.createElement(
                    "button",
                    { id: "reset", className: "button", onClick: this.handleReset },
                    "reset"
                ),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "button",
                    { onClick: this.removeAllOptions },
                    "Remove all"
                ),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "form",
                    { onSubmit: this.onFormSubmit },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
