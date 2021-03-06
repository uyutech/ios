/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 118);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bignumber = __webpack_require__(2);

var _bignumber2 = _interopRequireDefault(_bignumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var util = {
  isLogin: function isLogin() {
    return $.cookie('isLogin') === 'true';
  },
  isIPhone: function isIPhone() {
    return navigator.appVersion.match(/iphone/gi);
  },
  goto: function goto(url) {
    location.href = url;
  },
  autoSsl: function autoSsl(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return (url || '').replace(/^https?:\/\//i, '//');
  },
  img: function img(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url.replace(/\.(\w+)-\d*_\d*_\d*/, '.$1') : url;
  },
  img1600__80: function img1600__80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-1600__80' : url;
  },
  img1296_1296_80: function img1296_1296_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-1296_1296_80' : url;
  },
  img1200__80: function img1200__80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-1200__80' : url;
  },
  img980_980_80: function img980_980_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-980_980_80' : url;
  },
  img750_750_80: function img750_750_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-750_750_80' : url;
  },
  img720__80: function img720__80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-720__80' : url;
  },
  img600_600_80: function img600_600_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-600_600_80' : url;
  },
  img600__80: function img600__80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-600__80' : url;
  },
  img480_480_80: function img480_480_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-480_480_80' : url;
  },
  img336__80: function img336__80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-336__80' : url;
  },
  img332_332_80: function img332_332_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-332_332_80' : url;
  },
  img288__80: function img288__80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-288__80' : url;
  },
  img288_288_80: function img288_288_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-288_288_80' : url;
  },
  img240_240_80: function img240_240_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-240_240_80' : url;
  },
  img220_220_80: function img220_220_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-240_240_80' : url;
  },
  img208_208_80: function img208_208_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-208_208_80' : url;
  },
  img200_200: function img200_200(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-200_200' : url;
  },
  img200_200_80: function img200_200_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-200_200_80' : url;
  },
  img192_192: function img192_192(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-192_192' : url;
  },
  img172_172_80: function img172_172_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-172_172_80' : url;
  },
  img168__80: function img168__80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-168__80' : url;
  },
  img150_150_80: function img150_150_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-150_150_80' : url;
  },
  img144_: function img144_(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-144_' : url;
  },
  img144_144: function img144_144(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-144_144' : url;
  },
  img144_144_80: function img144_144_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-144_144_80' : url;
  },
  img132_132_80: function img132_132_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-132_132_80' : url;
  },
  img128_128_80: function img128_128_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-120_120_80' : url;
  },
  img120_120: function img120_120(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-120_120' : url;
  },
  img120_120_80: function img120_120_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-120_120_80' : url;
  },
  img108_108_80: function img108_108_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-108_108_80' : url;
  },
  img100_100: function img100_100(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-100_100' : url;
  },
  img96_96_80: function img96_96_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-90_90' : url;
  },
  img90_90: function img90_90(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-90_90' : url;
  },
  img64_64_80: function img64_64_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-64_64_80' : url;
  },
  img60_60: function img60_60(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-60_60' : url;
  },
  img60_60_80: function img60_60_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-60_60_80' : url;
  },
  img__60: function img__60(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-__60' : url;
  },
  img48_48_80: function img48_48_80(url) {
    if (!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? util.img(url) + '-48_48_80' : url;
  },
  decode: function decode(str) {
    return str.replace(/&lt;/g, '<').replace(/&amp;/g, '&');
  },
  formatTime: function formatTime(time) {
    if (!time) {
      return '00:00';
    }
    var res = '';
    if (time >= 1000 * 60 * 60) {
      var hour = Math.floor(time / (1000 * 60 * 60));
      time -= 1000 * 60 * 60 * hour;
      res += hour + ':';
    }
    if (time >= 1000 * 60) {
      var minute = Math.floor(time / (1000 * 60));
      time -= 1000 * 60 * minute;
      if (minute < 10) {
        minute = '0' + minute;
      }
      res += minute + ':';
    } else {
      res += '00:';
    }
    var second = Math.floor(time / 1000);
    if (second < 10) {
      second = '0' + second;
    }
    res += second;
    return res;
  },
  formatDate: function formatDate(time) {
    time = new Date(time);
    var now = Date.now();
    var diff = now - time;
    if (diff >= 1000 * 60 * 60 * 24 * 365) {
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 365)) + '年前';
    }
    if (diff >= 1000 * 60 * 60 * 24 * 30) {
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) + '月前';
    }
    if (diff >= 1000 * 60 * 60 * 24) {
      return Math.floor(diff / (1000 * 60 * 60 * 24)) + '天前';
    }
    if (diff >= 1000 * 60 * 60) {
      return Math.floor(diff / (1000 * 60 * 60)) + '小时前';
    }
    if (diff >= 1000 * 60) {
      return Math.floor(diff / (1000 * 60)) + '分钟前';
    }
    return '刚刚';
  },
  abbrNum: function abbrNum(n, fix) {
    if (!n) {
      return 0;
    }
    if (n >= 10000) {
      n = new _bignumber2.default(n).div(10000).toFixed(fix || 1);
      n = n.replace(/(\.[1-9]+)0+$/, '$1');
      n = n.replace(/\.0+$/, '');
      n += 'w';
    }
    if (n >= 1000) {
      n = new _bignumber2.default(n).div(1000).toFixed(fix || 1);
      n = n.replace(/(\.[1-9]+)0+$/, '$1');
      n = n.replace(/\.0+$/, '');
      n += 'k';
    }
    return n;
  },
  ERROR_MESSAGE: '人气大爆发，请稍后再试。',
  scrollTop: function scrollTop(y) {
    $(window).scrollTop(y - 70);
  }
}; /**
    * Created by army on 2017/5/20.
    */

exports.default = util;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by army8735 on 2017/11/28.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
var net = {
  getJSON: function getJSON(url, data, success, error, type, timeout) {
    if (typeof data === 'function') {
      timeout = error;
      error = success;
      success = data;
      data = {};
    }
    if (typeof success !== 'function') {
      success = function success() {};
      timeout = error;
      error = success;
    }
    if (typeof error !== 'function') {
      timeout = error;
      error = function error() {};
    }
    return $.ajax2(url, data, success, error, 'GET', timeout);
  },
  postJSON: function postJSON(url, data, success, error, type, timeout) {
    if (typeof data === 'function') {
      timeout = error;
      error = success;
      success = data;
      data = {};
    }
    if (typeof success !== 'function') {
      success = function success() {};
      timeout = error;
      error = success;
    }
    if (typeof error !== 'function') {
      timeout = error;
      error = function error() {};
    }
    return $.ajax2(url, data, success, error, 'POST', timeout);
  }
};

exports.default = net;

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubCmt = function (_migi$Component) {
  _inherits(SubCmt, _migi$Component);

  function SubCmt() {
    var _ref;

    _classCallCheck(this, SubCmt);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SubCmt.__proto__ || Object.getPrototypeOf(SubCmt)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    self.hidden = self.props.hidden;
    self.value = self.props.value || '';
    self.invalid = self.value.trim().length < 3;
    self.maxlength = self.props.maxlength;
    self.subText = self.props.subText;
    self.tipText = self.props.tipText;
    self.placeholder = self.props.placeholder;
    self.toPlaceholder = self.props.toPlaceholder;
    self.originTo = self.props.originTo;
    self.readOnly = self.props.readOnly;
    return _this;
  }

  _createClass(SubCmt, [{
    key: 'input',
    value: function input(e, vd) {
      if (!_util2.default.isLogin()) {
        migi.eventBus.emit('NEED_LOGIN');
      } else {
        this.invalid = $(vd.element).val().trim().length < 3;
      }
    }
  }, {
    key: 'onFocus',
    value: function onFocus() {
      this.emit('focus');
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.ref.input.element.focus();
    }
  }, {
    key: 'click',
    value: function click() {
      this.emit('click');
    }
  }, {
    key: 'submit',
    value: function submit(e) {
      e.preventDefault();
      if (!this.invalid) {
        this.emit('submit', this.value);
      }
    }
  }, {
    key: 'clickDel',
    value: function clickDel() {
      this.to = '';
      migi.eventBus.emit('subCmtDelTo');
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", new migi.Obj("hidden", this, function () {
        return 'cp-subcmt' + (!this.hidden ? '' : ' fn-hide');
      })]], [migi.createVd("form", [["class", new migi.Obj(["to", "originTo"], this, function () {
        return 'fn-clear' + (this.to || this.originTo ? ' to' : '');
      })], ["ref", "form"], ["onSubmit", new migi.Cb(this, this.submit)], ["onClick", new migi.Cb(this, this.click)]], [migi.createVd("label", [], ["TO: ", new migi.Obj(["to", "originTo"], this, function () {
        return this.to || this.originTo;
      })]), migi.createVd("b", [["class", new migi.Obj("to", this, function () {
        return 'del' + (this.to ? '' : ' fn-hide');
      })], ["onClick", new migi.Cb(this, this.clickDel)]]), migi.createVd("input", [["type", "text"], ["class", "text"], ["ref", "input"], ["placeholder", new migi.Obj(["to", "toPlaceholder", "placeholder"], this, function () {
        return this.to ? '回复' + this.to + (this.toPlaceholder || '的评论') : this.placeholder;
      })], ["onInput", new migi.Cb(this, this.input)], ["onFocus", new migi.Cb(this, this.onFocus)], ["maxlength", new migi.Obj("maxlength", this, function () {
        return this.maxlength || 2048;
      })], ["value", new migi.Obj("value", this, function () {
        return this.value;
      })], ["readonly", new migi.Obj("readOnly", this, function () {
        return this.readOnly;
      })]]), migi.createVd("input", [["type", "submit"], ["class", new migi.Obj("invalid", this, function () {
        return 'submit' + (this.invalid ? ' dis' : '');
      })], ["value", new migi.Obj(["value", "tipText", "subText"], this, function () {
        return this.value.trim().length ? this.value.trim().length < 3 ? this.tipText ? this.tipText.replace('${n}', 3 - this.value.trim().length) : '还少' + (3 - this.value.trim().length) + '个字哦' : this.subText || '发布评论' : this.subText || '发布评论';
      })]])])]);
    }
  }, {
    key: 'hidden',
    set: function set(v) {
      this.__setBind("hidden", v);this.__data("hidden");
    },
    get: function get() {
      return this.__getBind("hidden");
    }
  }, {
    key: 'maxlength',
    set: function set(v) {
      this.__setBind("maxlength", v);this.__data("maxlength");
    },
    get: function get() {
      return this.__getBind("maxlength");
    }
  }, {
    key: 'placeholder',
    set: function set(v) {
      this.__setBind("placeholder", v);this.__data("placeholder");
    },
    get: function get() {
      return this.__getBind("placeholder");
    }
  }, {
    key: 'subText',
    set: function set(v) {
      this.__setBind("subText", v);this.__data("subText");
    },
    get: function get() {
      return this.__getBind("subText");
    }
  }, {
    key: 'tipText',
    set: function set(v) {
      this.__setBind("tipText", v);this.__data("tipText");
    },
    get: function get() {
      return this.__getBind("tipText");
    }
  }, {
    key: 'value',
    set: function set(v) {
      this.__setBind("value", v);this.__data("value");
    },
    get: function get() {
      if (this.__initBind("value")) this.__setBind("value", '');return this.__getBind("value");
    }
  }, {
    key: 'to',
    set: function set(v) {
      this.__setBind("to", v);this.__data("to");
    },
    get: function get() {
      return this.__getBind("to");
    }
  }, {
    key: 'toPlaceholder',
    set: function set(v) {
      this.__setBind("toPlaceholder", v);this.__data("toPlaceholder");
    },
    get: function get() {
      return this.__getBind("toPlaceholder");
    }
  }, {
    key: 'originTo',
    set: function set(v) {
      this.__setBind("originTo", v);this.__data("originTo");
    },
    get: function get() {
      return this.__getBind("originTo");
    }
  }, {
    key: 'invalid',
    set: function set(v) {
      this.__setBind("invalid", v);this.__data("invalid");
    },
    get: function get() {
      if (this.__initBind("invalid")) this.__setBind("invalid", true);return this.__getBind("invalid");
    }
  }, {
    key: 'readOnly',
    set: function set(v) {
      this.__setBind("readOnly", v);this.__data("readOnly");
    },
    get: function get() {
      return this.__getBind("readOnly");
    }
  }]);

  return SubCmt;
}(migi.Component);

migi.name(SubCmt, "SubCmt");exports.default = SubCmt;

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(119);

__webpack_require__(120);

var _animaQuerystring = __webpack_require__(4);

var _animaQuerystring2 = _interopRequireDefault(_animaQuerystring);

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _Author = __webpack_require__(121);

var _Author2 = _interopRequireDefault(_Author);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var search = _animaQuerystring2.default.parse(location.search.replace(/^\?/, ''));
var authorID = search.authorID;

jsBridge.ready(function () {
  var author = migi.preExist(migi.createCp(_Author2.default, []), '#page');
  _net2.default.postJSON('/h5/author/index', { authorID: authorID }, function (res) {
    if (res.success) {
      author.setData(authorID, res.data);
    } else {
      jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
    }
  }, function (res) {
    jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
  });
});

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "author.html";

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by army8735 on 2017/10/28.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
var TYPE = {
  originMusic: 1,
  musicAlbum: 5,
  photoAlbum: 11
};

var NAME = {};
NAME[TYPE.originMusic] = '原创音乐';
NAME[TYPE.musicAlbum] = '音乐专辑';
NAME[TYPE.photoAlbum] = '相册';

exports.default = {
  TYPE: TYPE,
  NAME: NAME
};

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _Nav = __webpack_require__(122);

var _Nav2 = _interopRequireDefault(_Nav);

var _Home = __webpack_require__(125);

var _Home2 = _interopRequireDefault(_Home);

var _MAList = __webpack_require__(126);

var _MAList2 = _interopRequireDefault(_MAList);

var _Comments = __webpack_require__(127);

var _Comments2 = _interopRequireDefault(_Comments);

var _SubCmt = __webpack_require__(10);

var _SubCmt2 = _interopRequireDefault(_SubCmt);

var _WorksTypeEnum = __webpack_require__(12);

var _WorksTypeEnum2 = _interopRequireDefault(_WorksTypeEnum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Author = function (_migi$Component) {
  _inherits(Author, _migi$Component);

  function Author() {
    var _ref;

    _classCallCheck(this, Author);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = Author.__proto__ || Object.getPrototypeOf(Author)).call.apply(_ref, [this].concat(data)));
  }

  _createClass(Author, [{
    key: 'setData',
    value: function setData(authorID, data) {
      var self = this;
      self.authorID = authorID;
      self.authorDetail = data.authorDetail;
      self.homeDetail = data.homeDetail;
      self.album = data.album;
      self.commentData = data.commentData;
      self.hotPlayList = data.hotPlayList;

      self.hasData = true;

      var subCmt = self.ref.subCmt;
      subCmt.on('click', function () {
        if (subCmt.to) {
          jsBridge.pushWindow('/subcomment.html?type=2&id=' + self.authorID + '&cid=' + self.cid + '&rid=' + self.rid, {
            title: '评论'
          });
        } else {
          jsBridge.pushWindow('/subcomment.html?type=2&id=' + self.authorID, {
            title: '评论'
          });
        }
      });
    }
  }, {
    key: 'clickType',
    value: function clickType(e, vd, tvd) {
      var $li = $(tvd.element);
      if ($li.hasClass('cur')) {
        return;
      }
      $(vd.element).find('.cur').removeClass('cur');
      $li.addClass('cur');
      var self = this;
      var home = self.ref.home;
      var maList = self.ref.maList;
      var comments = self.ref.comments;
      home && home.hide();
      maList && maList.hide();
      comments && comments.hide();
      var rel = tvd.props.rel;
      switch (rel) {
        case 'home':
          home.show();
          break;
        case 'ma':
          if (!maList) {
            self.ref.maList = maList = migi.render(migi.createCp(_MAList2.default, [["ref", "maList"], ["authorID", self.authorID], ["dataList", self.hotPlayList]]));
            maList.after(self.ref.type.element);
          }
          maList && maList.show();
          break;
        case 'comments':
          self.addComment();
          comments && comments.show();
          break;
      }
    }
  }, {
    key: 'addComment',
    value: function addComment() {
      var self = this;
      if (self.ref.comments) {
        return;
      }
      var comments = self.ref.comments = migi.render(migi.createCp(_Comments2.default, [["ref", "comments"], ["isLogin", _util2.default.isLogin()], ["authorID", self.authorID], ["commentData", self.commentData]]));
      self.ref.comments.after(self.ref.type.element);

      var comment = comments.ref.comment;
      var subCmt = self.ref.subCmt;
      if (self.worksType === _WorksTypeEnum2.default.TYPE.originMusic) {
        var media = self.ref.media;
        media.on('switchTo', function (data) {
          comments.workID = data.ItemID;
        });
      }
      comment.on('chooseSubComment', function (rid, cid, name, n) {
        subCmt.to = name;
        self.rid = rid;
        self.cid = cid;
        if (!n || n === '0') {
          jsBridge.pushWindow('/subcomment.html?type=2&id=' + self.authorID + '&cid=' + cid + '&rid=' + rid, {
            title: '评论'
          });
        }
      });
      comment.on('closeSubComment', function () {
        subCmt.to = '';
      });
    }
  }, {
    key: 'genDom',
    value: function genDom() {
      var self = this;
      var empty = !self.album.length && !self.homeDetail.Hot_Works_Items.length && !self.homeDetail.AuthorToAuthor.length;
      if (!self.authorDetail.ISSettled) {
        return migi.createVd("div", [], [migi.createCp(_Nav2.default, [["ref", "nav"], ["authorID", self.authorID], ["authorDetail", self.authorDetail]]), migi.createVd("ul", [["class", "type fn-clear"], ["ref", "type"]], [migi.createVd("li", [["class", "comments cur"]], ["留言"])]), migi.createCp(_Comments2.default, [["ref", "comments"], ["isLogin", _util2.default.isLogin()], ["authorID", self.authorID], ["commentData", self.commentData]]), migi.createCp(_SubCmt2.default, [["ref", "subCmt"], ["originTo", self.authorDetail.AuthorName], ["subText", "发送"], ["tipText", "-${n}"], ["readOnly", true], ["placeholder", '给' + self.authorDetail.AuthorName + '留个言吧']])]);
      }
      if (empty) {
        return migi.createVd("div", [], [migi.createCp(_Nav2.default, [["ref", "nav"], ["authorID", self.authorID], ["authorDetail", self.authorDetail]]), migi.createVd("ul", [["class", "type fn-clear"], ["ref", "type"], ["onClick", [[{ "li": { "_v": true } }, new migi.Cb(this, this.clickType)]]]], [migi.createVd("li", [["class", "ma cur"], ["rel", "ma"]], ["音乐"]), migi.createVd("li", [["class", "comments"], ["rel", "comments"]], ["留言"])]), migi.createCp(_MAList2.default, [["ref", "maList"], ["authorID", self.authorID], ["dataList", self.hotPlayList]]), migi.createCp(_SubCmt2.default, [["ref", "subCmt"], ["originTo", self.authorDetail.AuthorName], ["subText", "发送"], ["tipText", "-${n}"], ["readOnly", true], ["placeholder", '给' + self.authorDetail.AuthorName + '留个言吧']])]);
      }
      return migi.createVd("div", [], [migi.createCp(_Nav2.default, [["ref", "nav"], ["authorID", self.authorID], ["authorDetail", self.authorDetail]]), migi.createVd("ul", [["class", "type fn-clear"], ["ref", "type"], ["onClick", [[{ "li": { "_v": true } }, new migi.Cb(this, this.clickType)]]]], [migi.createVd("li", [["class", "home cur"], ["rel", "home"]], ["主页"]), migi.createVd("li", [["class", "ma"], ["rel", "ma"]], ["音乐"]), migi.createVd("li", [["class", "comments"], ["rel", "comments"]], ["留言"])]), migi.createCp(_Home2.default, [["ref", "home"], ["authorID", self.authorID], ["homeDetail", self.homeDetail], ["album", self.album]]), migi.createCp(_SubCmt2.default, [["ref", "subCmt"], ["originTo", self.authorDetail.AuthorName], ["subText", "发送"], ["tipText", "-${n}"], ["readOnly", true], ["placeholder", '给' + self.authorDetail.AuthorName + '留个言吧']])]);
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "author"]], [new migi.Obj("hasData", this, function () {
        return this.hasData ? this.genDom() : migi.createVd("div", [], [migi.createVd("div", [["class", "fn-placeholder-pic"]]), migi.createVd("div", [["class", "fn-placeholder-tags"]]), migi.createVd("div", [["class", "fn-placeholder"]]), migi.createVd("div", [["class", "fn-placeholder"]])]);
      })]);
    }
  }, {
    key: 'hasData',
    set: function set(v) {
      this.__setBind("hasData", v);this.__data("hasData");
    },
    get: function get() {
      return this.__getBind("hasData");
    }
  }, {
    key: 'authorID',
    set: function set(v) {
      this.__setBind("authorID", v);this.__data("authorID");
    },
    get: function get() {
      return this.__getBind("authorID");
    }
  }, {
    key: 'rid',
    set: function set(v) {
      this.__setBind("rid", v);this.__data("rid");
    },
    get: function get() {
      return this.__getBind("rid");
    }
  }, {
    key: 'cid',
    set: function set(v) {
      this.__setBind("cid", v);this.__data("cid");
    },
    get: function get() {
      return this.__getBind("cid");
    }
  }]);

  return Author;
}(migi.Component);

migi.name(Author, "Author");exports.default = Author;

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Profile = __webpack_require__(123);

var _Profile2 = _interopRequireDefault(_Profile);

var _Link = __webpack_require__(124);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_migi$Component) {
  _inherits(Nav, _migi$Component);

  function Nav() {
    var _ref;

    _classCallCheck(this, Nav);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = Nav.__proto__ || Object.getPrototypeOf(Nav)).call.apply(_ref, [this].concat(data)));
  }

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "nav"]], [migi.createCp(_Profile2.default, [["ref", "profile"], ["authorID", this.props.authorID], ["authorDetail", this.props.authorDetail]]), migi.createCp(_Link2.default, [["ref", "link"], ["authorDetail", this.props.authorDetail]])]);
    }
  }]);

  return Nav;
}(migi.Component);

migi.name(Nav, "Nav");exports.default = Nav;

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _authorTemplate = __webpack_require__(14);

var _authorTemplate2 = _interopRequireDefault(_authorTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_migi$Component) {
  _inherits(Profile, _migi$Component);

  function Profile() {
    var _ref;

    _classCallCheck(this, Profile);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Profile.__proto__ || Object.getPrototypeOf(Profile)).call.apply(_ref, [this].concat(data)));

    _this.authorID = _this.props.authorID;
    _this.authorName = _this.props.authorDetail.AuthorName;
    _this.sign = _this.props.authorDetail.Sign;
    _this.headUrl = _this.props.authorDetail.Head_url;
    _this.fansNumber = _this.props.authorDetail.FansNumber;
    _this.like = _this.props.authorDetail.IsLike;
    _this.settled = _this.props.authorDetail.ISSettled;
    _this.type = _this.props.authorDetail.Authortype;
    return _this;
  }

  _createClass(Profile, [{
    key: 'click',
    value: function click(e) {
      e.preventDefault();
      if (!_util2.default.isLogin()) {
        migi.eventBus.emit('NEED_LOGIN');
        return;
      }
      var self = this;
      self.loading = true;
      if (self.like) {
        jsBridge.confirm('确定取关吗？', function () {
          _net2.default.postJSON('/h5/author/unFollow', { authorID: self.authorID }, function (res) {
            if (res.success) {
              self.like = false;
              self.fansNumber = res.data.followCount;
            } else if (res.code === 1000) {
              migi.eventBus.emit('NEED_LOGIN');
            } else {
              jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
            }
            self.loading = false;
          }, function (res) {
            jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
            self.loading = false;
          });
        });
      } else {
        _net2.default.postJSON('/h5/author/follow', { authorID: self.authorID }, function (res) {
          if (res.success) {
            self.like = true;
            self.fansNumber = res.data.followCount;
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
          }
          self.loading = false;
        }, function (res) {
          jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
          self.loading = false;
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "profile fn-clear"]], [migi.createVd("div", [["class", "pic"]], [migi.createVd("img", [["src", new migi.Obj("headUrl", this, function () {
        return _util2.default.autoSsl(_util2.default.img288_288_80(this.headUrl || '/src/common/head.png'));
      })]]), new migi.Obj("settled", this, function () {
        return this.settled ? migi.createVd("b", [["class", "settled"], ["title", "已入驻"]]) : '';
      })]), migi.createVd("div", [["class", "txt"]], [migi.createVd("div", [["class", "n"]], [migi.createVd("h3", [], [new migi.Obj("authorName", this, function () {
        return this.authorName;
      })]), new migi.Obj("authorType", this, function () {
        return this.authorType.map(function (item) {
          return migi.createVd("span", [["class", 'cp-author-type-' + item]]);
        });
      })]), migi.createVd("div", [["class", "rel"]], [migi.createVd("label", [], ["粉丝"]), migi.createVd("span", [], [new migi.Obj("fansNumber", this, function () {
        return this.fansNumber || '0';
      })]), migi.createVd("a", [["href", "#"], ["class", new migi.Obj(["like", "loading"], this, function () {
        return (this.like ? 'un-follow' : 'follow') + (this.loading ? ' loading' : '');
      })], ["onClick", new migi.Cb(this, this.click)]], [new migi.Obj("like", this, function () {
        return this.like ? '- 已关注' : '+ 关注';
      })])]), migi.createVd("p", [["class", "intro"]], [new migi.Obj("sign", this, function () {
        return this.sign;
      })])])]);
    }
  }, {
    key: 'authorID',
    set: function set(v) {
      this.__setBind("authorID", v);this.__data("authorID");
    },
    get: function get() {
      return this.__getBind("authorID");
    }
  }, {
    key: 'authorName',
    set: function set(v) {
      this.__setBind("authorName", v);this.__data("authorName");
    },
    get: function get() {
      return this.__getBind("authorName");
    }
  }, {
    key: 'sign',
    set: function set(v) {
      this.__setBind("sign", v);this.__data("sign");
    },
    get: function get() {
      return this.__getBind("sign");
    }
  }, {
    key: 'authorType',
    set: function set(v) {
      this.__setBind("authorType", v);this.__data("authorType");
    },
    get: function get() {
      if (this.__initBind("authorType")) this.__setBind("authorType", []);return this.__getBind("authorType");
    }
  }, {
    key: 'headUrl',
    set: function set(v) {
      this.__setBind("headUrl", v);this.__data("headUrl");
    },
    get: function get() {
      return this.__getBind("headUrl");
    }
  }, {
    key: 'fansNumber',
    set: function set(v) {
      this.__setBind("fansNumber", v);this.__data("fansNumber");
    },
    get: function get() {
      return this.__getBind("fansNumber");
    }
  }, {
    key: 'like',
    set: function set(v) {
      this.__setBind("like", v);this.__data("like");
    },
    get: function get() {
      return this.__getBind("like");
    }
  }, {
    key: 'loading',
    set: function set(v) {
      this.__setBind("loading", v);this.__data("loading");
    },
    get: function get() {
      return this.__getBind("loading");
    }
  }, {
    key: 'settled',
    set: function set(v) {
      this.__setBind("settled", v);this.__data("settled");
    },
    get: function get() {
      return this.__getBind("settled");
    }
  }, {
    key: 'type',
    set: function set(v) {
      v = v || [];
      var hash = {};
      v.forEach(function (item) {
        var css = (_authorTemplate2.default.code2Data[item.AuthorTypeID] || {}).css || '';
        hash[css] = true;
      });
      this.authorType = Object.keys(hash);
    }
  }]);

  return Profile;
}(migi.Component);

migi.name(Profile, "Profile");exports.default = Profile;

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_migi$Component) {
  _inherits(Link, _migi$Component);

  function Link() {
    var _ref;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    self._5SingUrl = self.props.authorDetail._5SingUrl;
    self._BilibiliUrl = self.props.authorDetail._BilibiliUrl;
    self._BaiduUrl = self.props.authorDetail._BaiduUrl;
    self._WangyiUrl = self.props.authorDetail._WangyiUrl;
    self._WeiboUrl = self.props.authorDetail._WeiboUrl;
    return _this;
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      return migi.createVd("div", [["class", "link"]], [migi.createVd("ul", [], [new migi.Obj("_5SingUrl", this, function () {
        return this._5SingUrl ? migi.createVd("li", [], [migi.createVd("a", [["target", "_blank"], ["href", this._5SingUrl], ["class", "sing5"]], ["5sing"])]) : '';
      }), new migi.Obj("_BilibiliUrl", this, function () {
        return this._BilibiliUrl ? migi.createVd("li", [], [migi.createVd("a", [["target", "_blank"], ["href", this._BilibiliUrl], ["class", "bilibili"]], ["b站"])]) : '';
      }), new migi.Obj("_BaiduUrl", this, function () {
        return this._BaiduUrl ? migi.createVd("li", [], [migi.createVd("a", [["target", "_blank"], ["href", this._BaiduUrl], ["class", "baidu"]], ["百度"])]) : '';
      }), new migi.Obj("_WangyiUrl", this, function () {
        return this._WangyiUrl ? migi.createVd("li", [], [migi.createVd("a", [["target", "_blank"], ["href", this._WangyiUrl], ["class", "wangyi"]], ["网易"])]) : '';
      }), new migi.Obj("_WeiboUrl", this, function () {
        return this._WeiboUrl ? migi.createVd("li", [], [migi.createVd("a", [["target", "_blank"], ["href", this._WeiboUrl], ["class", "weibo"]], ["微博"])]) : '';
      })]), migi.createVd("p", [], ["外站主页"])]);
    }
  }, {
    key: "_5SingUrl",
    set: function set(v) {
      this.__setBind("_5SingUrl", v);this.__data("_5SingUrl");
    },
    get: function get() {
      return this.__getBind("_5SingUrl");
    }
  }, {
    key: "_BilibiliUrl",
    set: function set(v) {
      this.__setBind("_BilibiliUrl", v);this.__data("_BilibiliUrl");
    },
    get: function get() {
      return this.__getBind("_BilibiliUrl");
    }
  }, {
    key: "_BaiduUrl",
    set: function set(v) {
      this.__setBind("_BaiduUrl", v);this.__data("_BaiduUrl");
    },
    get: function get() {
      return this.__getBind("_BaiduUrl");
    }
  }, {
    key: "_WangyiUrl",
    set: function set(v) {
      this.__setBind("_WangyiUrl", v);this.__data("_WangyiUrl");
    },
    get: function get() {
      return this.__getBind("_WangyiUrl");
    }
  }, {
    key: "_WeiboUrl",
    set: function set(v) {
      this.__setBind("_WeiboUrl", v);this.__data("_WeiboUrl");
    },
    get: function get() {
      return this.__getBind("_WeiboUrl");
    }
  }]);

  return Link;
}(migi.Component);

migi.name(Link, "Link");exports.default = Link;

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HotWork = __webpack_require__(36);

var _HotWork2 = _interopRequireDefault(_HotWork);

var _HotMusicAlbum = __webpack_require__(37);

var _HotMusicAlbum2 = _interopRequireDefault(_HotMusicAlbum);

var _HotAuthor = __webpack_require__(25);

var _HotAuthor2 = _interopRequireDefault(_HotAuthor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_migi$Component) {
  _inherits(Home, _migi$Component);

  function Home() {
    var _ref;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(data)));
  }

  _createClass(Home, [{
    key: 'show',
    value: function show() {
      $(this.element).removeClass('fn-hide');
    }
  }, {
    key: 'hide',
    value: function hide() {
      $(this.element).addClass('fn-hide');
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "home"]], [this.props.homeDetail.Hot_Works_Items.length ? migi.createVd("div", [], [migi.createVd("h4", [], ["主打作品"]), migi.createCp(_HotWork2.default, [["ref", "hotWork"], ["dataList", this.props.homeDetail.Hot_Works_Items]])]) : '', this.props.album.length ? migi.createVd("div", [], [migi.createVd("h4", [], ["专辑"]), migi.createCp(_HotMusicAlbum2.default, [["ref", "hotCollection"], ["dataList", this.props.album]])]) : '', this.props.homeDetail.AuthorToAuthor.length ? migi.createVd("div", [], [migi.createVd("h4", [], ["合作关系"]), migi.createCp(_HotAuthor2.default, [["ref", "hotAuthor"], ["dataList", this.props.homeDetail.AuthorToAuthor]])]) : '']);
    }
  }]);

  return Home;
}(migi.Component);

migi.name(Home, "Home");exports.default = Home;

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

var _HotPlayList = __webpack_require__(17);

var _HotPlayList2 = _interopRequireDefault(_HotPlayList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var take = 30;
var skip = take;
var loading = void 0;
var loadEnd = void 0;
var hidden = void 0;

var MAList = function (_migi$Component) {
  _inherits(MAList, _migi$Component);

  function MAList() {
    var _ref;

    _classCallCheck(this, MAList);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MAList.__proto__ || Object.getPrototypeOf(MAList)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    hidden = _this.props.hidden;
    self.on(migi.Event.DOM, function () {
      var $window = $(window);
      $window.on('scroll', function () {
        self.checkMore($window);
      });
      if (self.props.dataList.Size <= take) {
        loadEnd = true;
        self.ref.hotPlayList.message = '已经到底了';
      }
    });
    return _this;
  }

  _createClass(MAList, [{
    key: "checkMore",
    value: function checkMore($window) {
      if (hidden || loading || loadEnd) {
        return;
      }
      var self = this;
      var WIN_HEIGHT = $window.height();
      var HEIGHT = $(document.body).height();
      var bool = void 0;
      bool = $window.scrollTop() + WIN_HEIGHT + 30 > HEIGHT;
      if (bool) {
        self.load();
      }
    }
  }, {
    key: "load",
    value: function load() {
      var self = this;
      var hotPlayList = self.ref.hotPlayList;
      loading = true;
      hotPlayList.message = '正在加载...';
      _net2.default.postJSON('/api/author/maList', { authorID: self.props.authorID, skip: skip, take: take }, function (res) {
        if (res.success) {
          var data = res.data;
          skip += take;
          if (data.data.length) {
            hotPlayList.appendData(res.data.data);
          }
          if (skip >= data.Size) {
            hotPlayList.message = '已经到底了';
            loadEnd = true;
          } else {
            hotPlayList.message = '';
          }
        } else {
          hotPlayList.message = res.message || _util2.default.ERROR_MESSAGE;
        }
        loading = false;
      }, function (res) {
        hotPlayList.message = res.message || _util2.default.ERROR_MESSAGE;
        loading = false;
      });
    }
  }, {
    key: "show",
    value: function show() {
      var self = this;
      $(self.element).removeClass('fn-hide');
      hidden = false;
    }
  }, {
    key: "hide",
    value: function hide() {
      var self = this;
      $(self.element).addClass('fn-hide');
      hidden = true;
    }
  }, {
    key: "render",
    value: function render() {
      return migi.createVd("div", [["class", 'ma-list' + (this.props.hidden ? ' fn-hide' : '')]], [migi.createCp(_HotPlayList2.default, [["ref", "hotPlayList"], ["dataList", this.props.dataList.data]])]);
    }
  }]);

  return MAList;
}(migi.Component);

migi.name(MAList, "MAList");exports.default = MAList;

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

var _Comment = __webpack_require__(19);

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var take = 30;
var skip = take;
var sortType = 0;
var myComment = 0;
var currentCount = 0;
var ajax = void 0;
var loading = void 0;
var loadEnd = void 0;
var hidden = void 0;

var Comments = function (_migi$Component) {
  _inherits(Comments, _migi$Component);

  function Comments() {
    var _ref;

    _classCallCheck(this, Comments);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Comments.__proto__ || Object.getPrototypeOf(Comments)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    hidden = _this.props.hidden;
    self.authorID = self.props.authorID;
    self.on(migi.Event.DOM, function () {
      var $window = $(window);
      $window.on('scroll', function () {
        self.checkMore($window);
      });
      if (self.props.commentData.Size <= take) {
        loadEnd = true;
        self.ref.comment.message = '已经到底了';
      }
    });
    return _this;
  }

  _createClass(Comments, [{
    key: 'show',
    value: function show() {
      var self = this;
      $(self.element).removeClass('fn-hide');
      hidden = false;
    }
  }, {
    key: 'hide',
    value: function hide() {
      var self = this;
      $(self.element).addClass('fn-hide');
      hidden = true;
    }
  }, {
    key: 'checkMore',
    value: function checkMore($window) {
      if (hidden || loading || loadEnd) {
        return;
      }
      var self = this;
      var WIN_HEIGHT = $window.height();
      var HEIGHT = $(document.body).height();
      var bool = void 0;
      bool = $window.scrollTop() + WIN_HEIGHT + 30 > HEIGHT;
      if (bool) {
        self.load();
      }
    }
  }, {
    key: 'load',
    value: function load() {
      var self = this;
      var comment = self.ref.comment;
      if (ajax) {
        ajax.abort();
      }
      loading = true;
      comment.message = '正在加载...';
      ajax = _net2.default.postJSON('/h5/author/commentList', { authorID: self.authorID, skip: skip, take: take, sortType: sortType, myComment: myComment, currentCount: currentCount }, function (res) {
        if (res.success) {
          var data = res.data;
          skip += take;
          if (data.data.length) {
            comment.appendData(data.data);
          }
          if (skip >= data.Size) {
            loadEnd = true;
            comment.message = '已经到底了';
          } else {
            comment.message = '';
          }
        } else {
          if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
          }
        }
        loading = false;
      }, function (res) {
        jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
        loading = false;
      });
    }
  }, {
    key: 'switchType',
    value: function switchType(e, vd) {
      var $ul = $(vd.element);
      $ul.toggleClass('alt');
      $ul.find('li').toggleClass('cur');
      var rel = $ul.find('.cur').attr('rel');
      currentCount = 0;
      sortType = rel;
      skip = 0;
      if (ajax) {
        ajax.abort();
      }
      loadEnd = false;
      loading = false;
      this.ref.comment.clearData();
      this.load();
    }
  }, {
    key: 'switchType2',
    value: function switchType2(e, vd) {
      var $ul = $(vd.element);
      $ul.toggleClass('alt');
      $ul.find('li').toggleClass('cur');
      var rel = $ul.find('.cur').attr('rel');
      currentCount = 0;
      myComment = rel;
      skip = 0;
      if (ajax) {
        ajax.abort();
      }
      loadEnd = false;
      loading = false;
      this.ref.comment.clearData();
      this.load();
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", 'comments' + (this.props.hidden ? ' fn-hide' : '')]], [migi.createVd("div", [["class", "fn"]], [migi.createVd("ul", [["class", "type fn-clear"], ["onClick", [[{ "li": { "_v": true } }, new migi.Cb(this, this.switchType2)]]]], [migi.createVd("li", [["class", "cur"], ["rel", "0"]], ["全部评论", migi.createVd("small", [], [this.props.commentData.Count])]), this.props.isLogin ? migi.createVd("li", [["rel", "1"]], ["我的"]) : '']), migi.createVd("ul", [["class", "type2 fn-clear"], ["onClick", [[{ "li": { "_v": true } }, new migi.Cb(this, this.switchType)]]]], [migi.createVd("li", [["class", "cur"], ["rel", "0"]], ["最新"]), migi.createVd("li", [["rel", "1"]], ["最热"])])]), migi.createCp(_Comment2.default, [["ref", "comment"], ["zanUrl", "/h5/author/likeComment"], ["subUrl", "/h5/author/subCommentList"], ["delUrl", "/h5/author/delComment"], ["data", this.props.commentData.data], ["message", !this.props.commentData.Size || this.props.commentData.Size > take ? '' : '已经到底了']])]);
    }
  }, {
    key: 'authorID',
    set: function set(v) {
      this.__setBind("authorID", v);this.__data("authorID");
    },
    get: function get() {
      return this.__getBind("authorID");
    }
  }]);

  return Comments;
}(migi.Component);

migi.name(Comments, "Comments");exports.default = Comments;

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by army8735 on 2017/8/13.
 */

var code2Data = {
  '901': {
    name: '出品',
    display: '出品',
    css: 'ce'
  },
  '902': {
    name: '策划',
    display: '策划',
    css: 'ce'
  },
  '111': {
    name: '演唱',
    display: '演唱',
    css: 'ge'
  },
  '112': {
    name: '和声',
    display: '和声'
  },
  '113': {
    name: '伴唱',
    display: '伴唱'
  },
  '114': {
    name: '戏腔',
    display: '戏腔'
  },
  '115': {
    name: '合唱',
    display: '合唱',
    css: 'ge'
  },
  '121': {
    name: '作曲',
    display: '作曲',
    css: 'qu'
  },
  '122': {
    name: '编曲',
    display: '编曲',
    css: 'qu'
  },
  '131': {
    name: '混音',
    display: '混音',
    css: 'hun'
  },
  '132': {
    name: '母带',
    display: '母带',
    css: 'hun'
  },
  '133': {
    name: '录音',
    display: '录音'
  },
  '134': {
    name: '修音',
    display: '修音',
    css: 'hun'
  },
  '141': {
    name: '演奏',
    display: '演奏', //优先显示乐器名。
    css: 'yue'
  },
  '151': {
    name: '配音',
    display: '配音',
    css: 'cv'
  },
  '211': {
    name: '视频',
    display: '视频',
    css: 'ying'
  },
  '212': {
    name: '压制',
    display: '压制',
    css: 'ying'
  },
  '213': {
    name: '拍摄',
    display: '拍摄',
    css: 'ying'
  },
  '311': {
    name: '立绘',
    display: '立绘',
    css: 'tu'
  },
  '312': {
    name: 'CG',
    display: 'CG',
    css: 'tu'
  },
  '313': {
    name: '场景',
    display: '场景',
    css: 'tu'
  },
  '314': {
    name: '线稿',
    display: '线稿',
    css: 'tu'
  },
  '315': {
    name: '上色',
    display: '上色',
    css: 'tu'
  },
  '316': {
    name: '手绘',
    display: '手绘',
    css: 'tu'
  },
  '317': {
    name: '插画',
    display: '插画',
    css: 'tu'
  },
  '331': {
    name: '设计',
    display: '设计',
    css: 'she'
  },
  '332': {
    name: '海报',
    display: '海报',
    css: 'she'
  },
  '333': {
    name: 'Logo设计',
    display: 'Logo设计',
    css: 'she'
  },
  '341': {
    name: '漫画',
    display: '漫画',
    css: 'tu'
  },
  '351': {
    name: '书法',
    display: '书法',
    css: 'ji'
  },
  '391': {
    name: '沙画',
    display: '沙画',
    css: 'ji'
  },
  '411': {
    name: '作词',
    display: '作词',
    css: 'wen'
  },
  '421': {
    name: '文案',
    display: '文案',
    css: 'wen'
  },
  '422': {
    name: '剧本',
    display: '剧本',
    css: 'wen'
  },
  '423': {
    name: '小说',
    display: '小说',
    css: 'wen'
  }
};

var label2Code = {};
Object.keys(code2Data).forEach(function (k) {
  var v = code2Data[k];
  label2Code[v.css] = label2Code[v.css] || [];
  label2Code[v.css].push(k);
});

exports.default = {
  code2Data: code2Data,
  label2Code: label2Code
};

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HotPlayList = function (_migi$Component) {
  _inherits(HotPlayList, _migi$Component);

  function HotPlayList() {
    var _ref;

    _classCallCheck(this, HotPlayList);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = HotPlayList.__proto__ || Object.getPrototypeOf(HotPlayList)).call.apply(_ref, [this].concat(data)));

    _this.dataList = _this.props.dataList;
    return _this;
  }

  _createClass(HotPlayList, [{
    key: 'show',
    value: function show() {
      $(this.element).removeClass('fn-hide');
    }
  }, {
    key: 'hide',
    value: function hide() {
      $(this.element).addClass('fn-hide');
    }
  }, {
    key: 'appendData',
    value: function appendData(data) {
      var s = '';
      (data || []).forEach(function (item) {
        s += this.genItem(item);
      }.bind(this));
      $(this.ref.list.element).append(s);
    }
  }, {
    key: 'genItem',
    value: function genItem(item) {
      var url = '/works.html?worksID=' + item.WorksID + '&workID=' + item.ItemID;
      var type = '';
      if (item.ItemType === 1111 || item.ItemType === 1113) {
        type = 'audio';
      } else if (item.ItemType === 2110) {
        type = 'video';
      }
      if (item.WorksState === 3) {
        return migi.createVd("li", [["class", "private"]], [migi.createVd("span", [["class", "name"]], ["待揭秘"])]);
      }
      var author = (item.Works_Item_Author || []).filter(function (item) {
        return item.WorksAuthorType === '111';
      }).map(function (item) {
        return item.AuthName;
      });
      if (item.WorksState === 2) {
        return migi.createVd("li", [["class", type + ' rel']], [migi.createVd("a", [["href", url], ["class", "pic"]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img108_108_80(item.WorksCoverPic || '//zhuanquan.xin/img/blank.png'))]])]), migi.createVd("a", [["href", url], ["class", 'name' + (item.ItemName ? '' : ' empty')]], [item.ItemName || '待揭秘']), migi.createVd("p", [["class", "author"]], [author.join(' ')])]);
      }
      return migi.createVd("li", [["class", type + ' rel']], [migi.createVd("a", [["href", url], ["class", "pic"]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img108_108_80(item.WorksCoverPic || '//zhuanquan.xin/img/blank.png'))]])]), migi.createVd("a", [["href", url], ["class", 'name' + (item.ItemName ? '' : ' empty')]], [item.ItemName || '待揭秘']), migi.createVd("p", [["class", "author"]], [author.join(' ')]), migi.createVd("span", [["class", "icon"]])]);
    }
  }, {
    key: 'click',
    value: function click(e, vd, tvd) {
      e.preventDefault();
      var href = tvd.props.href;
      var title = tvd.props.title;
      jsBridge.pushWindow(href, {
        title: title
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "cp-hotplaylist"], ["onClick", [[{ "a": { "_v": true } }, new migi.Cb(this, this.click)]]]], [migi.createVd("ol", [["class", "list"], ["ref", "list"]], [new migi.Obj("dataList", this, function () {
        return (this.dataList || []).map(function (item) {
          return this.genItem(item);
        }.bind(this));
      })]), migi.createVd("div", [["class", new migi.Obj("message", this, function () {
        return 'cp-message' + (this.message ? '' : ' fn-hide');
      })]], [new migi.Obj("message", this, function () {
        return this.message;
      })])]);
    }
  }, {
    key: 'hasData',
    set: function set(v) {
      this.__setBind("hasData", v);this.__data("hasData");
    },
    get: function get() {
      return this.__getBind("hasData");
    }
  }, {
    key: 'dataList',
    set: function set(v) {
      this.__setBind("dataList", v);this.__data("dataList");
    },
    get: function get() {
      return this.__getBind("dataList");
    }
  }, {
    key: 'message',
    set: function set(v) {
      this.__setBind("message", v);this.__data("message");
    },
    get: function get() {
      return this.__getBind("message");
    }
  }]);

  return HotPlayList;
}(migi.Component);

migi.name(HotPlayList, "HotPlayList");exports.default = HotPlayList;

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NOT_LOADED = 0;
var IS_LOADING = 1;
var HAS_LOADED = 2;
var subLoadHash = {};
var subSkipHash = {};
var $last = void 0;
var take = 10;
var ajax = void 0;

var Comment = function (_migi$Component) {
  _inherits(Comment, _migi$Component);

  function Comment() {
    var _ref;

    _classCallCheck(this, Comment);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Comment.__proto__ || Object.getPrototypeOf(Comment)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    var html = '';
    (self.props.data || []).forEach(function (item) {
      html += self.genComment(item);
    });
    self.html = html;
    self.message = self.props.message;
    if (!self.props.data || self.props.data.length === 0) {
      self.empty = true;
    }

    self.on(migi.Event.DOM, function () {
      var $root = $(self.element);
      $root.on('click', '.like', function () {
        var $elem = $(this);
        var commentID = $elem.attr('cid');
        _net2.default.postJSON(self.props.zanUrl, { commentID: commentID }, function (res) {
          if (res.success) {
            var _data = res.data;
            if (_data.State === 'likeWordsUser') {
              $elem.addClass('liked');
            } else {
              $elem.removeClass('liked');
            }
            $elem.text(_data.LikeCount);
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
          }
        });
      });
      $root.on('click', '.slide .sub, .slide span', function () {
        self.slide($(this).closest('li'));
      });
      $root.on('click', '.list>li>.c>pre', function () {
        self.slide($(this).closest('li'));
      });
      $root.on('click', '.list2 pre, .slide2 .sub', function () {
        var $this = $(this);
        var $li = $this.closest('li');
        if ($li.hasClass('on')) {
          $li.removeClass('on');
          var $slide = $last.find('.slide');
          self.emit('chooseSubComment', $slide.attr('rid'), $slide.attr('cid'), $slide.attr('name'));
        } else {
          $li.parent().find('.on').removeClass('on');
          $li.addClass('on');
          self.emit('chooseSubComment', $this.attr('rid'), $this.attr('cid'), $this.attr('name'));
        }
      });
      $root.on('click', '.more', function () {
        var $message = $(this);
        var rid = $message.attr('rid');
        $message.removeClass('more').text('读取中...');
        ajax = _net2.default.postJSON(self.props.subUrl, { rootID: rid, skip: subSkipHash[rid], take: take }, function (res) {
          if (res.success) {
            var _data2 = res.data;
            if (_data2.data.length) {
              subSkipHash[rid] += _data2.data.length;
              var s = '';
              _data2.data.forEach(function (item) {
                s += self.genChildComment(item);
              });
              var $ul = $message.prev();
              $ul.append(s);
              if (_data2.data.length < take) {
                $message.addClass('fn-hide');
              } else {
                $message.addClass('more').text('点击加载更多');
              }
            } else {
              $message.addClass('fn-hide');
            }
          } else {
            $message.addClass('more').text(res.message || _util2.default.ERROR_MESSAGE);
          }
        }, function (res) {
          $message.addClass('more').text(res.message || _util2.default.ERROR_MESSAGE);
        });
      });
      $root.on('click', '.remove', function () {
        var $btn = $(this);
        jsBridge.confirm('会删除子留言哦，确定要删除吗？', function () {
          var cid = $btn.attr('cid');
          _net2.default.postJSON(self.props.delUrl, { commentID: cid }, function (res) {
            if (res.success) {
              $btn.closest('li').remove();
              self.empty = !$(self.ref.list.element).children('li').length;
            } else if (res.code === 1000) {
              migi.eventBus.emit('NEED_LOGIN');
            } else {
              jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
            }
          }, function (res) {
            jsBridge.toast(res.message || _util2.default.ERROR_MESSAGE);
          });
        });
      });
      $root.on('click', 'a', function (e) {
        e.preventDefault();
        var $this = $(this);
        var url = $this.attr('href');
        var title = $this.attr('title');
        jsBridge.pushWindow(url, {
          title: title
        });
      });
      migi.eventBus.on('subCmtDelTo', function () {
        if ($last && $last.hasClass('on')) {
          self.hideLast();
          self.emit('closeSubComment');
        }
      });
    });
    return _this;
  }

  _createClass(Comment, [{
    key: 'slide',
    value: function slide($li) {
      var self = this;
      if (ajax) {
        ajax.abort();
      }
      var $slide = $li.find('.slide');
      var $list2 = $li.find('.list2');
      var $ul = $list2.find('ul');
      var $message = $list2.find('.message');
      var rid = $slide.attr('rid');
      if ($last && $last[0] !== $li[0] && $last.hasClass('on')) {
        self.hideLast();
      }
      if ($li.hasClass('on')) {
        $li.removeClass('on');
        $li.find('li.on').removeClass('on');
        $list2.css('height', 0);
        self.emit('closeSubComment');
        $last = null;
        if (subLoadHash[rid] === IS_LOADING) {
          subLoadHash[rid] = NOT_LOADED;
        }
      } else {
        $last = $li;
        $li.addClass('on');
        self.emit('chooseSubComment', $slide.attr('rid'), $slide.attr('cid'), $slide.attr('name'), $slide.find('.sub').text());
        var state = subLoadHash[rid];
        if (state === HAS_LOADED || state === IS_LOADING) {
          $list2.css('height', 'auto');
        } else {
          $list2.css('height', 'auto');
          subLoadHash[rid] = IS_LOADING;
          ajax = _net2.default.postJSON(self.props.subUrl, { rootID: rid, skip: 0, take: take }, function (res) {
            if (res.success) {
              subLoadHash[rid] = HAS_LOADED;
              var s = '';
              var data = res.data;
              data.data.forEach(function (item) {
                s += self.genChildComment(item);
              });
              $ul.append(s);
              if (data.data.length >= data.Size) {
                $message.addClass('fn-hide');
              } else {
                $message.addClass('more').text('点击加载更多');
                subSkipHash[rid] = data.data.length;
              }
              $ul.removeClass('fn-hide');
              $list2.css('height', 'auto');
            } else {
              subLoadHash[rid] = NOT_LOADED;
              $message.text(res.message || _util2.default.ERROR_MESSAGE);
            }
          }, function (res) {
            subLoadHash[rid] = NOT_LOADED;
            $message.text(res.message || _util2.default.ERROR_MESSAGE);
          });
        }
      }
    }
  }, {
    key: 'slideOn',
    value: function slideOn(cid) {
      var $slide = $(this.element).find('#comment_' + cid).find('.slide');
      if (!$slide.hasClass('on')) {
        $slide.find('.sub').click();
      }
    }
  }, {
    key: 'clearData',
    value: function clearData(noEmpty) {
      if (ajax) {
        ajax.abort();
      }
      this.message = '';
      this.setData(null, noEmpty);
      subLoadHash = {};
      subSkipHash = {};
      $last = null;
    }
  }, {
    key: 'setData',
    value: function setData(data, noEmpty) {
      var self = this;
      var s = '';
      (data || []).forEach(function (item) {
        s += self.genComment(item);
      });
      $(self.ref.list.element).html(s);
      self.empty = !noEmpty && !s;
    }
  }, {
    key: 'appendData',
    value: function appendData(data) {
      var self = this;
      var s = '';
      (data || []).forEach(function (item) {
        s += self.genComment(item);
      });
      $(self.ref.list.element).append(s);
      if (self.empty) {
        if (s) {
          self.empty = false;
        }
      }
    }
  }, {
    key: 'prependData',
    value: function prependData(item) {
      this.genComment(item).prependTo(this.ref.list.element);
      this.empty = false;
    }
  }, {
    key: 'prependChild',
    value: function prependChild(item, parentID) {
      var $comment = $('#comment_' + item.RootID);
      var $list2 = $comment.find('.list2');
      var $ul = $list2.find('ul');
      var state = subLoadHash[item.RootID];
      if (state === HAS_LOADED || state === IS_LOADING) {
        var li = this.genChildComment(item);
        li.prependTo($ul[0]);
      }
      if ($ul.closest('li').find('.slide').hasClass('on')) {
        $list2.css('height', $ul.height());
      }
      var $num = $comment.find('.slide small.sub');
      $num.text((parseInt($num.text()) || 0) + 1);
      // if(item.RootID !== parentID) {
      //   let $num = $('#comment_' + parentID).find('small.sub');
      //   $num.text((parseInt($num.text()) || 0) + 1);
      // }
    }
  }, {
    key: 'genComment',
    value: function genComment(item) {
      if (item.IsAuthor) {
        return migi.createVd("li", [["class", "author"], ["id", 'comment_' + item.Send_ID]], [migi.createVd("div", [["class", "t fn-clear"]], [migi.createVd("div", [["class", "profile fn-clear"]], [migi.createVd("a", [["class", "pic"], ["href", '/author.html?authorID=' + item.IsAuthor], ["title", item.Send_AuthorName]], [migi.createVd("img", [["class", "pic"], ["src", _util2.default.autoSsl(_util2.default.img60_60_80(item.Send_AuthorHeadUrl || '/src/common/head.png'))]])]), migi.createVd("div", [["class", "txt"]], [migi.createVd("a", [["class", "name"], ["href", '/author?authorID=' + item.IsAuthor], ["title", item.Send_AuthorName]], [item.Send_AuthorName]), migi.createVd("small", [["class", "time"], ["rel", item.Send_Time]], [_util2.default.formatDate(item.Send_Time)])])]), migi.createVd("div", [["class", "fn fn-clear"]], [item.ISOwn ? migi.createVd("span", [["cid", item.Send_ID], ["class", "remove"]], ["删除"]) : ''])]), migi.createVd("div", [["class", "c"]], [migi.createVd("pre", [], [item.Send_Content, migi.createVd("span", [["class", "placeholder"]])]), migi.createVd("div", [["class", "slide"], ["cid", item.Send_ID], ["rid", item.Send_ID], ["name", item.Send_AuthorName]], [migi.createVd("small", [["cid", item.Send_ID], ["class", 'like' + (item.IsLike ? ' liked' : '')]], [item.LikeCount]), migi.createVd("small", [["class", "sub"]], [item.sub_Count]), migi.createVd("span", [], ["收起"])]), migi.createVd("b", [["class", "arrow"]])]), migi.createVd("div", [["class", "list2"]], [migi.createVd("ul", [["class", "fn-hide"]]), migi.createVd("p", [["class", "message"], ["cid", item.Send_ID], ["rid", item.Send_ID]], ["读取中..."])])]);
      }
      return migi.createVd("li", [["id", 'comment_' + item.Send_ID]], [migi.createVd("div", [["class", "t fn-clear"]], [migi.createVd("div", [["class", "profile fn-clear"]], [migi.createVd("a", [["class", "pic"], ["href", '/user.html?userID=' + item.Send_UserID], ["title", item.Send_UserName]], [migi.createVd("img", [["class", "pic"], ["src", _util2.default.autoSsl(_util2.default.img60_60_80(item.Send_UserHeadUrl || '/src/common/head.png'))]])]), migi.createVd("div", [["class", "txt"]], [migi.createVd("a", [["class", "name"], ["href", '/user.html?userID=' + item.Send_UserID], ["title", item.Send_UserName]], [item.Send_UserName]), migi.createVd("small", [["class", "time"], ["rel", item.Send_Time]], [_util2.default.formatDate(item.Send_Time)])])]), migi.createVd("div", [["class", "fn fn-clear"]], [item.ISOwn ? migi.createVd("span", [["cid", item.Send_ID], ["class", "remove"]], ["删除"]) : ''])]), migi.createVd("div", [["class", "c"]], [migi.createVd("pre", [], [item.Send_Content, migi.createVd("span", [["class", "placeholder"]])]), migi.createVd("div", [["class", "slide"], ["cid", item.Send_ID], ["rid", item.Send_ID], ["name", item.Send_UserName]], [migi.createVd("small", [["cid", item.Send_ID], ["class", 'like' + (item.IsLike ? ' liked' : '')]], [item.LikeCount]), migi.createVd("small", [["class", "sub"]], [item.sub_Count]), migi.createVd("span", [], ["收起"])]), migi.createVd("b", [["class", "arrow"]])]), migi.createVd("div", [["class", "list2"]], [migi.createVd("ul", [["class", "fn-hide"]]), migi.createVd("p", [["class", "message"], ["cid", item.Send_ID], ["rid", item.Send_ID]], ["读取中..."])])]);
    }
  }, {
    key: 'genChildComment',
    value: function genChildComment(item) {
      if (item.IsAuthor) {
        return migi.createVd("li", [["class", "author"], ["id", 'comment_' + item.Send_ID]], [migi.createVd("div", [["class", "t fn-clear"]], [migi.createVd("div", [["class", "profile fn-clear"], ["cid", item.Send_ID], ["rid", item.RootID], ["title", item.Send_AuthorName]], [migi.createVd("a", [["class", "pic"], ["href", '/author.html?authorID=' + item.IsAuthor], ["name", item.Send_AuthorName]], [migi.createVd("img", [["class", "pic"], ["src", _util2.default.autoSsl(_util2.default.img60_60_80(item.Send_AuthorHeadUrl || '/src/common/head.png'))]])]), migi.createVd("div", [["class", "txt"]], [migi.createVd("small", [["class", "time"], ["rel", item.Send_Time]], [_util2.default.formatDate(item.Send_Time)]), migi.createVd("a", [["class", "name"], ["href", '/author.html?authorID=' + item.IsAuthor], ["title", item.Send_AuthorName]], [item.Send_AuthorName])])]), migi.createVd("div", [["class", "fn fn-clear"]], [item.ISOwn ? migi.createVd("span", [["cid", item.Send_ID], ["class", "remove"]], ["删除"]) : ''])]), migi.createVd("div", [["class", "c"]], [item.Content ? migi.createVd("p", [["class", "quote"]], [migi.createVd("label", [], ["回复@", item.Send_ToUserName, "："]), migi.createVd("span", [], [item.Content])]) : '', migi.createVd("pre", [["cid", item.Send_ID], ["rid", item.RootID], ["name", item.Send_AuthorName]], [item.Send_Content]), migi.createVd("div", [["class", "slide2"]], [migi.createVd("small", [["cid", item.Send_ID], ["class", 'like' + (item.IsLike ? ' liked' : '')]], [item.LikeCount]), migi.createVd("small", [["class", "sub"], ["cid", item.Send_ID], ["rid", item.RootID], ["name", item.Send_AuthorName]], ["回复"])]), migi.createVd("b", [["class", "arrow"]])])]);
      }
      return migi.createVd("li", [["id", 'comment_' + item.Send_ID]], [migi.createVd("div", [["class", "t fn-clear"]], [migi.createVd("div", [["class", "profile fn-clear"], ["cid", item.Send_ID], ["rid", item.RootID], ["name", item.Send_UserName]], [migi.createVd("a", [["class", "pic"], ["href", '/user.html?userID=' + item.Send_UserID], ["title", item.Send_UserName]], [migi.createVd("img", [["class", "pic"], ["src", _util2.default.autoSsl(_util2.default.img60_60_80(item.Send_UserHeadUrl || '/src/common/head.png'))]])]), migi.createVd("div", [["class", "txt"]], [migi.createVd("small", [["class", "time"], ["rel", item.Send_Time]], [_util2.default.formatDate(item.Send_Time)]), migi.createVd("a", [["class", "name"], ["href", '/user.html?userID=' + item.Send_UserID], ["title", item.Send_UserName]], [item.Send_UserName])])]), migi.createVd("div", [["class", "fn fn-clear"]], [item.ISOwn ? migi.createVd("span", [["cid", item.Send_ID], ["class", "remove"]], ["删除"]) : ''])]), migi.createVd("div", [["class", "c"]], [item.Content ? migi.createVd("p", [["class", "quote"]], [migi.createVd("label", [], ["回复@", item.Send_ToUserName, "："]), migi.createVd("span", [], [item.Content])]) : '', migi.createVd("pre", [["cid", item.Send_ID], ["rid", item.RootID], ["name", item.Send_UserName]], [item.Send_Content]), migi.createVd("div", [["class", "slide2"]], [migi.createVd("small", [["cid", item.Send_ID], ["class", 'like' + (item.IsLike ? ' liked' : '')]], [item.LikeCount]), migi.createVd("small", [["class", "sub"], ["cid", item.Send_ID], ["rid", item.RootID], ["name", item.Send_UserName]], ["回复"])]), migi.createVd("b", [["class", "arrow"]])])]);
    }
  }, {
    key: 'hideLast',
    value: function hideLast() {
      if ($last && $last.hasClass('on')) {
        $last.removeClass('on').find('.list2').css('height', 0).find('li.on').removeClass('on');
      }
      $last = null;
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "cp-comment"]], [migi.createVd("ul", [["class", "list"], ["ref", "list"], ["dangerouslySetInnerHTML", this.html]]), migi.createVd("p", [["class", new migi.Obj("empty", this, function () {
        return 'empty' + (this.empty ? '' : ' fn-hide');
      })]], ["这儿空空的，需要你的留言噢(* ॑꒳ ॑* )"]), migi.createVd("p", [["class", new migi.Obj("message", this, function () {
        return 'message' + (this.message ? '' : ' fn-hide');
      })]], [new migi.Obj("message", this, function () {
        return this.message;
      })])]);
    }
  }, {
    key: 'message',
    set: function set(v) {
      this.__setBind("message", v);this.__data("message");
    },
    get: function get() {
      return this.__getBind("message");
    }
  }, {
    key: 'empty',
    set: function set(v) {
      this.__setBind("empty", v);this.__data("empty");
    },
    get: function get() {
      return this.__getBind("empty");
    }
  }]);

  return Comment;
}(migi.Component);

migi.name(Comment, "Comment");exports.default = Comment;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! bignumber.js v4.1.0 https://github.com/MikeMcl/bignumber.js/LICENCE */

;(function (globalObj) {
    'use strict';

    /*
      bignumber.js v4.1.0
      A JavaScript library for arbitrary-precision arithmetic.
      https://github.com/MikeMcl/bignumber.js
      Copyright (c) 2017 Michael Mclaughlin <M8ch88l@gmail.com>
      MIT Expat Licence
    */

    var BigNumber,
        isNumeric = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        mathceil = Math.ceil,
        mathfloor = Math.floor,
        notBool = ' not a boolean or binary digit',
        roundingMode = 'rounding mode',
        tooManyDigits = 'number type has more than 15 significant digits',
        ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_',
        BASE = 1e14,
        LOG_BASE = 14,
        MAX_SAFE_INTEGER = 0x1fffffffffffff,
        // 2^53 - 1
    // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
    POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
        SQRT_BASE = 1e7,


    /*
     * The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
     * the arguments to toExponential, toFixed, toFormat, and toPrecision, beyond which an
     * exception is thrown (if ERRORS is true).
     */
    MAX = 1E9; // 0 to MAX_INT32


    /*
     * Create and return a BigNumber constructor.
     */
    function constructorFactory(config) {
        var div,
            parseNumeric,


        // id tracks the caller function, so its name can be included in error messages.
        id = 0,
            P = BigNumber.prototype,
            ONE = new BigNumber(1),


        /********************************* EDITABLE DEFAULTS **********************************/

        /*
         * The default values below must be integers within the inclusive ranges stated.
         * The values can also be changed at run-time using BigNumber.config.
         */

        // The maximum number of decimal places for operations involving division.
        DECIMAL_PLACES = 20,
            // 0 to MAX

        /*
         * The rounding mode used when rounding to the above decimal places, and when using
         * toExponential, toFixed, toFormat and toPrecision, and round (default value).
         * UP         0 Away from zero.
         * DOWN       1 Towards zero.
         * CEIL       2 Towards +Infinity.
         * FLOOR      3 Towards -Infinity.
         * HALF_UP    4 Towards nearest neighbour. If equidistant, up.
         * HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
         * HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
         * HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
         * HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
         */
        ROUNDING_MODE = 4,
            // 0 to 8

        // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

        // The exponent value at and beneath which toString returns exponential notation.
        // Number type: -7
        TO_EXP_NEG = -7,
            // 0 to -MAX

        // The exponent value at and above which toString returns exponential notation.
        // Number type: 21
        TO_EXP_POS = 21,
            // 0 to MAX

        // RANGE : [MIN_EXP, MAX_EXP]

        // The minimum exponent value, beneath which underflow to zero occurs.
        // Number type: -324  (5e-324)
        MIN_EXP = -1e7,
            // -1 to -MAX

        // The maximum exponent value, above which overflow to Infinity occurs.
        // Number type:  308  (1.7976931348623157e+308)
        // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
        MAX_EXP = 1e7,
            // 1 to MAX

        // Whether BigNumber Errors are ever thrown.
        ERRORS = true,
            // true or false

        // Change to intValidatorNoErrors if ERRORS is false.
        isValidInt = intValidatorWithErrors,
            // intValidatorWithErrors/intValidatorNoErrors

        // Whether to use cryptographically-secure random number generation, if available.
        CRYPTO = false,
            // true or false

        /*
         * The modulo mode used when calculating the modulus: a mod n.
         * The quotient (q = a / n) is calculated according to the corresponding rounding mode.
         * The remainder (r) is calculated as: r = a - n * q.
         *
         * UP        0 The remainder is positive if the dividend is negative, else is negative.
         * DOWN      1 The remainder has the same sign as the dividend.
         *             This modulo mode is commonly known as 'truncated division' and is
         *             equivalent to (a % n) in JavaScript.
         * FLOOR     3 The remainder has the same sign as the divisor (Python %).
         * HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
         * EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
         *             The remainder is always positive.
         *
         * The truncated division, floored division, Euclidian division and IEEE 754 remainder
         * modes are commonly used for the modulus operation.
         * Although the other rounding modes can also be used, they may not give useful results.
         */
        MODULO_MODE = 1,
            // 0 to 9

        // The maximum number of significant digits of the result of the toPower operation.
        // If POW_PRECISION is 0, there will be unlimited significant digits.
        POW_PRECISION = 0,
            // 0 to MAX

        // The format specification used by the BigNumber.prototype.toFormat method.
        FORMAT = {
            decimalSeparator: '.',
            groupSeparator: ',',
            groupSize: 3,
            secondaryGroupSize: 0,
            fractionGroupSeparator: '\xA0', // non-breaking space
            fractionGroupSize: 0
        };

        /******************************************************************************************/

        // CONSTRUCTOR


        /*
         * The BigNumber constructor and exported function.
         * Create and return a new instance of a BigNumber object.
         *
         * n {number|string|BigNumber} A numeric value.
         * [b] {number} The base of n. Integer, 2 to 64 inclusive.
         */
        function BigNumber(n, b) {
            var c,
                e,
                i,
                num,
                len,
                str,
                x = this;

            // Enable constructor usage without new.
            if (!(x instanceof BigNumber)) {

                // 'BigNumber() constructor call without new: {n}'
                if (ERRORS) raise(26, 'constructor call without new', n);
                return new BigNumber(n, b);
            }

            // 'new BigNumber() base not an integer: {b}'
            // 'new BigNumber() base out of range: {b}'
            if (b == null || !isValidInt(b, 2, 64, id, 'base')) {

                // Duplicate.
                if (n instanceof BigNumber) {
                    x.s = n.s;
                    x.e = n.e;
                    x.c = (n = n.c) ? n.slice() : n;
                    id = 0;
                    return;
                }

                if ((num = typeof n == 'number') && n * 0 == 0) {
                    x.s = 1 / n < 0 ? (n = -n, -1) : 1;

                    // Fast path for integers.
                    if (n === ~~n) {
                        for (e = 0, i = n; i >= 10; i /= 10, e++) {}
                        x.e = e;
                        x.c = [n];
                        id = 0;
                        return;
                    }

                    str = n + '';
                } else {
                    if (!isNumeric.test(str = n + '')) return parseNumeric(x, str, num);
                    x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
                }
            } else {
                b = b | 0;
                str = n + '';

                // Ensure return value is rounded to DECIMAL_PLACES as with other bases.
                // Allow exponential notation to be used with base 10 argument.
                if (b == 10) {
                    x = new BigNumber(n instanceof BigNumber ? n : str);
                    return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
                }

                // Avoid potential interpretation of Infinity and NaN as base 44+ values.
                // Any number in exponential form will fail due to the [Ee][+-].
                if ((num = typeof n == 'number') && n * 0 != 0 || !new RegExp('^-?' + (c = '[' + ALPHABET.slice(0, b) + ']+') + '(?:\\.' + c + ')?$', b < 37 ? 'i' : '').test(str)) {
                    return parseNumeric(x, str, num, b);
                }

                if (num) {
                    x.s = 1 / n < 0 ? (str = str.slice(1), -1) : 1;

                    if (ERRORS && str.replace(/^0\.0*|\./, '').length > 15) {

                        // 'new BigNumber() number type has more than 15 significant digits: {n}'
                        raise(id, tooManyDigits, n);
                    }

                    // Prevent later check for length on converted number.
                    num = false;
                } else {
                    x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
                }

                str = convertBase(str, 10, b, x.s);
            }

            // Decimal point?
            if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

            // Exponential form?
            if ((i = str.search(/e/i)) > 0) {

                // Determine exponent.
                if (e < 0) e = i;
                e += +str.slice(i + 1);
                str = str.substring(0, i);
            } else if (e < 0) {

                // Integer.
                e = str.length;
            }

            // Determine leading zeros.
            for (i = 0; str.charCodeAt(i) === 48; i++) {}

            // Determine trailing zeros.
            for (len = str.length; str.charCodeAt(--len) === 48;) {}
            str = str.slice(i, len + 1);

            if (str) {
                len = str.length;

                // Disallow numbers with over 15 significant digits if number type.
                // 'new BigNumber() number type has more than 15 significant digits: {n}'
                if (num && ERRORS && len > 15 && (n > MAX_SAFE_INTEGER || n !== mathfloor(n))) {
                    raise(id, tooManyDigits, x.s * n);
                }

                e = e - i - 1;

                // Overflow?
                if (e > MAX_EXP) {

                    // Infinity.
                    x.c = x.e = null;

                    // Underflow?
                } else if (e < MIN_EXP) {

                    // Zero.
                    x.c = [x.e = 0];
                } else {
                    x.e = e;
                    x.c = [];

                    // Transform base

                    // e is the base 10 exponent.
                    // i is where to slice str to get the first element of the coefficient array.
                    i = (e + 1) % LOG_BASE;
                    if (e < 0) i += LOG_BASE;

                    if (i < len) {
                        if (i) x.c.push(+str.slice(0, i));

                        for (len -= LOG_BASE; i < len;) {
                            x.c.push(+str.slice(i, i += LOG_BASE));
                        }

                        str = str.slice(i);
                        i = LOG_BASE - str.length;
                    } else {
                        i -= len;
                    }

                    for (; i--; str += '0') {}
                    x.c.push(+str);
                }
            } else {

                // Zero.
                x.c = [x.e = 0];
            }

            id = 0;
        }

        // CONSTRUCTOR PROPERTIES


        BigNumber.another = constructorFactory;

        BigNumber.ROUND_UP = 0;
        BigNumber.ROUND_DOWN = 1;
        BigNumber.ROUND_CEIL = 2;
        BigNumber.ROUND_FLOOR = 3;
        BigNumber.ROUND_HALF_UP = 4;
        BigNumber.ROUND_HALF_DOWN = 5;
        BigNumber.ROUND_HALF_EVEN = 6;
        BigNumber.ROUND_HALF_CEIL = 7;
        BigNumber.ROUND_HALF_FLOOR = 8;
        BigNumber.EUCLID = 9;

        /*
         * Configure infrequently-changing library-wide settings.
         *
         * Accept an object or an argument list, with one or many of the following properties or
         * parameters respectively:
         *
         *   DECIMAL_PLACES  {number}  Integer, 0 to MAX inclusive
         *   ROUNDING_MODE   {number}  Integer, 0 to 8 inclusive
         *   EXPONENTIAL_AT  {number|number[]}  Integer, -MAX to MAX inclusive or
         *                                      [integer -MAX to 0 incl., 0 to MAX incl.]
         *   RANGE           {number|number[]}  Non-zero integer, -MAX to MAX inclusive or
         *                                      [integer -MAX to -1 incl., integer 1 to MAX incl.]
         *   ERRORS          {boolean|number}   true, false, 1 or 0
         *   CRYPTO          {boolean|number}   true, false, 1 or 0
         *   MODULO_MODE     {number}           0 to 9 inclusive
         *   POW_PRECISION   {number}           0 to MAX inclusive
         *   FORMAT          {object}           See BigNumber.prototype.toFormat
         *      decimalSeparator       {string}
         *      groupSeparator         {string}
         *      groupSize              {number}
         *      secondaryGroupSize     {number}
         *      fractionGroupSeparator {string}
         *      fractionGroupSize      {number}
         *
         * (The values assigned to the above FORMAT object properties are not checked for validity.)
         *
         * E.g.
         * BigNumber.config(20, 4) is equivalent to
         * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
         *
         * Ignore properties/parameters set to null or undefined.
         * Return an object with the properties current values.
         */
        BigNumber.config = BigNumber.set = function () {
            var v,
                p,
                i = 0,
                r = {},
                a = arguments,
                o = a[0],
                has = o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) == 'object' ? function () {
                if (o.hasOwnProperty(p)) return (v = o[p]) != null;
            } : function () {
                if (a.length > i) return (v = a[i++]) != null;
            };

            // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
            // 'config() DECIMAL_PLACES not an integer: {v}'
            // 'config() DECIMAL_PLACES out of range: {v}'
            if (has(p = 'DECIMAL_PLACES') && isValidInt(v, 0, MAX, 2, p)) {
                DECIMAL_PLACES = v | 0;
            }
            r[p] = DECIMAL_PLACES;

            // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
            // 'config() ROUNDING_MODE not an integer: {v}'
            // 'config() ROUNDING_MODE out of range: {v}'
            if (has(p = 'ROUNDING_MODE') && isValidInt(v, 0, 8, 2, p)) {
                ROUNDING_MODE = v | 0;
            }
            r[p] = ROUNDING_MODE;

            // EXPONENTIAL_AT {number|number[]}
            // Integer, -MAX to MAX inclusive or [integer -MAX to 0 inclusive, 0 to MAX inclusive].
            // 'config() EXPONENTIAL_AT not an integer: {v}'
            // 'config() EXPONENTIAL_AT out of range: {v}'
            if (has(p = 'EXPONENTIAL_AT')) {

                if (isArray(v)) {
                    if (isValidInt(v[0], -MAX, 0, 2, p) && isValidInt(v[1], 0, MAX, 2, p)) {
                        TO_EXP_NEG = v[0] | 0;
                        TO_EXP_POS = v[1] | 0;
                    }
                } else if (isValidInt(v, -MAX, MAX, 2, p)) {
                    TO_EXP_NEG = -(TO_EXP_POS = (v < 0 ? -v : v) | 0);
                }
            }
            r[p] = [TO_EXP_NEG, TO_EXP_POS];

            // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
            // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
            // 'config() RANGE not an integer: {v}'
            // 'config() RANGE cannot be zero: {v}'
            // 'config() RANGE out of range: {v}'
            if (has(p = 'RANGE')) {

                if (isArray(v)) {
                    if (isValidInt(v[0], -MAX, -1, 2, p) && isValidInt(v[1], 1, MAX, 2, p)) {
                        MIN_EXP = v[0] | 0;
                        MAX_EXP = v[1] | 0;
                    }
                } else if (isValidInt(v, -MAX, MAX, 2, p)) {
                    if (v | 0) MIN_EXP = -(MAX_EXP = (v < 0 ? -v : v) | 0);else if (ERRORS) raise(2, p + ' cannot be zero', v);
                }
            }
            r[p] = [MIN_EXP, MAX_EXP];

            // ERRORS {boolean|number} true, false, 1 or 0.
            // 'config() ERRORS not a boolean or binary digit: {v}'
            if (has(p = 'ERRORS')) {

                if (v === !!v || v === 1 || v === 0) {
                    id = 0;
                    isValidInt = (ERRORS = !!v) ? intValidatorWithErrors : intValidatorNoErrors;
                } else if (ERRORS) {
                    raise(2, p + notBool, v);
                }
            }
            r[p] = ERRORS;

            // CRYPTO {boolean|number} true, false, 1 or 0.
            // 'config() CRYPTO not a boolean or binary digit: {v}'
            // 'config() crypto unavailable: {crypto}'
            if (has(p = 'CRYPTO')) {

                if (v === true || v === false || v === 1 || v === 0) {
                    if (v) {
                        v = typeof crypto == 'undefined';
                        if (!v && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                            CRYPTO = true;
                        } else if (ERRORS) {
                            raise(2, 'crypto unavailable', v ? void 0 : crypto);
                        } else {
                            CRYPTO = false;
                        }
                    } else {
                        CRYPTO = false;
                    }
                } else if (ERRORS) {
                    raise(2, p + notBool, v);
                }
            }
            r[p] = CRYPTO;

            // MODULO_MODE {number} Integer, 0 to 9 inclusive.
            // 'config() MODULO_MODE not an integer: {v}'
            // 'config() MODULO_MODE out of range: {v}'
            if (has(p = 'MODULO_MODE') && isValidInt(v, 0, 9, 2, p)) {
                MODULO_MODE = v | 0;
            }
            r[p] = MODULO_MODE;

            // POW_PRECISION {number} Integer, 0 to MAX inclusive.
            // 'config() POW_PRECISION not an integer: {v}'
            // 'config() POW_PRECISION out of range: {v}'
            if (has(p = 'POW_PRECISION') && isValidInt(v, 0, MAX, 2, p)) {
                POW_PRECISION = v | 0;
            }
            r[p] = POW_PRECISION;

            // FORMAT {object}
            // 'config() FORMAT not an object: {v}'
            if (has(p = 'FORMAT')) {

                if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) == 'object') {
                    FORMAT = v;
                } else if (ERRORS) {
                    raise(2, p + ' not an object', v);
                }
            }
            r[p] = FORMAT;

            return r;
        };

        /*
         * Return a new BigNumber whose value is the maximum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
        BigNumber.max = function () {
            return maxOrMin(arguments, P.lt);
        };

        /*
         * Return a new BigNumber whose value is the minimum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
        BigNumber.min = function () {
            return maxOrMin(arguments, P.gt);
        };

        /*
         * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
         * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
         * zeros are produced).
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         *
         * 'random() decimal places not an integer: {dp}'
         * 'random() decimal places out of range: {dp}'
         * 'random() crypto unavailable: {crypto}'
         */
        BigNumber.random = function () {
            var pow2_53 = 0x20000000000000;

            // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
            // Check if Math.random() produces more than 32 bits of randomness.
            // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
            // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
            var random53bitInt = Math.random() * pow2_53 & 0x1fffff ? function () {
                return mathfloor(Math.random() * pow2_53);
            } : function () {
                return (Math.random() * 0x40000000 | 0) * 0x800000 + (Math.random() * 0x800000 | 0);
            };

            return function (dp) {
                var a,
                    b,
                    e,
                    k,
                    v,
                    i = 0,
                    c = [],
                    rand = new BigNumber(ONE);

                dp = dp == null || !isValidInt(dp, 0, MAX, 14) ? DECIMAL_PLACES : dp | 0;
                k = mathceil(dp / LOG_BASE);

                if (CRYPTO) {

                    // Browsers supporting crypto.getRandomValues.
                    if (crypto.getRandomValues) {

                        a = crypto.getRandomValues(new Uint32Array(k *= 2));

                        for (; i < k;) {

                            // 53 bits:
                            // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
                            // 11111 11111111 11111111 11111111 11100000 00000000 00000000
                            // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
                            //                                     11111 11111111 11111111
                            // 0x20000 is 2^21.
                            v = a[i] * 0x20000 + (a[i + 1] >>> 11);

                            // Rejection sampling:
                            // 0 <= v < 9007199254740992
                            // Probability that v >= 9e15, is
                            // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
                            if (v >= 9e15) {
                                b = crypto.getRandomValues(new Uint32Array(2));
                                a[i] = b[0];
                                a[i + 1] = b[1];
                            } else {

                                // 0 <= v <= 8999999999999999
                                // 0 <= (v % 1e14) <= 99999999999999
                                c.push(v % 1e14);
                                i += 2;
                            }
                        }
                        i = k / 2;

                        // Node.js supporting crypto.randomBytes.
                    } else if (crypto.randomBytes) {

                        // buffer
                        a = crypto.randomBytes(k *= 7);

                        for (; i < k;) {

                            // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
                            // 0x100000000 is 2^32, 0x1000000 is 2^24
                            // 11111 11111111 11111111 11111111 11111111 11111111 11111111
                            // 0 <= v < 9007199254740992
                            v = (a[i] & 31) * 0x1000000000000 + a[i + 1] * 0x10000000000 + a[i + 2] * 0x100000000 + a[i + 3] * 0x1000000 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

                            if (v >= 9e15) {
                                crypto.randomBytes(7).copy(a, i);
                            } else {

                                // 0 <= (v % 1e14) <= 99999999999999
                                c.push(v % 1e14);
                                i += 7;
                            }
                        }
                        i = k / 7;
                    } else {
                        CRYPTO = false;
                        if (ERRORS) raise(14, 'crypto unavailable', crypto);
                    }
                }

                // Use Math.random.
                if (!CRYPTO) {

                    for (; i < k;) {
                        v = random53bitInt();
                        if (v < 9e15) c[i++] = v % 1e14;
                    }
                }

                k = c[--i];
                dp %= LOG_BASE;

                // Convert trailing digits to zeros according to dp.
                if (k && dp) {
                    v = POWS_TEN[LOG_BASE - dp];
                    c[i] = mathfloor(k / v) * v;
                }

                // Remove trailing elements which are zero.
                for (; c[i] === 0; c.pop(), i--) {}

                // Zero?
                if (i < 0) {
                    c = [e = 0];
                } else {

                    // Remove leading elements which are zero and adjust exponent accordingly.
                    for (e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE) {}

                    // Count the digits of the first element of c to determine leading zeros, and...
                    for (i = 1, v = c[0]; v >= 10; v /= 10, i++) {}

                    // adjust the exponent accordingly.
                    if (i < LOG_BASE) e -= LOG_BASE - i;
                }

                rand.e = e;
                rand.c = c;
                return rand;
            };
        }();

        // PRIVATE FUNCTIONS


        // Convert a numeric string of baseIn to a numeric string of baseOut.
        function convertBase(str, baseOut, baseIn, sign) {
            var d,
                e,
                k,
                r,
                x,
                xc,
                y,
                i = str.indexOf('.'),
                dp = DECIMAL_PLACES,
                rm = ROUNDING_MODE;

            if (baseIn < 37) str = str.toLowerCase();

            // Non-integer.
            if (i >= 0) {
                k = POW_PRECISION;

                // Unlimited precision.
                POW_PRECISION = 0;
                str = str.replace('.', '');
                y = new BigNumber(baseIn);
                x = y.pow(str.length - i);
                POW_PRECISION = k;

                // Convert str as if an integer, then restore the fraction part by dividing the
                // result by its base raised to a power.
                y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e), 10, baseOut);
                y.e = y.c.length;
            }

            // Convert the number as integer.
            xc = toBaseOut(str, baseIn, baseOut);
            e = k = xc.length;

            // Remove trailing zeros.
            for (; xc[--k] == 0; xc.pop()) {}
            if (!xc[0]) return '0';

            if (i < 0) {
                --e;
            } else {
                x.c = xc;
                x.e = e;

                // sign is needed for correct rounding.
                x.s = sign;
                x = div(x, y, dp, rm, baseOut);
                xc = x.c;
                r = x.r;
                e = x.e;
            }

            d = e + dp + 1;

            // The rounding digit, i.e. the digit to the right of the digit that may be rounded up.
            i = xc[d];
            k = baseOut / 2;
            r = r || d < 0 || xc[d + 1] != null;

            r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));

            if (d < 1 || !xc[0]) {

                // 1^-dp or 0.
                str = r ? toFixedPoint('1', -dp) : '0';
            } else {
                xc.length = d;

                if (r) {

                    // Rounding up may mean the previous digit has to be rounded up and so on.
                    for (--baseOut; ++xc[--d] > baseOut;) {
                        xc[d] = 0;

                        if (!d) {
                            ++e;
                            xc = [1].concat(xc);
                        }
                    }
                }

                // Determine trailing zeros.
                for (k = xc.length; !xc[--k];) {}

                // E.g. [4, 11, 15] becomes 4bf.
                for (i = 0, str = ''; i <= k; str += ALPHABET.charAt(xc[i++])) {}
                str = toFixedPoint(str, e);
            }

            // The caller will add the sign.
            return str;
        }

        // Perform division in the specified base. Called by div and convertBase.
        div = function () {

            // Assume non-zero x and k.
            function multiply(x, k, base) {
                var m,
                    temp,
                    xlo,
                    xhi,
                    carry = 0,
                    i = x.length,
                    klo = k % SQRT_BASE,
                    khi = k / SQRT_BASE | 0;

                for (x = x.slice(); i--;) {
                    xlo = x[i] % SQRT_BASE;
                    xhi = x[i] / SQRT_BASE | 0;
                    m = khi * xlo + xhi * klo;
                    temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
                    carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
                    x[i] = temp % base;
                }

                if (carry) x = [carry].concat(x);

                return x;
            }

            function compare(a, b, aL, bL) {
                var i, cmp;

                if (aL != bL) {
                    cmp = aL > bL ? 1 : -1;
                } else {

                    for (i = cmp = 0; i < aL; i++) {

                        if (a[i] != b[i]) {
                            cmp = a[i] > b[i] ? 1 : -1;
                            break;
                        }
                    }
                }
                return cmp;
            }

            function subtract(a, b, aL, base) {
                var i = 0;

                // Subtract b from a.
                for (; aL--;) {
                    a[aL] -= i;
                    i = a[aL] < b[aL] ? 1 : 0;
                    a[aL] = i * base + a[aL] - b[aL];
                }

                // Remove leading zeros.
                for (; !a[0] && a.length > 1; a.splice(0, 1)) {}
            }

            // x: dividend, y: divisor.
            return function (x, y, dp, rm, base) {
                var cmp,
                    e,
                    i,
                    more,
                    n,
                    prod,
                    prodL,
                    q,
                    qc,
                    rem,
                    remL,
                    rem0,
                    xi,
                    xL,
                    yc0,
                    yL,
                    yz,
                    s = x.s == y.s ? 1 : -1,
                    xc = x.c,
                    yc = y.c;

                // Either NaN, Infinity or 0?
                if (!xc || !xc[0] || !yc || !yc[0]) {

                    return new BigNumber(

                    // Return NaN if either NaN, or both Infinity or 0.
                    !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :

                    // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                    xc && xc[0] == 0 || !yc ? s * 0 : s / 0);
                }

                q = new BigNumber(s);
                qc = q.c = [];
                e = x.e - y.e;
                s = dp + e + 1;

                if (!base) {
                    base = BASE;
                    e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
                    s = s / LOG_BASE | 0;
                }

                // Result exponent may be one less then the current value of e.
                // The coefficients of the BigNumbers from convertBase may have trailing zeros.
                for (i = 0; yc[i] == (xc[i] || 0); i++) {}
                if (yc[i] > (xc[i] || 0)) e--;

                if (s < 0) {
                    qc.push(1);
                    more = true;
                } else {
                    xL = xc.length;
                    yL = yc.length;
                    i = 0;
                    s += 2;

                    // Normalise xc and yc so highest order digit of yc is >= base / 2.

                    n = mathfloor(base / (yc[0] + 1));

                    // Not necessary, but to handle odd bases where yc[0] == ( base / 2 ) - 1.
                    // if ( n > 1 || n++ == 1 && yc[0] < base / 2 ) {
                    if (n > 1) {
                        yc = multiply(yc, n, base);
                        xc = multiply(xc, n, base);
                        yL = yc.length;
                        xL = xc.length;
                    }

                    xi = yL;
                    rem = xc.slice(0, yL);
                    remL = rem.length;

                    // Add zeros to make remainder as long as divisor.
                    for (; remL < yL; rem[remL++] = 0) {}
                    yz = yc.slice();
                    yz = [0].concat(yz);
                    yc0 = yc[0];
                    if (yc[1] >= base / 2) yc0++;
                    // Not necessary, but to prevent trial digit n > base, when using base 3.
                    // else if ( base == 3 && yc0 == 1 ) yc0 = 1 + 1e-15;

                    do {
                        n = 0;

                        // Compare divisor and remainder.
                        cmp = compare(yc, rem, yL, remL);

                        // If divisor < remainder.
                        if (cmp < 0) {

                            // Calculate trial digit, n.

                            rem0 = rem[0];
                            if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

                            // n is how many times the divisor goes into the current remainder.
                            n = mathfloor(rem0 / yc0);

                            //  Algorithm:
                            //  1. product = divisor * trial digit (n)
                            //  2. if product > remainder: product -= divisor, n--
                            //  3. remainder -= product
                            //  4. if product was < remainder at 2:
                            //    5. compare new remainder and divisor
                            //    6. If remainder > divisor: remainder -= divisor, n++

                            if (n > 1) {

                                // n may be > base only when base is 3.
                                if (n >= base) n = base - 1;

                                // product = divisor * trial digit.
                                prod = multiply(yc, n, base);
                                prodL = prod.length;
                                remL = rem.length;

                                // Compare product and remainder.
                                // If product > remainder.
                                // Trial digit n too high.
                                // n is 1 too high about 5% of the time, and is not known to have
                                // ever been more than 1 too high.
                                while (compare(prod, rem, prodL, remL) == 1) {
                                    n--;

                                    // Subtract divisor from product.
                                    subtract(prod, yL < prodL ? yz : yc, prodL, base);
                                    prodL = prod.length;
                                    cmp = 1;
                                }
                            } else {

                                // n is 0 or 1, cmp is -1.
                                // If n is 0, there is no need to compare yc and rem again below,
                                // so change cmp to 1 to avoid it.
                                // If n is 1, leave cmp as -1, so yc and rem are compared again.
                                if (n == 0) {

                                    // divisor < remainder, so n must be at least 1.
                                    cmp = n = 1;
                                }

                                // product = divisor
                                prod = yc.slice();
                                prodL = prod.length;
                            }

                            if (prodL < remL) prod = [0].concat(prod);

                            // Subtract product from remainder.
                            subtract(rem, prod, remL, base);
                            remL = rem.length;

                            // If product was < remainder.
                            if (cmp == -1) {

                                // Compare divisor and new remainder.
                                // If divisor < new remainder, subtract divisor from remainder.
                                // Trial digit n too low.
                                // n is 1 too low about 5% of the time, and very rarely 2 too low.
                                while (compare(yc, rem, yL, remL) < 1) {
                                    n++;

                                    // Subtract divisor from remainder.
                                    subtract(rem, yL < remL ? yz : yc, remL, base);
                                    remL = rem.length;
                                }
                            }
                        } else if (cmp === 0) {
                            n++;
                            rem = [0];
                        } // else cmp === 1 and n will be 0

                        // Add the next digit, n, to the result array.
                        qc[i++] = n;

                        // Update the remainder.
                        if (rem[0]) {
                            rem[remL++] = xc[xi] || 0;
                        } else {
                            rem = [xc[xi]];
                            remL = 1;
                        }
                    } while ((xi++ < xL || rem[0] != null) && s--);

                    more = rem[0] != null;

                    // Leading zero?
                    if (!qc[0]) qc.splice(0, 1);
                }

                if (base == BASE) {

                    // To calculate q.e, first get the number of digits of qc[0].
                    for (i = 1, s = qc[0]; s >= 10; s /= 10, i++) {}
                    round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);

                    // Caller is convertBase.
                } else {
                    q.e = e;
                    q.r = +more;
                }

                return q;
            };
        }();

        /*
         * Return a string representing the value of BigNumber n in fixed-point or exponential
         * notation rounded to the specified decimal places or significant digits.
         *
         * n is a BigNumber.
         * i is the index of the last digit required (i.e. the digit that may be rounded up).
         * rm is the rounding mode.
         * caller is caller id: toExponential 19, toFixed 20, toFormat 21, toPrecision 24.
         */
        function format(n, i, rm, caller) {
            var c0, e, ne, len, str;

            rm = rm != null && isValidInt(rm, 0, 8, caller, roundingMode) ? rm | 0 : ROUNDING_MODE;

            if (!n.c) return n.toString();
            c0 = n.c[0];
            ne = n.e;

            if (i == null) {
                str = coeffToString(n.c);
                str = caller == 19 || caller == 24 && ne <= TO_EXP_NEG ? toExponential(str, ne) : toFixedPoint(str, ne);
            } else {
                n = round(new BigNumber(n), i, rm);

                // n.e may have changed if the value was rounded up.
                e = n.e;

                str = coeffToString(n.c);
                len = str.length;

                // toPrecision returns exponential notation if the number of significant digits
                // specified is less than the number of digits necessary to represent the integer
                // part of the value in fixed-point notation.

                // Exponential notation.
                if (caller == 19 || caller == 24 && (i <= e || e <= TO_EXP_NEG)) {

                    // Append zeros?
                    for (; len < i; str += '0', len++) {}
                    str = toExponential(str, e);

                    // Fixed-point notation.
                } else {
                    i -= ne;
                    str = toFixedPoint(str, e);

                    // Append zeros?
                    if (e + 1 > len) {
                        if (--i > 0) for (str += '.'; i--; str += '0') {}
                    } else {
                        i += e - len;
                        if (i > 0) {
                            if (e + 1 == len) str += '.';
                            for (; i--; str += '0') {}
                        }
                    }
                }
            }

            return n.s < 0 && c0 ? '-' + str : str;
        }

        // Handle BigNumber.max and BigNumber.min.
        function maxOrMin(args, method) {
            var m,
                n,
                i = 0;

            if (isArray(args[0])) args = args[0];
            m = new BigNumber(args[0]);

            for (; ++i < args.length;) {
                n = new BigNumber(args[i]);

                // If any number is NaN, return NaN.
                if (!n.s) {
                    m = n;
                    break;
                } else if (method.call(m, n)) {
                    m = n;
                }
            }

            return m;
        }

        /*
         * Return true if n is an integer in range, otherwise throw.
         * Use for argument validation when ERRORS is true.
         */
        function intValidatorWithErrors(n, min, max, caller, name) {
            if (n < min || n > max || n != truncate(n)) {
                raise(caller, (name || 'decimal places') + (n < min || n > max ? ' out of range' : ' not an integer'), n);
            }

            return true;
        }

        /*
         * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
         * Called by minus, plus and times.
         */
        function normalise(n, c, e) {
            var i = 1,
                j = c.length;

            // Remove trailing zeros.
            for (; !c[--j]; c.pop()) {}

            // Calculate the base 10 exponent. First get the number of digits of c[0].
            for (j = c[0]; j >= 10; j /= 10, i++) {}

            // Overflow?
            if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {

                // Infinity.
                n.c = n.e = null;

                // Underflow?
            } else if (e < MIN_EXP) {

                // Zero.
                n.c = [n.e = 0];
            } else {
                n.e = e;
                n.c = c;
            }

            return n;
        }

        // Handle values that fail the validity test in BigNumber.
        parseNumeric = function () {
            var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                dotAfter = /^([^.]+)\.$/,
                dotBefore = /^\.([^.]+)$/,
                isInfinityOrNaN = /^-?(Infinity|NaN)$/,
                whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

            return function (x, str, num, b) {
                var base,
                    s = num ? str : str.replace(whitespaceOrPlus, '');

                // No exception on ±Infinity or NaN.
                if (isInfinityOrNaN.test(s)) {
                    x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                } else {
                    if (!num) {

                        // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
                        s = s.replace(basePrefix, function (m, p1, p2) {
                            base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
                            return !b || b == base ? p1 : m;
                        });

                        if (b) {
                            base = b;

                            // E.g. '1.' to '1', '.1' to '0.1'
                            s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
                        }

                        if (str != s) return new BigNumber(s, base);
                    }

                    // 'new BigNumber() not a number: {n}'
                    // 'new BigNumber() not a base {b} number: {n}'
                    if (ERRORS) raise(id, 'not a' + (b ? ' base ' + b : '') + ' number', str);
                    x.s = null;
                }

                x.c = x.e = null;
                id = 0;
            };
        }();

        // Throw a BigNumber Error.
        function raise(caller, msg, val) {
            var error = new Error(['new BigNumber', // 0
            'cmp', // 1
            'config', // 2
            'div', // 3
            'divToInt', // 4
            'eq', // 5
            'gt', // 6
            'gte', // 7
            'lt', // 8
            'lte', // 9
            'minus', // 10
            'mod', // 11
            'plus', // 12
            'precision', // 13
            'random', // 14
            'round', // 15
            'shift', // 16
            'times', // 17
            'toDigits', // 18
            'toExponential', // 19
            'toFixed', // 20
            'toFormat', // 21
            'toFraction', // 22
            'pow', // 23
            'toPrecision', // 24
            'toString', // 25
            'BigNumber' // 26
            ][caller] + '() ' + msg + ': ' + val);

            error.name = 'BigNumber Error';
            id = 0;
            throw error;
        }

        /*
         * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
         * If r is truthy, it is known that there are more digits after the rounding digit.
         */
        function round(x, sd, rm, r) {
            var d,
                i,
                j,
                k,
                n,
                ni,
                rd,
                xc = x.c,
                pows10 = POWS_TEN;

            // if x is not Infinity or NaN...
            if (xc) {

                // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
                // n is a base 1e14 number, the value of the element of array x.c containing rd.
                // ni is the index of n within x.c.
                // d is the number of digits of n.
                // i is the index of rd within n including leading zeros.
                // j is the actual index of rd within n (if < 0, rd is a leading zero).
                out: {

                    // Get the number of digits of the first element of xc.
                    for (d = 1, k = xc[0]; k >= 10; k /= 10, d++) {}
                    i = sd - d;

                    // If the rounding digit is in the first element of xc...
                    if (i < 0) {
                        i += LOG_BASE;
                        j = sd;
                        n = xc[ni = 0];

                        // Get the rounding digit at index j of n.
                        rd = n / pows10[d - j - 1] % 10 | 0;
                    } else {
                        ni = mathceil((i + 1) / LOG_BASE);

                        if (ni >= xc.length) {

                            if (r) {

                                // Needed by sqrt.
                                for (; xc.length <= ni; xc.push(0)) {}
                                n = rd = 0;
                                d = 1;
                                i %= LOG_BASE;
                                j = i - LOG_BASE + 1;
                            } else {
                                break out;
                            }
                        } else {
                            n = k = xc[ni];

                            // Get the number of digits of n.
                            for (d = 1; k >= 10; k /= 10, d++) {}

                            // Get the index of rd within n.
                            i %= LOG_BASE;

                            // Get the index of rd within n, adjusted for leading zeros.
                            // The number of leading zeros of n is given by LOG_BASE - d.
                            j = i - LOG_BASE + d;

                            // Get the rounding digit at index j of n.
                            rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
                        }
                    }

                    r = r || sd < 0 ||

                    // Are there any non-zero digits after the rounding digit?
                    // The expression  n % pows10[ d - j - 1 ]  returns all digits of n to the right
                    // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
                    xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);

                    r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&

                    // Check whether the digit to the left of the rounding digit is odd.
                    (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));

                    if (sd < 1 || !xc[0]) {
                        xc.length = 0;

                        if (r) {

                            // Convert sd to decimal places.
                            sd -= x.e + 1;

                            // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                            xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                            x.e = -sd || 0;
                        } else {

                            // Zero.
                            xc[0] = x.e = 0;
                        }

                        return x;
                    }

                    // Remove excess digits.
                    if (i == 0) {
                        xc.length = ni;
                        k = 1;
                        ni--;
                    } else {
                        xc.length = ni + 1;
                        k = pows10[LOG_BASE - i];

                        // E.g. 56700 becomes 56000 if 7 is the rounding digit.
                        // j > 0 means i > number of leading zeros of n.
                        xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
                    }

                    // Round up?
                    if (r) {

                        for (;;) {

                            // If the digit to be rounded up is in the first element of xc...
                            if (ni == 0) {

                                // i will be the length of xc[0] before k is added.
                                for (i = 1, j = xc[0]; j >= 10; j /= 10, i++) {}
                                j = xc[0] += k;
                                for (k = 1; j >= 10; j /= 10, k++) {}

                                // if i != k the length has increased.
                                if (i != k) {
                                    x.e++;
                                    if (xc[0] == BASE) xc[0] = 1;
                                }

                                break;
                            } else {
                                xc[ni] += k;
                                if (xc[ni] != BASE) break;
                                xc[ni--] = 0;
                                k = 1;
                            }
                        }
                    }

                    // Remove trailing zeros.
                    for (i = xc.length; xc[--i] === 0; xc.pop()) {}
                }

                // Overflow? Infinity.
                if (x.e > MAX_EXP) {
                    x.c = x.e = null;

                    // Underflow? Zero.
                } else if (x.e < MIN_EXP) {
                    x.c = [x.e = 0];
                }
            }

            return x;
        }

        // PROTOTYPE/INSTANCE METHODS


        /*
         * Return a new BigNumber whose value is the absolute value of this BigNumber.
         */
        P.absoluteValue = P.abs = function () {
            var x = new BigNumber(this);
            if (x.s < 0) x.s = 1;
            return x;
        };

        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a whole
         * number in the direction of Infinity.
         */
        P.ceil = function () {
            return round(new BigNumber(this), this.e + 1, 2);
        };

        /*
         * Return
         * 1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
         * -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
         * 0 if they have the same value,
         * or null if the value of either is NaN.
         */
        P.comparedTo = P.cmp = function (y, b) {
            id = 1;
            return compare(this, new BigNumber(y, b));
        };

        /*
         * Return the number of decimal places of the value of this BigNumber, or null if the value
         * of this BigNumber is ±Infinity or NaN.
         */
        P.decimalPlaces = P.dp = function () {
            var n,
                v,
                c = this.c;

            if (!c) return null;
            n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;

            // Subtract the number of trailing zeros of the last number.
            if (v = c[v]) for (; v % 10 == 0; v /= 10, n--) {}
            if (n < 0) n = 0;

            return n;
        };

        /*
         *  n / 0 = I
         *  n / N = N
         *  n / I = 0
         *  0 / n = 0
         *  0 / 0 = N
         *  0 / N = N
         *  0 / I = 0
         *  N / n = N
         *  N / 0 = N
         *  N / N = N
         *  N / I = N
         *  I / n = I
         *  I / 0 = I
         *  I / N = N
         *  I / I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
         * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */
        P.dividedBy = P.div = function (y, b) {
            id = 3;
            return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
        };

        /*
         * Return a new BigNumber whose value is the integer part of dividing the value of this
         * BigNumber by the value of BigNumber(y, b).
         */
        P.dividedToIntegerBy = P.divToInt = function (y, b) {
            id = 4;
            return div(this, new BigNumber(y, b), 0, 1);
        };

        /*
         * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
         * otherwise returns false.
         */
        P.equals = P.eq = function (y, b) {
            id = 5;
            return compare(this, new BigNumber(y, b)) === 0;
        };

        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a whole
         * number in the direction of -Infinity.
         */
        P.floor = function () {
            return round(new BigNumber(this), this.e + 1, 3);
        };

        /*
         * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
         * otherwise returns false.
         */
        P.greaterThan = P.gt = function (y, b) {
            id = 6;
            return compare(this, new BigNumber(y, b)) > 0;
        };

        /*
         * Return true if the value of this BigNumber is greater than or equal to the value of
         * BigNumber(y, b), otherwise returns false.
         */
        P.greaterThanOrEqualTo = P.gte = function (y, b) {
            id = 7;
            return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;
        };

        /*
         * Return true if the value of this BigNumber is a finite number, otherwise returns false.
         */
        P.isFinite = function () {
            return !!this.c;
        };

        /*
         * Return true if the value of this BigNumber is an integer, otherwise return false.
         */
        P.isInteger = P.isInt = function () {
            return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
        };

        /*
         * Return true if the value of this BigNumber is NaN, otherwise returns false.
         */
        P.isNaN = function () {
            return !this.s;
        };

        /*
         * Return true if the value of this BigNumber is negative, otherwise returns false.
         */
        P.isNegative = P.isNeg = function () {
            return this.s < 0;
        };

        /*
         * Return true if the value of this BigNumber is 0 or -0, otherwise returns false.
         */
        P.isZero = function () {
            return !!this.c && this.c[0] == 0;
        };

        /*
         * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
         * otherwise returns false.
         */
        P.lessThan = P.lt = function (y, b) {
            id = 8;
            return compare(this, new BigNumber(y, b)) < 0;
        };

        /*
         * Return true if the value of this BigNumber is less than or equal to the value of
         * BigNumber(y, b), otherwise returns false.
         */
        P.lessThanOrEqualTo = P.lte = function (y, b) {
            id = 9;
            return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
        };

        /*
         *  n - 0 = n
         *  n - N = N
         *  n - I = -I
         *  0 - n = -n
         *  0 - 0 = 0
         *  0 - N = N
         *  0 - I = -I
         *  N - n = N
         *  N - 0 = N
         *  N - N = N
         *  N - I = N
         *  I - n = I
         *  I - 0 = I
         *  I - N = N
         *  I - I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber minus the value of
         * BigNumber(y, b).
         */
        P.minus = P.sub = function (y, b) {
            var i,
                j,
                t,
                xLTy,
                x = this,
                a = x.s;

            id = 10;
            y = new BigNumber(y, b);
            b = y.s;

            // Either NaN?
            if (!a || !b) return new BigNumber(NaN);

            // Signs differ?
            if (a != b) {
                y.s = -b;
                return x.plus(y);
            }

            var xe = x.e / LOG_BASE,
                ye = y.e / LOG_BASE,
                xc = x.c,
                yc = y.c;

            if (!xe || !ye) {

                // Either Infinity?
                if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);

                // Either zero?
                if (!xc[0] || !yc[0]) {

                    // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                    return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :

                    // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
                    ROUNDING_MODE == 3 ? -0 : 0);
                }
            }

            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();

            // Determine which is the bigger number.
            if (a = xe - ye) {

                if (xLTy = a < 0) {
                    a = -a;
                    t = xc;
                } else {
                    ye = xe;
                    t = yc;
                }

                t.reverse();

                // Prepend zeros to equalise exponents.
                for (b = a; b--; t.push(0)) {}
                t.reverse();
            } else {

                // Exponents equal. Check digit by digit.
                j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

                for (a = b = 0; b < j; b++) {

                    if (xc[b] != yc[b]) {
                        xLTy = xc[b] < yc[b];
                        break;
                    }
                }
            }

            // x < y? Point xc to the array of the bigger number.
            if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

            b = (j = yc.length) - (i = xc.length);

            // Append zeros to xc if shorter.
            // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
            if (b > 0) for (; b--; xc[i++] = 0) {}
            b = BASE - 1;

            // Subtract yc from xc.
            for (; j > a;) {

                if (xc[--j] < yc[j]) {
                    for (i = j; i && !xc[--i]; xc[i] = b) {}
                    --xc[i];
                    xc[j] += BASE;
                }

                xc[j] -= yc[j];
            }

            // Remove leading zeros and adjust exponent accordingly.
            for (; xc[0] == 0; xc.splice(0, 1), --ye) {}

            // Zero?
            if (!xc[0]) {

                // Following IEEE 754 (2008) 6.3,
                // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
                y.s = ROUNDING_MODE == 3 ? -1 : 1;
                y.c = [y.e = 0];
                return y;
            }

            // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
            // for finite x and y.
            return normalise(y, xc, ye);
        };

        /*
         *   n % 0 =  N
         *   n % N =  N
         *   n % I =  n
         *   0 % n =  0
         *  -0 % n = -0
         *   0 % 0 =  N
         *   0 % N =  N
         *   0 % I =  0
         *   N % n =  N
         *   N % 0 =  N
         *   N % N =  N
         *   N % I =  N
         *   I % n =  N
         *   I % 0 =  N
         *   I % N =  N
         *   I % I =  N
         *
         * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
         * BigNumber(y, b). The result depends on the value of MODULO_MODE.
         */
        P.modulo = P.mod = function (y, b) {
            var q,
                s,
                x = this;

            id = 11;
            y = new BigNumber(y, b);

            // Return NaN if x is Infinity or NaN, or y is NaN or zero.
            if (!x.c || !y.s || y.c && !y.c[0]) {
                return new BigNumber(NaN);

                // Return x if y is Infinity or x is zero.
            } else if (!y.c || x.c && !x.c[0]) {
                return new BigNumber(x);
            }

            if (MODULO_MODE == 9) {

                // Euclidian division: q = sign(y) * floor(x / abs(y))
                // r = x - qy    where  0 <= r < abs(y)
                s = y.s;
                y.s = 1;
                q = div(x, y, 0, 3);
                y.s = s;
                q.s *= s;
            } else {
                q = div(x, y, 0, MODULO_MODE);
            }

            return x.minus(q.times(y));
        };

        /*
         * Return a new BigNumber whose value is the value of this BigNumber negated,
         * i.e. multiplied by -1.
         */
        P.negated = P.neg = function () {
            var x = new BigNumber(this);
            x.s = -x.s || null;
            return x;
        };

        /*
         *  n + 0 = n
         *  n + N = N
         *  n + I = I
         *  0 + n = n
         *  0 + 0 = 0
         *  0 + N = N
         *  0 + I = I
         *  N + n = N
         *  N + 0 = N
         *  N + N = N
         *  N + I = N
         *  I + n = I
         *  I + 0 = I
         *  I + N = N
         *  I + I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber plus the value of
         * BigNumber(y, b).
         */
        P.plus = P.add = function (y, b) {
            var t,
                x = this,
                a = x.s;

            id = 12;
            y = new BigNumber(y, b);
            b = y.s;

            // Either NaN?
            if (!a || !b) return new BigNumber(NaN);

            // Signs differ?
            if (a != b) {
                y.s = -b;
                return x.minus(y);
            }

            var xe = x.e / LOG_BASE,
                ye = y.e / LOG_BASE,
                xc = x.c,
                yc = y.c;

            if (!xe || !ye) {

                // Return ±Infinity if either ±Infinity.
                if (!xc || !yc) return new BigNumber(a / 0);

                // Either zero?
                // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
            }

            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();

            // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
            if (a = xe - ye) {
                if (a > 0) {
                    ye = xe;
                    t = yc;
                } else {
                    a = -a;
                    t = xc;
                }

                t.reverse();
                for (; a--; t.push(0)) {}
                t.reverse();
            }

            a = xc.length;
            b = yc.length;

            // Point xc to the longer array, and b to the shorter length.
            if (a - b < 0) t = yc, yc = xc, xc = t, b = a;

            // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
            for (a = 0; b;) {
                a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
                xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
            }

            if (a) {
                xc = [a].concat(xc);
                ++ye;
            }

            // No need to check for zero, as +x + +y != 0 && -x + -y != 0
            // ye = MAX_EXP + 1 possible
            return normalise(y, xc, ye);
        };

        /*
         * Return the number of significant digits of the value of this BigNumber.
         *
         * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
         */
        P.precision = P.sd = function (z) {
            var n,
                v,
                x = this,
                c = x.c;

            // 'precision() argument not a boolean or binary digit: {z}'
            if (z != null && z !== !!z && z !== 1 && z !== 0) {
                if (ERRORS) raise(13, 'argument' + notBool, z);
                if (z != !!z) z = null;
            }

            if (!c) return null;
            v = c.length - 1;
            n = v * LOG_BASE + 1;

            if (v = c[v]) {

                // Subtract the number of trailing zeros of the last element.
                for (; v % 10 == 0; v /= 10, n--) {}

                // Add the number of digits of the first element.
                for (v = c[0]; v >= 10; v /= 10, n++) {}
            }

            if (z && x.e + 1 > n) n = x.e + 1;

            return n;
        };

        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a maximum of
         * dp decimal places using rounding mode rm, or to 0 and ROUNDING_MODE respectively if
         * omitted.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'round() decimal places out of range: {dp}'
         * 'round() decimal places not an integer: {dp}'
         * 'round() rounding mode not an integer: {rm}'
         * 'round() rounding mode out of range: {rm}'
         */
        P.round = function (dp, rm) {
            var n = new BigNumber(this);

            if (dp == null || isValidInt(dp, 0, MAX, 15)) {
                round(n, ~~dp + this.e + 1, rm == null || !isValidInt(rm, 0, 8, 15, roundingMode) ? ROUNDING_MODE : rm | 0);
            }

            return n;
        };

        /*
         * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
         * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
         *
         * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
         *
         * If k is out of range and ERRORS is false, the result will be ±0 if k < 0, or ±Infinity
         * otherwise.
         *
         * 'shift() argument not an integer: {k}'
         * 'shift() argument out of range: {k}'
         */
        P.shift = function (k) {
            var n = this;
            return isValidInt(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, 16, 'argument')

            // k < 1e+21, or truncate(k) will produce exponential notation.
            ? n.times('1e' + truncate(k)) : new BigNumber(n.c && n.c[0] && (k < -MAX_SAFE_INTEGER || k > MAX_SAFE_INTEGER) ? n.s * (k < 0 ? 0 : 1 / 0) : n);
        };

        /*
         *  sqrt(-n) =  N
         *  sqrt( N) =  N
         *  sqrt(-I) =  N
         *  sqrt( I) =  I
         *  sqrt( 0) =  0
         *  sqrt(-0) = -0
         *
         * Return a new BigNumber whose value is the square root of the value of this BigNumber,
         * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */
        P.squareRoot = P.sqrt = function () {
            var m,
                n,
                r,
                rep,
                t,
                x = this,
                c = x.c,
                s = x.s,
                e = x.e,
                dp = DECIMAL_PLACES + 4,
                half = new BigNumber('0.5');

            // Negative/NaN/Infinity/zero?
            if (s !== 1 || !c || !c[0]) {
                return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
            }

            // Initial estimate.
            s = Math.sqrt(+x);

            // Math.sqrt underflow/overflow?
            // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
            if (s == 0 || s == 1 / 0) {
                n = coeffToString(c);
                if ((n.length + e) % 2 == 0) n += '0';
                s = Math.sqrt(n);
                e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

                if (s == 1 / 0) {
                    n = '1e' + e;
                } else {
                    n = s.toExponential();
                    n = n.slice(0, n.indexOf('e') + 1) + e;
                }

                r = new BigNumber(n);
            } else {
                r = new BigNumber(s + '');
            }

            // Check for zero.
            // r could be zero if MIN_EXP is changed after the this value was created.
            // This would cause a division by zero (x/t) and hence Infinity below, which would cause
            // coeffToString to throw.
            if (r.c[0]) {
                e = r.e;
                s = e + dp;
                if (s < 3) s = 0;

                // Newton-Raphson iteration.
                for (;;) {
                    t = r;
                    r = half.times(t.plus(div(x, t, dp, 1)));

                    if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {

                        // The exponent of r may here be one less than the final result exponent,
                        // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
                        // are indexed correctly.
                        if (r.e < e) --s;
                        n = n.slice(s - 3, s + 1);

                        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
                        // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
                        // iteration.
                        if (n == '9999' || !rep && n == '4999') {

                            // On the first iteration only, check to see if rounding up gives the
                            // exact result as the nines may infinitely repeat.
                            if (!rep) {
                                round(t, t.e + DECIMAL_PLACES + 2, 0);

                                if (t.times(t).eq(x)) {
                                    r = t;
                                    break;
                                }
                            }

                            dp += 4;
                            s += 4;
                            rep = 1;
                        } else {

                            // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
                            // result. If not, then there are further digits and m will be truthy.
                            if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

                                // Truncate to the first rounding digit.
                                round(r, r.e + DECIMAL_PLACES + 2, 1);
                                m = !r.times(r).eq(x);
                            }

                            break;
                        }
                    }
                }
            }

            return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
        };

        /*
         *  n * 0 = 0
         *  n * N = N
         *  n * I = I
         *  0 * n = 0
         *  0 * 0 = 0
         *  0 * N = N
         *  0 * I = N
         *  N * n = N
         *  N * 0 = N
         *  N * N = N
         *  N * I = N
         *  I * n = I
         *  I * 0 = N
         *  I * N = N
         *  I * I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber times the value of
         * BigNumber(y, b).
         */
        P.times = P.mul = function (y, b) {
            var c,
                e,
                i,
                j,
                k,
                m,
                xcL,
                xlo,
                xhi,
                ycL,
                ylo,
                yhi,
                zc,
                base,
                sqrtBase,
                x = this,
                xc = x.c,
                yc = (id = 17, y = new BigNumber(y, b)).c;

            // Either NaN, ±Infinity or ±0?
            if (!xc || !yc || !xc[0] || !yc[0]) {

                // Return NaN if either is NaN, or one is 0 and the other is Infinity.
                if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
                    y.c = y.e = y.s = null;
                } else {
                    y.s *= x.s;

                    // Return ±Infinity if either is ±Infinity.
                    if (!xc || !yc) {
                        y.c = y.e = null;

                        // Return ±0 if either is ±0.
                    } else {
                        y.c = [0];
                        y.e = 0;
                    }
                }

                return y;
            }

            e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
            y.s *= x.s;
            xcL = xc.length;
            ycL = yc.length;

            // Ensure xc points to longer array and xcL to its length.
            if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

            // Initialise the result array with zeros.
            for (i = xcL + ycL, zc = []; i--; zc.push(0)) {}

            base = BASE;
            sqrtBase = SQRT_BASE;

            for (i = ycL; --i >= 0;) {
                c = 0;
                ylo = yc[i] % sqrtBase;
                yhi = yc[i] / sqrtBase | 0;

                for (k = xcL, j = i + k; j > i;) {
                    xlo = xc[--k] % sqrtBase;
                    xhi = xc[k] / sqrtBase | 0;
                    m = yhi * xlo + xhi * ylo;
                    xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
                    c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
                    zc[j--] = xlo % base;
                }

                zc[j] = c;
            }

            if (c) {
                ++e;
            } else {
                zc.splice(0, 1);
            }

            return normalise(y, zc, e);
        };

        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a maximum of
         * sd significant digits using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toDigits() precision out of range: {sd}'
         * 'toDigits() precision not an integer: {sd}'
         * 'toDigits() rounding mode not an integer: {rm}'
         * 'toDigits() rounding mode out of range: {rm}'
         */
        P.toDigits = function (sd, rm) {
            var n = new BigNumber(this);
            sd = sd == null || !isValidInt(sd, 1, MAX, 18, 'precision') ? null : sd | 0;
            rm = rm == null || !isValidInt(rm, 0, 8, 18, roundingMode) ? ROUNDING_MODE : rm | 0;
            return sd ? round(n, sd, rm) : n;
        };

        /*
         * Return a string representing the value of this BigNumber in exponential notation and
         * rounded using ROUNDING_MODE to dp fixed decimal places.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toExponential() decimal places not an integer: {dp}'
         * 'toExponential() decimal places out of range: {dp}'
         * 'toExponential() rounding mode not an integer: {rm}'
         * 'toExponential() rounding mode out of range: {rm}'
         */
        P.toExponential = function (dp, rm) {
            return format(this, dp != null && isValidInt(dp, 0, MAX, 19) ? ~~dp + 1 : null, rm, 19);
        };

        /*
         * Return a string representing the value of this BigNumber in fixed-point notation rounding
         * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
         * but e.g. (-0.00001).toFixed(0) is '-0'.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toFixed() decimal places not an integer: {dp}'
         * 'toFixed() decimal places out of range: {dp}'
         * 'toFixed() rounding mode not an integer: {rm}'
         * 'toFixed() rounding mode out of range: {rm}'
         */
        P.toFixed = function (dp, rm) {
            return format(this, dp != null && isValidInt(dp, 0, MAX, 20) ? ~~dp + this.e + 1 : null, rm, 20);
        };

        /*
         * Return a string representing the value of this BigNumber in fixed-point notation rounded
         * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
         * of the FORMAT object (see BigNumber.config).
         *
         * FORMAT = {
         *      decimalSeparator : '.',
         *      groupSeparator : ',',
         *      groupSize : 3,
         *      secondaryGroupSize : 0,
         *      fractionGroupSeparator : '\xA0',    // non-breaking space
         *      fractionGroupSize : 0
         * };
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toFormat() decimal places not an integer: {dp}'
         * 'toFormat() decimal places out of range: {dp}'
         * 'toFormat() rounding mode not an integer: {rm}'
         * 'toFormat() rounding mode out of range: {rm}'
         */
        P.toFormat = function (dp, rm) {
            var str = format(this, dp != null && isValidInt(dp, 0, MAX, 21) ? ~~dp + this.e + 1 : null, rm, 21);

            if (this.c) {
                var i,
                    arr = str.split('.'),
                    g1 = +FORMAT.groupSize,
                    g2 = +FORMAT.secondaryGroupSize,
                    groupSeparator = FORMAT.groupSeparator,
                    intPart = arr[0],
                    fractionPart = arr[1],
                    isNeg = this.s < 0,
                    intDigits = isNeg ? intPart.slice(1) : intPart,
                    len = intDigits.length;

                if (g2) i = g1, g1 = g2, g2 = i, len -= i;

                if (g1 > 0 && len > 0) {
                    i = len % g1 || g1;
                    intPart = intDigits.substr(0, i);

                    for (; i < len; i += g1) {
                        intPart += groupSeparator + intDigits.substr(i, g1);
                    }

                    if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
                    if (isNeg) intPart = '-' + intPart;
                }

                str = fractionPart ? intPart + FORMAT.decimalSeparator + ((g2 = +FORMAT.fractionGroupSize) ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'), '$&' + FORMAT.fractionGroupSeparator) : fractionPart) : intPart;
            }

            return str;
        };

        /*
         * Return a string array representing the value of this BigNumber as a simple fraction with
         * an integer numerator and an integer denominator. The denominator will be a positive
         * non-zero value less than or equal to the specified maximum denominator. If a maximum
         * denominator is not specified, the denominator will be the lowest value necessary to
         * represent the number exactly.
         *
         * [md] {number|string|BigNumber} Integer >= 1 and < Infinity. The maximum denominator.
         *
         * 'toFraction() max denominator not an integer: {md}'
         * 'toFraction() max denominator out of range: {md}'
         */
        P.toFraction = function (md) {
            var arr,
                d0,
                d2,
                e,
                exp,
                n,
                n0,
                q,
                s,
                k = ERRORS,
                x = this,
                xc = x.c,
                d = new BigNumber(ONE),
                n1 = d0 = new BigNumber(ONE),
                d1 = n0 = new BigNumber(ONE);

            if (md != null) {
                ERRORS = false;
                n = new BigNumber(md);
                ERRORS = k;

                if (!(k = n.isInt()) || n.lt(ONE)) {

                    if (ERRORS) {
                        raise(22, 'max denominator ' + (k ? 'out of range' : 'not an integer'), md);
                    }

                    // ERRORS is false:
                    // If md is a finite non-integer >= 1, round it to an integer and use it.
                    md = !k && n.c && round(n, n.e + 1, 1).gte(ONE) ? n : null;
                }
            }

            if (!xc) return x.toString();
            s = coeffToString(xc);

            // Determine initial denominator.
            // d is a power of 10 and the minimum max denominator that specifies the value exactly.
            e = d.e = s.length - x.e - 1;
            d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
            md = !md || n.cmp(d) > 0 ? e > 0 ? d : n1 : n;

            exp = MAX_EXP;
            MAX_EXP = 1 / 0;
            n = new BigNumber(s);

            // n0 = d1 = 0
            n0.c[0] = 0;

            for (;;) {
                q = div(n, d, 0, 1);
                d2 = d0.plus(q.times(d1));
                if (d2.cmp(md) == 1) break;
                d0 = d1;
                d1 = d2;
                n1 = n0.plus(q.times(d2 = n1));
                n0 = d2;
                d = n.minus(q.times(d2 = d));
                n = d2;
            }

            d2 = div(md.minus(d0), d1, 0, 1);
            n0 = n0.plus(d2.times(n1));
            d0 = d0.plus(d2.times(d1));
            n0.s = n1.s = x.s;
            e *= 2;

            // Determine which fraction is closer to x, n0/d0 or n1/d1
            arr = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().cmp(div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1.toString(), d1.toString()] : [n0.toString(), d0.toString()];

            MAX_EXP = exp;
            return arr;
        };

        /*
         * Return the value of this BigNumber converted to a number primitive.
         */
        P.toNumber = function () {
            return +this;
        };

        /*
         * Return a BigNumber whose value is the value of this BigNumber raised to the power n.
         * If m is present, return the result modulo m.
         * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
         * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using
         * ROUNDING_MODE.
         *
         * The modular power operation works efficiently when x, n, and m are positive integers,
         * otherwise it is equivalent to calculating x.toPower(n).modulo(m) (with POW_PRECISION 0).
         *
         * n {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
         * [m] {number|string|BigNumber} The modulus.
         *
         * 'pow() exponent not an integer: {n}'
         * 'pow() exponent out of range: {n}'
         *
         * Performs 54 loop iterations for n of 9007199254740991.
         */
        P.toPower = P.pow = function (n, m) {
            var k,
                y,
                z,
                i = mathfloor(n < 0 ? -n : +n),
                x = this;

            if (m != null) {
                id = 23;
                m = new BigNumber(m);
            }

            // Pass ±Infinity to Math.pow if exponent is out of range.
            if (!isValidInt(n, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, 23, 'exponent') && (!isFinite(n) || i > MAX_SAFE_INTEGER && (n /= 0) || parseFloat(n) != n && !(n = NaN)) || n == 0) {
                k = Math.pow(+x, n);
                return new BigNumber(m ? k % m : k);
            }

            if (m) {
                if (n > 1 && x.gt(ONE) && x.isInt() && m.gt(ONE) && m.isInt()) {
                    x = x.mod(m);
                } else {
                    z = m;

                    // Nullify m so only a single mod operation is performed at the end.
                    m = null;
                }
            } else if (POW_PRECISION) {

                // Truncating each coefficient array to a length of k after each multiplication
                // equates to truncating significant digits to POW_PRECISION + [28, 41],
                // i.e. there will be a minimum of 28 guard digits retained.
                // (Using + 1.5 would give [9, 21] guard digits.)
                k = mathceil(POW_PRECISION / LOG_BASE + 2);
            }

            y = new BigNumber(ONE);

            for (;;) {
                if (i % 2) {
                    y = y.times(x);
                    if (!y.c) break;
                    if (k) {
                        if (y.c.length > k) y.c.length = k;
                    } else if (m) {
                        y = y.mod(m);
                    }
                }

                i = mathfloor(i / 2);
                if (!i) break;
                x = x.times(x);
                if (k) {
                    if (x.c && x.c.length > k) x.c.length = k;
                } else if (m) {
                    x = x.mod(m);
                }
            }

            if (m) return y;
            if (n < 0) y = ONE.div(y);

            return z ? y.mod(z) : k ? round(y, POW_PRECISION, ROUNDING_MODE) : y;
        };

        /*
         * Return a string representing the value of this BigNumber rounded to sd significant digits
         * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
         * necessary to represent the integer part of the value in fixed-point notation, then use
         * exponential notation.
         *
         * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toPrecision() precision not an integer: {sd}'
         * 'toPrecision() precision out of range: {sd}'
         * 'toPrecision() rounding mode not an integer: {rm}'
         * 'toPrecision() rounding mode out of range: {rm}'
         */
        P.toPrecision = function (sd, rm) {
            return format(this, sd != null && isValidInt(sd, 1, MAX, 24, 'precision') ? sd | 0 : null, rm, 24);
        };

        /*
         * Return a string representing the value of this BigNumber in base b, or base 10 if b is
         * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
         * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
         * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
         * TO_EXP_NEG, return exponential notation.
         *
         * [b] {number} Integer, 2 to 64 inclusive.
         *
         * 'toString() base not an integer: {b}'
         * 'toString() base out of range: {b}'
         */
        P.toString = function (b) {
            var str,
                n = this,
                s = n.s,
                e = n.e;

            // Infinity or NaN?
            if (e === null) {

                if (s) {
                    str = 'Infinity';
                    if (s < 0) str = '-' + str;
                } else {
                    str = 'NaN';
                }
            } else {
                str = coeffToString(n.c);

                if (b == null || !isValidInt(b, 2, 64, 25, 'base')) {
                    str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e);
                } else {
                    str = convertBase(toFixedPoint(str, e), b | 0, 10, s);
                }

                if (s < 0 && n.c[0]) str = '-' + str;
            }

            return str;
        };

        /*
         * Return a new BigNumber whose value is the value of this BigNumber truncated to a whole
         * number.
         */
        P.truncated = P.trunc = function () {
            return round(new BigNumber(this), this.e + 1, 1);
        };

        /*
         * Return as toString, but do not accept a base argument, and include the minus sign for
         * negative zero.
         */
        P.valueOf = P.toJSON = function () {
            var str,
                n = this,
                e = n.e;

            if (e === null) return n.toString();

            str = coeffToString(n.c);

            str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e);

            return n.s < 0 ? '-' + str : str;
        };

        P.isBigNumber = true;

        if (config != null) BigNumber.config(config);

        return BigNumber;
    }

    // PRIVATE HELPER FUNCTIONS


    function bitFloor(n) {
        var i = n | 0;
        return n > 0 || n === i ? i : i - 1;
    }

    // Return a coefficient array as a string of base 10 digits.
    function coeffToString(a) {
        var s,
            z,
            i = 1,
            j = a.length,
            r = a[0] + '';

        for (; i < j;) {
            s = a[i++] + '';
            z = LOG_BASE - s.length;
            for (; z--; s = '0' + s) {}
            r += s;
        }

        // Determine trailing zeros.
        for (j = r.length; r.charCodeAt(--j) === 48;) {}
        return r.slice(0, j + 1 || 1);
    }

    // Compare the value of BigNumbers x and y.
    function compare(x, y) {
        var a,
            b,
            xc = x.c,
            yc = y.c,
            i = x.s,
            j = y.s,
            k = x.e,
            l = y.e;

        // Either NaN?
        if (!i || !j) return null;

        a = xc && !xc[0];
        b = yc && !yc[0];

        // Either zero?
        if (a || b) return a ? b ? 0 : -j : i;

        // Signs differ?
        if (i != j) return i;

        a = i < 0;
        b = k == l;

        // Either Infinity?
        if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;

        // Compare exponents.
        if (!b) return k > l ^ a ? 1 : -1;

        j = (k = xc.length) < (l = yc.length) ? k : l;

        // Compare digit by digit.
        for (i = 0; i < j; i++) {
            if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;
        } // Compare lengths.
        return k == l ? 0 : k > l ^ a ? 1 : -1;
    }

    /*
     * Return true if n is a valid number in range, otherwise false.
     * Use for argument validation when ERRORS is false.
     * Note: parseInt('1e+1') == 1 but parseFloat('1e+1') == 10.
     */
    function intValidatorNoErrors(n, min, max) {
        return (n = truncate(n)) >= min && n <= max;
    }

    function isArray(obj) {
        return Object.prototype.toString.call(obj) == '[object Array]';
    }

    /*
     * Convert string of baseIn to an array of numbers of baseOut.
     * Eg. convertBase('255', 10, 16) returns [15, 15].
     * Eg. convertBase('ff', 16, 10) returns [2, 5, 5].
     */
    function toBaseOut(str, baseIn, baseOut) {
        var j,
            arr = [0],
            arrL,
            i = 0,
            len = str.length;

        for (; i < len;) {
            for (arrL = arr.length; arrL--; arr[arrL] *= baseIn) {}
            arr[j = 0] += ALPHABET.indexOf(str.charAt(i++));

            for (; j < arr.length; j++) {

                if (arr[j] > baseOut - 1) {
                    if (arr[j + 1] == null) arr[j + 1] = 0;
                    arr[j + 1] += arr[j] / baseOut | 0;
                    arr[j] %= baseOut;
                }
            }
        }

        return arr.reverse();
    }

    function toExponential(str, e) {
        return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) + (e < 0 ? 'e' : 'e+') + e;
    }

    function toFixedPoint(str, e) {
        var len, z;

        // Negative exponent?
        if (e < 0) {

            // Prepend zeros.
            for (z = '0.'; ++e; z += '0') {}
            str = z + str;

            // Positive exponent
        } else {
            len = str.length;

            // Append zeros.
            if (++e > len) {
                for (z = '0', e -= len; --e; z += '0') {}
                str += z;
            } else if (e < len) {
                str = str.slice(0, e) + '.' + str.slice(e);
            }
        }

        return str;
    }

    function truncate(n) {
        n = parseFloat(n);
        return n < 0 ? mathceil(n) : mathfloor(n);
    }

    // EXPORT


    BigNumber = constructorFactory();
    BigNumber['default'] = BigNumber.BigNumber = BigNumber;

    // AMD.
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return BigNumber;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        // Node.js and other environments that support module.exports.
    } else if (typeof module != 'undefined' && module.exports) {
        module.exports = BigNumber;

        // Browser.
    } else {
        if (!globalObj) globalObj = typeof self != 'undefined' ? self : Function('return this')();
        globalObj.BigNumber = BigNumber;
    }
})(undefined);

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _authorTemplate = __webpack_require__(14);

var _authorTemplate2 = _interopRequireDefault(_authorTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var seq = ['ge', 'qu', 'ci', 'cv', 'hun'];

var HotAuthor = function (_migi$Component) {
  _inherits(HotAuthor, _migi$Component);

  function HotAuthor() {
    var _ref;

    _classCallCheck(this, HotAuthor);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = HotAuthor.__proto__ || Object.getPrototypeOf(HotAuthor)).call.apply(_ref, [this].concat(data)));

    _this.dataList = _this.props.dataList;
    return _this;
  }

  _createClass(HotAuthor, [{
    key: 'click',
    value: function click(e, vd, tvd) {
      e.preventDefault();
      var href = tvd.props.href;
      var title = tvd.props.title;
      jsBridge.pushWindow(href, {
        title: title
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "cp-hotauthor"], ["onClick", [[{ "a": { "_v": true } }, new migi.Cb(this, this.click)]]]], [new migi.Obj("dataList", this, function () {
        return this.dataList && this.dataList.length ? migi.createVd("ul", [], [this.dataList.map(function (item) {
          var type = [];
          if (item.Authortype) {
            for (var i = 0, len = item.Authortype.length; i < len; i++) {
              var code = _authorTemplate2.default.code2Data[item.Authortype[i].AuthorTypeID].css;
              if (code && type.indexOf(code) === -1) {
                type.push(code);
              }
            }
          }
          migi.sort(type, function (a, b) {
            if (seq.indexOf(a) === -1) {
              return true;
            }
            if (seq.indexOf(b) === -1) {
              return false;
            }
            return seq.indexOf(a) > seq.indexOf(b);
          });
          var url = '/author.html?authorID=' + item.AuthorID;
          return migi.createVd("li", [], [migi.createVd("a", [["href", url], ["class", "pic"], ["title", item.AuthorName]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img120_120_80(item.Head_url || '/src/common/head.png'))]]), type.slice(0, 2).map(function (item) {
            return migi.createVd("b", [["class", 'cp-author-type-' + item]]);
          })]), migi.createVd("a", [["href", url], ["class", "txt"], ["title", item.AuthorName]], [migi.createVd("span", [["class", "name"]], [item.AuthorName]), migi.createVd("span", [["class", "fans"]], ["粉丝 ", _util2.default.abbrNum(item.FansNumber)]), migi.createVd("span", [["class", "comment"]], ["留言 ", _util2.default.abbrNum(item.Popular)])]), migi.createVd("div", [["class", "info"]], ["合作", _util2.default.abbrNum(item.CooperationTimes), "次"])]);
        }), this.props.more ? migi.createVd("li", [["class", "more"]], [migi.createVd("a", [["href", this.props.more], ["title", "圈关系"]], ["查看更多"])]) : '']) : migi.createVd("div", [["class", "empty"]], [this.props.empty || '暂无数据']);
      })]);
    }
  }, {
    key: 'dataList',
    set: function set(v) {
      this.__setBind("dataList", v);this.__data("dataList");
    },
    get: function get() {
      return this.__getBind("dataList");
    }
  }]);

  return HotAuthor;
}(migi.Component);

migi.name(HotAuthor, "HotAuthor");exports.default = HotAuthor;

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HotWork = function (_migi$Component) {
  _inherits(HotWork, _migi$Component);

  function HotWork() {
    var _ref;

    _classCallCheck(this, HotWork);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = HotWork.__proto__ || Object.getPrototypeOf(HotWork)).call.apply(_ref, [this].concat(data)));

    _this.dataList = _this.props.dataList;
    return _this;
  }

  _createClass(HotWork, [{
    key: "click",
    value: function click(e, vd, tvd) {
      e.preventDefault();
      var href = tvd.props.href;
      var title = tvd.props.title;
      jsBridge.pushWindow(href, {
        title: title
      });
    }
  }, {
    key: "render",
    value: function render() {
      return migi.createVd("div", [["class", "cp-hotwork"], ["onClick", [[{ "a": { "_v": true } }, new migi.Cb(this, this.click)]]]], [new migi.Obj("dataList", this, function () {
        return this.dataList && this.dataList.length ? migi.createVd("ul", [], [this.dataList.map(function (item) {
          var url = "/works.html?worksID=" + item.WorksID;
          return migi.createVd("li", [], [migi.createVd("a", [["href", url], ["class", "pic"], ["title", item.Title]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img200_200_80(item.cover_Pic)) || '/src/common/blank.png']]), migi.createVd("span", [["class", "type"]], ["原创音乐"]), migi.createVd("span", [["class", "num"]], [_util2.default.abbrNum(item.Popular)]), item.WorkState === 2 || item.WorkState === 3 ? migi.createVd("span", [["class", "state"]], ["填坑中"]) : '']), migi.createVd("a", [["href", url], ["class", "txt"], ["title", item.Title]], [migi.createVd("span", [], [item.Title]), migi.createVd("span", [["class", "author"]], [(item.SingerName || []).join(' ')])])]);
        }), this.props.more ? migi.createVd("li", [["class", "more"]], [migi.createVd("a", [["href", this.props.more], ["title", "全部作品"]], ["查看更多"])]) : '']) : migi.createVd("div", [["class", "empty"]], ["暂无数据"]);
      })]);
    }
  }, {
    key: "dataList",
    set: function set(v) {
      this.__setBind("dataList", v);this.__data("dataList");
    },
    get: function get() {
      return this.__getBind("dataList");
    }
  }]);

  return HotWork;
}(migi.Component);

migi.name(HotWork, "HotWork");exports.default = HotWork;

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _WorksTypeEnum = __webpack_require__(12);

var _WorksTypeEnum2 = _interopRequireDefault(_WorksTypeEnum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HotMusicAlbum = function (_migi$Component) {
  _inherits(HotMusicAlbum, _migi$Component);

  function HotMusicAlbum() {
    var _ref;

    _classCallCheck(this, HotMusicAlbum);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = HotMusicAlbum.__proto__ || Object.getPrototypeOf(HotMusicAlbum)).call.apply(_ref, [this].concat(data)));

    _this.dataList = _this.props.dataList;
    return _this;
  }

  _createClass(HotMusicAlbum, [{
    key: 'click',
    value: function click(e, vd, tvd) {
      e.preventDefault();
      var href = tvd.props.href;
      var title = tvd.props.title;
      jsBridge.pushWindow(href, {
        title: title
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "cp-hotmusicalbum"], ["onClick", [[{ "a": { "_v": true } }, new migi.Cb(this, this.click)]]]], [new migi.Obj("dataList", this, function () {
        return this.dataList && this.dataList.length ? migi.createVd("ul", [], [this.dataList.map(function (item) {
          var url = '/works.html?worksID=' + item.WorksID;
          return migi.createVd("li", [], [migi.createVd("b", [["class", "bg"]]), migi.createVd("a", [["href", url], ["class", "pic"], ["title", item.Title]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img200_200_80(item.cover_Pic || '/src/common/blank.png'))]]), migi.createVd("span", [["class", "type"]], [_WorksTypeEnum2.default.NAME[item.WorkType]]), migi.createVd("span", [["class", "num"]], [_util2.default.abbrNum(item.Popular)]), item.WorkState === 2 || item.WorkState === 3 ? migi.createVd("span", [["class", "state"]], ["填坑中"]) : '']), migi.createVd("a", [["href", url], ["class", "txt"], ["title", item.Title]], [migi.createVd("span", [], [item.Title]), migi.createVd("span", [["class", "author"]], [(item.SingerName || []).join(' ')])])]);
        }), this.props.more ? migi.createVd("li", [["class", "more"]], [migi.createVd("a", [["href", this.props.more], ["title", "全部作品"]], ["查看更多"])]) : '']) : migi.createVd("div", [["class", "empty"]], ["暂无数据"]);
      })]);
    }
  }, {
    key: 'dataList',
    set: function set(v) {
      this.__setBind("dataList", v);this.__data("dataList");
    },
    get: function get() {
      return this.__getBind("dataList");
    }
  }]);

  return HotMusicAlbum;
}(migi.Component);

migi.name(HotMusicAlbum, "HotMusicAlbum");exports.default = HotMusicAlbum;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(5);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// QueryString
// ---------------
// This module provides utilities for dealing with query strings.
//
// Thanks to:
//  - http://nodejs.org/docs/v0.4.7/api/querystring.html
//  - http://developer.yahoo.com/yui/3/api/QueryString.html
//  - https://github.com/lifesinger/dew/tree/master/lib/querystring


// var QueryString = exports;

var QueryString = {};

// The escape/unescape function used by stringify/parse, provided so that it
// could be overridden if necessary. This is important in cases where
// non-standard delimiters are used, if the delimiters would not normally be
// handled properly by the built-in (en|de)codeURIComponent functions.
QueryString.escape = encodeURIComponent;

QueryString.unescape = function (s) {
    // The + character is interpreted as a space on the server side as well as
    // generated by forms with spaces in their fields.
    return decodeURIComponent(s.replace(/\+/g, ' '));
};

/**
 * Serialize an object to a query string. Optionally override the default
 * separator and assignment characters.
 *
 * stringify({foo: 'bar'})
 *   // returns 'foo=bar'
 *
 * stringify({foo: 'bar', baz: 'bob'}, ';', ':')
 *   // returns 'foo:bar;baz:bob'
 */
QueryString.stringify = function (obj, sep, eq, arrayKey) {
    if (!isPlainObject(obj)) return '';

    sep = sep || '&';
    eq = eq || '=';
    arrayKey = arrayKey || false;

    var buf = [],
        key,
        val;
    var escape = QueryString.escape;

    for (key in obj) {
        if (!hasOwnProperty.call(obj, key)) continue;

        val = obj[key];
        key = QueryString.escape(key);

        // val is primitive value
        if (isPrimitive(val)) {
            buf.push(key, eq, escape(val + ''), sep);
        }
        // val is not empty array
        else if (isArray(val) && val.length) {
                for (var i = 0; i < val.length; i++) {
                    if (isPrimitive(val[i])) {
                        buf.push(key, (arrayKey ? escape('[]') : '') + eq, escape(val[i] + ''), sep);
                    }
                }
            }
            // ignore other cases, including empty array, Function, RegExp, Date etc.
            else {
                    buf.push(key, eq, sep);
                }
    }

    buf.pop();
    return buf.join('');
};

/**
 * Deserialize a query string to an object. Optionally override the default
 * separator and assignment characters.
 *
 * parse('a=b&c=d')
 *   // returns {a: 'b', c: 'c'}
 */
QueryString.parse = function (str, sep, eq) {
    var ret = {};

    if (typeof str !== 'string' || trim(str).length === 0) {
        return ret;
    }

    var pairs = str.split(sep || '&');
    eq = eq || '=';
    var unescape = QueryString.unescape;

    for (var i = 0; i < pairs.length; i++) {

        var pair = pairs[i].split(eq);
        var key = unescape(trim(pair[0]));
        var val = unescape(trim(pair.slice(1).join(eq)));

        var m = key.match(/^(\w+)\[\]$/);
        if (m && m[1]) {
            key = m[1];
        }

        if (hasOwnProperty.call(ret, key)) {
            if (!isArray(ret[key])) {
                ret[key] = [ret[key]];
            }
            ret[key].push(val);
        } else {
            ret[key] = m ? [val] : val;
        }
    }

    return ret;
};

// Helpers

var toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var isArray = Array.isArray || function (val) {
    return toString.call(val) === '[object Array]';
};
var trim = String.prototype.trim ? function (str) {
    return str == null ? '' : String.prototype.trim.call(str);
} : function (str) {
    return str == null ? '' : str.toString().replace(/^\s+/, '').replace(/\s+$/, '');
};

/**
 * Checks to see if an object is a plain object (created using "{}" or
 * "new Object()" or "new FunctionClass()").
 */
function isPlainObject(o) {
    /**
     * NOTES:
     * isPlainObject(node = document.getElementById("xx")) -> false
     * toString.call(node):
     *   ie678 === '[object Object]', other === '[object HTMLElement]'
     * 'isPrototypeOf' in node:
     *   ie678 === false, other === true
     */
    return o && toString.call(o) === '[object Object]' && 'isPrototypeOf' in o;
}

/**
 * If the type of o is null, undefined, number, string, boolean,
 * return true.
 */
function isPrimitive(o) {
    return o !== Object(o);
}

module.exports = QueryString;

/***/ })

/******/ });