'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Conditionally adds CSS class name(s) to document.body. For example:
 *
 *   <Body className="dark" if={this.context.theme.isDark} />
 */
var Body = function (_React$Component) {
  (0, _inherits3.default)(Body, _React$Component);

  function Body() {
    (0, _classCallCheck3.default)(this, Body);
    return (0, _possibleConstructorReturn3.default)(this, (Body.__proto__ || (0, _getPrototypeOf2.default)(Body)).apply(this, arguments));
  }

  (0, _createClass3.default)(Body, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.if) {
        document.body.classList.add(this.props.className);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.if !== nextProps.if || this.props.className !== nextProps;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      document.body.classList[this.props.if ? 'add' : 'remove'](this.props.className);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.classList.remove(this.props.className);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.if ? _react2.default.createElement('script', {
        dangerouslySetInnerHTML: {
          __html: 'document.body.classList.add(\'' + this.props.className + '\');'
        }
      }) : null;
    }
  }]);
  return Body;
}(_react2.default.Component); /**
                               * Copyright © 2016-present Konstantin Tarkus <hello@tarkus.me>
                               */

Body.defaultProps = {
  if: true
};
Body.propTypes = {
  className: _react.PropTypes.string.isRequired,
  if: _react.PropTypes.bool.isRequired
};
exports.default = Body;
