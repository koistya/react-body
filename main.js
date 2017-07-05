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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Conditionally adds CSS class name(s) to document.body. For example:
 *
 *   <Body className="dark" if={this.context.theme.isDark} />
 */
/**
 * Copyright © 2016-present Konstantin Tarkus <hello@tarkus.me>
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
        this.props.className.split(' ').forEach(function (c) {
          document.body.classList.add(c);
        });
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
      var _this2 = this;

      this.props.className.split(' ').forEach(function (c) {
        document.body.classList[_this2.props.if ? 'add' : 'remove'](c);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.className.split(' ').forEach(function (c) {
        document.body.classList.remove(c);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.if ? _react2.default.createElement('script', {
        dangerouslySetInnerHTML: {
          __html: this.props.className.split(' ').map(function (c) {
            return 'document.body.classList.add(' + c + ');';
          }).join(' ')
        }
      }) : null;
    }
  }]);
  return Body;
}(_react2.default.Component);

Body.defaultProps = {
  if: true
};
Body.propTypes = {
  className: _propTypes2.default.string.isRequired,
  if: _propTypes2.default.bool.isRequired
};
exports.default = Body;
