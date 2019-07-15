"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _const = require("./const");

var _utils = require("./utils.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var HOURS = _toConsumableArray(Array(24).keys());

var MINUTES = _toConsumableArray(Array(60).keys());

var Index = (0, _react.memo)(function (_ref) {
  var startDatePickedArray = _ref.startDatePickedArray,
      endDatePickedArray = _ref.endDatePickedArray,
      handleChooseStartTimeHour = _ref.handleChooseStartTimeHour,
      handleChooseStartTimeMinute = _ref.handleChooseStartTimeMinute,
      handleChooseEndTimeHour = _ref.handleChooseEndTimeHour,
      handleChooseEndTimeMinute = _ref.handleChooseEndTimeMinute,
      startTimePickedArray = _ref.startTimePickedArray,
      endTimePickedArray = _ref.endTimePickedArray;
  return _react["default"].createElement("div", {
    className: "react-minimal-datetime-range__time-select-wrapper"
  }, _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "react-minimal-datetime-range__date"
  }, startDatePickedArray.join('-')), _react["default"].createElement("div", {
    className: "react-minimal-datetime-range__date"
  }, endDatePickedArray.join('-'))), _react["default"].createElement("div", {
    className: "react-minimal-datetime-range__time-select-options-wrapper"
  }, HOURS.map(function (i) {
    var item = (0, _const.formatDateString)(i);
    return _react["default"].createElement("div", {
      key: i,
      className: (0, _utils.cx)('react-minimal-datetime-range__time-select-option', item === startTimePickedArray[0] && 'active'),
      onClick: function onClick() {
        return handleChooseStartTimeHour(item);
      }
    }, item);
  })), _react["default"].createElement("div", {
    className: "react-minimal-datetime-range__time-select-options-wrapper"
  }, MINUTES.map(function (i) {
    var item = (0, _const.formatDateString)(i);
    return _react["default"].createElement("div", {
      key: i,
      className: (0, _utils.cx)('react-minimal-datetime-range__time-select-option', item === startTimePickedArray[1] && 'active'),
      onClick: function onClick() {
        return handleChooseStartTimeMinute(item);
      }
    }, item);
  })), _react["default"].createElement("div", {
    className: "react-minimal-datetime-range__time-select-options-wrapper"
  }, HOURS.map(function (i) {
    var item = (0, _const.formatDateString)(i);
    return _react["default"].createElement("div", {
      key: i,
      className: (0, _utils.cx)('react-minimal-datetime-range__time-select-option', item === endTimePickedArray[0] && 'active'),
      onClick: function onClick() {
        return handleChooseEndTimeHour(item);
      }
    }, item);
  })), _react["default"].createElement("div", {
    className: "react-minimal-datetime-range__time-select-options-wrapper"
  }, MINUTES.map(function (i) {
    var item = (0, _const.formatDateString)(i);
    return _react["default"].createElement("div", {
      key: i,
      className: (0, _utils.cx)('react-minimal-datetime-range__time-select-option', item === endTimePickedArray[1] && 'active'),
      onClick: function onClick() {
        return handleChooseEndTimeMinute(item);
      }
    }, item);
  })));
});
var _default = Index;
exports["default"] = _default;