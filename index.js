"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./index.css");

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var keyboardContext = (0, _react.createContext)();

var MobileKeyboard =
/*#__PURE__*/
function (_Component) {
  _inherits(MobileKeyboard, _Component);

  function MobileKeyboard(props) {
    var _this;

    _classCallCheck(this, MobileKeyboard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MobileKeyboard).call(this, props));
    var _this$props = _this.props,
        _this$props$value = _this$props.value,
        value = _this$props$value === void 0 ? '' : _this$props$value,
        theme = _this$props.theme;
    _this.theme = _this.getTheme(theme);
    _this.state = {
      caps: false,
      sym: false,
      value: value,
      init: true,
      isMobile: 'ontouchstart' in document.documentElement ? true : false,
      row1: {
        index: '1',
        items: [{
          text: '1',
          sym: '{',
          width: '10%'
        }, {
          text: '2',
          sym: '}',
          width: '10%'
        }, {
          text: '3',
          sym: '|',
          width: '10%'
        }, {
          text: '4',
          sym: '[',
          width: '10%'
        }, {
          text: '5',
          sym: ']',
          width: '10%'
        }, {
          text: '6',
          sym: '\\',
          width: '10%'
        }, {
          text: '7',
          sym: '~',
          width: '10%'
        }, {
          text: '8',
          sym: '<',
          width: '10%'
        }, {
          text: '9',
          sym: '>',
          width: '10%'
        }, {
          text: '0',
          sym: '`',
          width: '10%'
        }]
      },
      row2: {
        index: '2',
        items: [{
          text: 'q',
          sym: '+',
          width: '10%'
        }, {
          text: 'w',
          sym: 'x',
          width: '10%'
        }, {
          text: 'e',
          sym: '÷',
          width: '10%'
        }, {
          text: 'r',
          sym: '=',
          width: '10%'
        }, {
          text: 't',
          sym: '/',
          width: '10%'
        }, {
          text: 'y',
          sym: '_',
          width: '10%'
        }, {
          text: 'u',
          sym: '€',
          width: '10%'
        }, {
          text: 'i',
          sym: '£',
          width: '10%'
        }, {
          text: 'o',
          sym: '¥',
          width: '10%'
        }, {
          text: 'p',
          sym: '*',
          width: '10%'
        }]
      },
      row3: {
        index: '3',
        items: [{
          text: 'a',
          sym: '!',
          width: '10%',
          marginLeft: '5%'
        }, {
          text: 's',
          sym: '@',
          width: '10%'
        }, {
          text: 'd',
          sym: '#',
          width: '10%'
        }, {
          text: 'f',
          sym: '$',
          width: '10%'
        }, {
          text: 'g',
          sym: '%',
          width: '10%'
        }, {
          text: 'h',
          sym: '^',
          width: '10%'
        }, {
          text: 'j',
          sym: '&',
          width: '10%'
        }, {
          text: 'k',
          sym: '(',
          width: '10%'
        }, {
          text: 'l',
          sym: ')',
          width: '10%'
        }]
      },
      row4: {
        index: '4',
        items: [{
          text: 'caps',
          id: 'key-caps',
          width: '15%'
        }, {
          text: 'z',
          sym: '-',
          width: '10%'
        }, {
          text: 'x',
          sym: "'",
          width: '10%'
        }, {
          text: 'c',
          sym: '"',
          width: '10%'
        }, {
          text: 'v',
          sym: ':',
          width: '10%'
        }, {
          text: 'b',
          sym: ';',
          width: '10%'
        }, {
          text: 'n',
          sym: ',',
          width: '10%'
        }, {
          text: 'm',
          sym: '?',
          width: '10%'
        }, {
          text: 'back',
          type: 'type6',
          id: 'key-back',
          sym: '+',
          width: '15%'
        }]
      },
      row5: {
        index: '5',
        items: [{
          text: '!#1',
          id: 'sym',
          width: '10%'
        }, {
          text: ',',
          width: '10%'
        }, {
          text: 'Space',
          id: 'key-space',
          width: '60%'
        }, {
          text: '.',
          width: '10%'
        }, {
          text: 'inter',
          id: 'key-inter',
          width: '10%'
        }]
      }
    };
    return _this;
  }

  _createClass(MobileKeyboard, [{
    key: "getUpper",
    value: function getUpper(item) {
      var _this$state = this.state,
          caps = _this$state.caps,
          sym = _this$state.sym;

      if (['key-close', 'key-space', 'key-inter', 'key-caps', 'key-back'].indexOf(item.id) !== -1) {
        return item.text;
      }

      if (sym && item.sym) {
        return item.sym;
      } else if (caps) {
        return item.text.toUpperCase();
      } else {
        return item.text;
      }
    }
  }, {
    key: "getBack",
    value: function getBack(value) {
      if (value.length === 0) {
        return false;
      }

      return value.slice(0, value.length - 1);
    }
  }, {
    key: "inter",
    value: function inter() {
      if (this.props.callback) {
        this.props.callback(this.state.value);
        this.close();
      }
    }
  }, {
    key: "keydown",
    value: function keydown(item) {
      var _this$state2 = this.state,
          init = _this$state2.init,
          row1 = _this$state2.row1,
          row2 = _this$state2.row2,
          row3 = _this$state2.row3,
          row4 = _this$state2.row4,
          row5 = _this$state2.row5,
          value = _this$state2.value,
          caps = _this$state2.caps,
          sym = _this$state2.sym,
          isMobile = _this$state2.isMobile;
      var id = item.id;

      if (id === 'key-caps') {
        this.setState({
          caps: !caps
        });
      } else if (id === 'sym') {
        this.setState({
          sym: !sym
        });
      } else if (id === 'key-inter') {
        this.inter();
      } else if (id === 'key-space') {
        if (init) {
          this.setState({
            value: '',
            init: false
          });
        } else if (value.length > 0 && value[value.length - 1] !== ' ') {
          this.setState({
            value: value + ' '
          });
        }
      } else if (id === 'key-back') {
        if (init) {
          this.setState({
            value: '',
            init: false
          });
        } else if (value.length > 0) {
          this.setState({
            value: this.getBack(value)
          });
        }
      } else if (id === 'key-close') {
        this.close();
      } else {
        (0, _jquery.default)(window).bind(isMobile ? 'touchend' : 'mouseup', _jquery.default.proxy(this.keyup, this));
        this.active = item;
        item.active = true;
        this.setState({
          row1: row1,
          row2: row2,
          row3: row3,
          row4: row4,
          row5: row5
        });
      }
    }
  }, {
    key: "keyup",
    value: function keyup() {
      var isMobile = this.state.isMobile;
      (0, _jquery.default)(window).unbind(isMobile ? 'touchend' : 'mouseup', this.keyup);
      var _this$state3 = this.state,
          row1 = _this$state3.row1,
          row2 = _this$state3.row2,
          row3 = _this$state3.row3,
          row4 = _this$state3.row4,
          row5 = _this$state3.row5,
          value = _this$state3.value,
          init = _this$state3.init;
      this.active.active = false;

      if (init) {
        this.setState({
          row1: row1,
          row2: row2,
          row3: row3,
          row4: row4,
          row5: row5,
          value: this.getUpper(this.active),
          init: false
        });
      } else {
        this.setState({
          row1: row1,
          row2: row2,
          row3: row3,
          row4: row4,
          row5: row5,
          value: value + this.getUpper(this.active)
        });
      }

      this.active = false;
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var style = this.props.style;
      var background = this.theme.background;
      return _jquery.default.extend({}, {
        background: background
      }, style);
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        init: true
      });
      this.props.onclose();
    }
  }, {
    key: "lcdMouseDown",
    value: function lcdMouseDown() {
      var init = this.state.init;
      this.setState({
        init: !init
      });
    }
  }, {
    key: "getTheme",
    value: function getTheme() {
      var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var def = {
        background: '#c9ced4',
        keyColor: '#28292b',
        keyActiveColor: '#1d5ee4',
        keyBackground: '#fff',
        lcdBackground: '#eee',
        lcdColor: '#666',
        titleColor: '#000',
        highlight: '#7fb9ef',
        keyBoxShadow: undefined
      };
      return _jquery.default.extend({}, def, theme);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          caps = _this$state4.caps,
          value = _this$state4.value,
          sym = _this$state4.sym,
          init = _this$state4.init,
          isMobile = _this$state4.isMobile;
      var open = this.props.open;

      if (!open) {
        return '';
      }

      var _this$props2 = this.props,
          _this$props2$title = _this$props2.title,
          title = _this$props2$title === void 0 ? '' : _this$props2$title,
          _this$props2$keyHeigh = _this$props2.keyHeight,
          keyHeight = _this$props2$keyHeigh === void 0 ? 36 : _this$props2$keyHeigh,
          _this$props2$gap = _this$props2.gap,
          gap = _this$props2$gap === void 0 ? 2 : _this$props2$gap;
      var contextValue = {
        caps: caps,
        sym: sym,
        keydown: this.keydown.bind(this),
        value: value,
        init: init,
        theme: this.theme,
        title: title,
        keyHeight: keyHeight,
        gap: gap,
        getUpper: this.getUpper.bind(this),
        lcdMouseDown: this.lcdMouseDown.bind(this),
        isMobile: isMobile
      };

      var backDropProps = _defineProperty({
        className: 'back-drop'
      }, isMobile ? 'onTouchStart' : 'onMouseDown', this.close.bind(this));

      return _react.default.createElement(keyboardContext.Provider, {
        value: contextValue
      }, _react.default.createElement("div", {
        className: "keyboard" + (caps ? ' caps' : ''),
        style: this.getStyle()
      }, _react.default.createElement("div", backDropProps), _react.default.createElement(KeyboardTitle, null), _react.default.createElement(KeyboardHeader, null), _react.default.createElement(KeyboardRow, {
        row: this.state.row1
      }), _react.default.createElement(KeyboardRow, {
        row: this.state.row2
      }), _react.default.createElement(KeyboardRow, {
        row: this.state.row3
      }), _react.default.createElement(KeyboardRow, {
        row: this.state.row4
      }), _react.default.createElement(KeyboardRow, {
        row: this.state.row5
      })));
    }
  }]);

  return MobileKeyboard;
}(_react.Component);

exports.default = MobileKeyboard;

var KeyboardRow =
/*#__PURE__*/
function (_Component2) {
  _inherits(KeyboardRow, _Component2);

  function KeyboardRow() {
    _classCallCheck(this, KeyboardRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(KeyboardRow).apply(this, arguments));
  }

  _createClass(KeyboardRow, [{
    key: "render",
    value: function render() {
      var row = this.props.row;
      var keys = row.items.map(function (item, i) {
        return _react.default.createElement(KeyboardKey, {
          key: row.index + i,
          item: item
        });
      });
      return _react.default.createElement("div", {
        className: "keyboard-row"
      }, keys);
    }
  }]);

  return KeyboardRow;
}(_react.Component);

_defineProperty(KeyboardRow, "contextType", keyboardContext);

var KeyboardKey =
/*#__PURE__*/
function (_Component3) {
  _inherits(KeyboardKey, _Component3);

  function KeyboardKey() {
    _classCallCheck(this, KeyboardKey);

    return _possibleConstructorReturn(this, _getPrototypeOf(KeyboardKey).apply(this, arguments));
  }

  _createClass(KeyboardKey, [{
    key: "getColor",
    value: function getColor() {
      var _this$context = this.context,
          caps = _this$context.caps,
          sym = _this$context.sym,
          theme = _this$context.theme;
      var keyColor = theme.keyColor,
          keyActiveColor = theme.keyActiveColor;
      var item = this.props.item;

      if (item.id === 'key-caps') {
        return caps ? keyActiveColor : keyColor;
      } else if (item.id === 'sym') {
        return sym ? keyActiveColor : keyColor;
      } else {
        return keyColor;
      }
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var _this$context2 = this.context,
          keyHeight = _this$context2.keyHeight,
          gap = _this$context2.gap;
      var item = this.props.item;
      return {
        height: keyHeight + 'px',
        lineHeight: keyHeight - 2 * gap + 'px',
        width: item.width,
        marginLeft: item.marginLeft,
        padding: gap + 'px'
      };
    }
  }, {
    key: "getKeyStyle",
    value: function getKeyStyle(mode) {
      var theme = this.context.theme;
      var keyBackground = theme.keyBackground,
          keyColor = theme.keyColor,
          keyBoxShadow = theme.keyBoxShadow;
      return {
        color: mode === 'shadow' ? keyBackground : this.getColor(),
        background: mode === 'shadow' ? keyColor : keyBackground,
        boxShadow: keyBoxShadow
      };
    }
  }, {
    key: "render",
    value: function render() {
      var item = this.props.item;
      var _this$context3 = this.context,
          keydown = _this$context3.keydown,
          getUpper = _this$context3.getUpper,
          isMobile = _this$context3.isMobile;

      var containerProps = _defineProperty({
        className: "key-container",
        style: this.getStyle()
      }, isMobile ? 'onTouchStart' : 'onMouseDown', function () {
        return keydown(item);
      });

      var keyProps = {
        className: item.className + ' keyboard-key',
        id: item.id,
        style: this.getKeyStyle()
      };
      var shadowProps = {
        className: 'keyboard-key key-shadow',
        style: this.getKeyStyle('shadow')
      };
      return _react.default.createElement("div", containerProps, _react.default.createElement("div", keyProps, getUpper(item), item.active && _react.default.createElement("div", shadowProps, getUpper(item))));
    }
  }]);

  return KeyboardKey;
}(_react.Component);

_defineProperty(KeyboardKey, "contextType", keyboardContext);

var KeyboardHeader =
/*#__PURE__*/
function (_Component4) {
  _inherits(KeyboardHeader, _Component4);

  function KeyboardHeader() {
    _classCallCheck(this, KeyboardHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(KeyboardHeader).apply(this, arguments));
  }

  _createClass(KeyboardHeader, [{
    key: "getLCDStyle",
    value: function getLCDStyle() {
      var _this$context4 = this.context,
          theme = _this$context4.theme,
          keyHeight = _this$context4.keyHeight,
          gap = _this$context4.gap;
      var lcdBackground = theme.lcdBackground;
      return {
        background: lcdBackground,
        minHeight: keyHeight - 2 * gap + 'px',
        maxHeight: keyHeight * 3 + 'px',
        lineHeight: keyHeight - 2 * gap + 'px',
        width: "calc(100% - 54px - ".concat(gap, "px)"),
        marginLeft: gap + 'px',
        marginTop: gap + 'px'
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$context5 = this.context,
          value = _this$context5.value,
          init = _this$context5.init,
          lcdMouseDown = _this$context5.lcdMouseDown,
          theme = _this$context5.theme,
          isMobile = _this$context5.isMobile;
      var highlight = theme.highlight,
          lcdColor = theme.lcdColor;

      var lcdProps = _defineProperty({
        className: 'keyboard-lcd',
        style: this.getLCDStyle()
      }, isMobile ? 'onTouchStart' : 'onMouseDown', lcdMouseDown);

      var markProps = {
        style: {
          background: init ? highlight : 'none',
          color: init ? '#fff' : lcdColor
        }
      };
      return _react.default.createElement("div", {
        className: "keyboard-header"
      }, _react.default.createElement(KeyboardKey, {
        item: {
          text: 'Close',
          id: 'key-close',
          width: '50px'
        }
      }), _react.default.createElement("div", lcdProps, _react.default.createElement("mark", markProps, value)));
    }
  }]);

  return KeyboardHeader;
}(_react.Component);

_defineProperty(KeyboardHeader, "contextType", keyboardContext);

var KeyboardTitle =
/*#__PURE__*/
function (_Component5) {
  _inherits(KeyboardTitle, _Component5);

  function KeyboardTitle() {
    _classCallCheck(this, KeyboardTitle);

    return _possibleConstructorReturn(this, _getPrototypeOf(KeyboardTitle).apply(this, arguments));
  }

  _createClass(KeyboardTitle, [{
    key: "getStyle",
    value: function getStyle() {
      var _this$context6 = this.context,
          keyHeight = _this$context6.keyHeight,
          theme = _this$context6.theme,
          gap = _this$context6.gap;
      var titleColor = theme.titleColor;
      return {
        height: keyHeight + 'px',
        lineHeight: keyHeight + 'px',
        color: titleColor,
        padding: "0 ".concat(gap, "px")
      };
    }
  }, {
    key: "render",
    value: function render() {
      var title = this.context.title;
      return _react.default.createElement("div", {
        className: "keyboard-title",
        style: this.getStyle()
      }, title);
    }
  }]);

  return KeyboardTitle;
}(_react.Component);

_defineProperty(KeyboardTitle, "contextType", keyboardContext);