"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactAddonsCssTransitionGroup = _interopRequireDefault(require("react-addons-css-transition-group"));

var _locale = _interopRequireDefault(require("./locale.js"));

var _const = require("./const");

var _utils = require("./utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TODAY = new Date();
var YEAR = TODAY.getFullYear();
var MONTH = TODAY.getMonth() + 1;
var DATE = TODAY.getDate();
var ITEM_HEIGHT = 40;
var Index = (0, _react.memo)(function (_ref) {
  var _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? 'en-us' : _ref$locale,
      _ref$defaultDate = _ref.defaultDate,
      defaultDate = _ref$defaultDate === void 0 ? '' : _ref$defaultDate,
      _ref$onYearPicked = _ref.onYearPicked,
      onYearPicked = _ref$onYearPicked === void 0 ? function () {} : _ref$onYearPicked,
      _ref$onMonthPicked = _ref.onMonthPicked,
      onMonthPicked = _ref$onMonthPicked === void 0 ? function () {} : _ref$onMonthPicked,
      _ref$onDatePicked = _ref.onDatePicked,
      onDatePicked = _ref$onDatePicked === void 0 ? function () {} : _ref$onDatePicked,
      _ref$onResetDate = _ref.onResetDate,
      onResetDate = _ref$onResetDate === void 0 ? function () {} : _ref$onResetDate,
      _ref$onResetDefaultDa = _ref.onResetDefaultDate,
      onResetDefaultDate = _ref$onResetDefaultDa === void 0 ? function () {} : _ref$onResetDefaultDa;
  var defaultDateDate = DATE;
  var defaultDateMonth = MONTH;
  var defaultDateYear = YEAR;
  var defaultDates = (0, _const.getDaysArray)(YEAR, MONTH);
  var isDefaultDateValid = (0, _react.useMemo)(function () {
    return (0, _utils.isValidDate)(defaultDate);
  }, [defaultDate]);

  if (isDefaultDateValid) {
    var dateStr = defaultDate.split('-');
    defaultDateYear = Number(dateStr[0]);
    defaultDateMonth = Number(dateStr[1]);
    defaultDateDate = Number(dateStr[2]);
    defaultDates = (0, _const.getDaysArray)(defaultDateYear, defaultDateMonth);
  }

  var defaultYearStr = String(defaultDateYear);
  var defaultMonthStr = (0, _const.formatDateString)(defaultDateMonth);
  var defaultDateStr = (0, _const.formatDateString)(defaultDateDate);

  var _useState = (0, _react.useState)(defaultDates),
      _useState2 = _slicedToArray(_useState, 2),
      dates = _useState2[0],
      setDates = _useState2[1];

  var _useState3 = (0, _react.useState)({
    year: defaultYearStr,
    month: defaultMonthStr,
    string: "".concat(defaultYearStr, "-").concat(defaultMonthStr)
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      pickedYearMonth = _useState4[0],
      setPickedYearMonth = _useState4[1];

  var _useState5 = (0, _react.useState)({
    year: defaultYearStr,
    month: defaultMonthStr,
    date: defaultDateStr
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      defaultDateObj = _useState6[0],
      setDefaultDateObj = _useState6[1];

  var _useState7 = (0, _react.useState)({
    year: defaultYearStr,
    month: defaultMonthStr,
    date: defaultDateStr
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      pickedDateInfo = _useState8[0],
      setPickedDateInfo = _useState8[1];

  var _useState9 = (0, _react.useState)(_const.NEXT_TRANSITION),
      _useState10 = _slicedToArray(_useState9, 2),
      direction = _useState10[0],
      setDirection = _useState10[1];

  var _useState11 = (0, _react.useState)((0, _const.getYearSet)(defaultDateYear)),
      _useState12 = _slicedToArray(_useState11, 2),
      yearSelectorPanelList = _useState12[0],
      setYearSelectorPanelList = _useState12[1];

  var _useState13 = (0, _react.useState)(defaultDateYear),
      _useState14 = _slicedToArray(_useState13, 2),
      yearSelectorPanel = _useState14[0],
      setYearSelectorPanel = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      showMask = _useState16[0],
      setShowMask = _useState16[1];

  var _useState17 = (0, _react.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      showSelectorPanel = _useState18[0],
      setShowSelectorPanel = _useState18[1];

  var $monthSelectorPanel = (0, _react.useRef)(null);
  var onMouseDown = (0, _react.useCallback)(function () {}, []);
  var onMouseUp = (0, _react.useCallback)(function () {}, []);
  (0, _react.useEffect)(function () {
    setDates((0, _const.getDaysArray)(Number(pickedYearMonth.year), Number(pickedYearMonth.month)));
  }, [pickedYearMonth]);
  var pickYear = (0, _react.useCallback)(function (year, direction) {
    year = Number(year);

    if (direction === _const.PREV_TRANSITION) {
      year = year - 1;
    } else {
      year = year + 1;
    }

    setPickedYearMonth(_objectSpread({}, pickedYearMonth, {
      year: year,
      string: "".concat(year, "-").concat(pickedYearMonth.month)
    }));
    setDirection(direction);
    onYearPicked({
      year: year
    });
  }, [pickedYearMonth]);
  var pickMonth = (0, _react.useCallback)(function (month, direction) {
    month = Number(month);
    var year = Number(pickedYearMonth.year);

    if (direction === _const.PREV_TRANSITION) {
      if (month === 1) {
        month = 12;
        year = year - 1;
      } else {
        month = month - 1;
      }
    } else {
      if (month === 12) {
        month = 1;
        year = year + 1;
      } else {
        month = month + 1;
      }
    }

    var yearStr = String(year);
    var monthStr = (0, _const.formatDateString)(month);
    setPickedYearMonth(_objectSpread({}, pickedYearMonth, {
      year: yearStr,
      month: monthStr,
      string: "".concat(yearStr, "-").concat(monthStr)
    }));
    setDirection(direction);
    onMonthPicked({
      year: yearStr,
      month: monthStr
    });
  }, [pickedYearMonth]);
  var pickDate = (0, _react.useCallback)(function (pickedDate) {
    setPickedDateInfo(_objectSpread({}, pickedDateInfo, {
      year: pickedYearMonth.year,
      month: pickedYearMonth.month,
      date: (0, _const.formatDateString)(pickedDate)
    }));
    onDatePicked(pickedDateInfo);
  }, [pickedYearMonth, pickedDateInfo]);
  var reset = (0, _react.useCallback)(function () {
    var today = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var year = YEAR;
    var month = MONTH;
    var date = DATE;

    if (!today) {
      var _dateStr = defaultDate.split('-');

      year = Number(_dateStr[0]);
      month = Number(_dateStr[1]);
      date = Number(_dateStr[2]);
    }

    var direction = _const.NEXT_TRANSITION;

    if (year < Number(pickedYearMonth.year)) {
      direction = _const.PREV_TRANSITION;
    } else if (year === Number(pickedYearMonth.year)) {
      if (month < Number(pickedYearMonth.month)) {
        direction = _const.PREV_TRANSITION;
      }
    }

    var yearStr = (0, _const.formatDateString)(year);
    var monthStr = (0, _const.formatDateString)(month);
    var dateStr = (0, _const.formatDateString)(date);
    setPickedDateInfo(_objectSpread({}, pickedDateInfo, {
      year: yearStr,
      month: monthStr,
      date: dateStr
    }));
    setPickedYearMonth(_objectSpread({}, pickedYearMonth, {
      year: yearStr,
      month: monthStr,
      string: "".concat(yearStr, "-").concat(monthStr)
    }));
    changeSelectorPanelYearSet(year, direction);

    if (!today) {
      onResetDefaultDate(pickedDateInfo);
    } else {
      onResetDate(pickedDateInfo);
    }
  }, [pickedYearMonth]);
  var changeSelectorPanelYearSet = (0, _react.useCallback)(function (yearSelectorPanel, direction) {
    setDirection(direction);
    setYearSelectorPanel(yearSelectorPanel);
    setYearSelectorPanelList((0, _const.getYearSet)(yearSelectorPanel));
  }, []);
  var handleShowSelectorPanel = (0, _react.useCallback)(function () {
    setShowSelectorPanel(!showSelectorPanel);
    setShowMask(!showMask);
  }, [showSelectorPanel, showMask]);
  var transitionContainerStyle;
  var content;

  if (dates.length) {
    var row = dates.length / _const.WEEK_NUMBER;
    var rowIndex = 1;
    var rowObj = {};
    dates.map(function (item, key) {
      if (key < rowIndex * _const.WEEK_NUMBER) {
        if (!rowObj[rowIndex]) {
          rowObj[rowIndex] = [];
        }

        rowObj[rowIndex].push(item);
      } else {
        rowIndex = rowIndex + 1;

        if (!rowObj[rowIndex]) {
          rowObj[rowIndex] = [];
        }

        rowObj[rowIndex].push(item);
      }
    });
    content = _react["default"].createElement(CalendarBody, {
      data: rowObj,
      pickedYearMonth: pickedYearMonth,
      pickedDateInfo: pickedDateInfo,
      onClick: pickDate,
      key: pickedYearMonth.string
    });
    transitionContainerStyle = {
      height: "".concat(row * ITEM_HEIGHT, "px")
    };
  }

  var captionHtml = _locale["default"][locale].weeks.map(function (item, key) {
    return _react["default"].createElement("div", {
      className: "react-minimal-datetime-range-calendar__table-caption react-minimal-datetime-range-calendar__table-cel no-border",
      key: key
    }, item);
  });

  var selectorPanelClass = (0, _utils.cx)('react-minimal-datetime-range-dropdown', 'react-minimal-datetime-range-calendar__selector-panel', showSelectorPanel && 'visible');

  var selectorPanelMonthHtml = _locale["default"][locale].months.map(function (item, key) {
    var itemMonth = key + 1;
    var monthItemClass = (0, _utils.cx)('react-minimal-datetime-range-dropdown-calendar__month-item', itemMonth == pickedYearMonth.month && 'active');
    var month = itemMonth - 1;
    var direction = _const.NEXT_TRANSITION;

    if (itemMonth < pickedYearMonth.month) {
      direction = _const.PREV_TRANSITION;
      month = itemMonth + 1;
    }

    return _react["default"].createElement("div", {
      className: monthItemClass,
      onClick: itemMonth !== pickedYearMonth.month ? function () {
        return pickMonth(month, direction);
      } : function () {
        return;
      },
      key: key
    }, _react["default"].createElement("div", null, item));
  });

  var selectorPanelYearHtml;

  if (yearSelectorPanelList.length) {
    selectorPanelYearHtml = yearSelectorPanelList.map(function (item, key) {
      var yearItemClass = (0, _utils.cx)('react-minimal-datetime-range-dropdown-calendar__year-item', item == pickedYearMonth.year && 'active');
      var year = item - 1;
      var direction = _const.NEXT_TRANSITION;

      if (item < pickedYearMonth.year) {
        direction = _const.PREV_TRANSITION;
        year = item + 1;
      }

      return _react["default"].createElement("div", {
        className: yearItemClass,
        onClick: item !== pickedYearMonth.year ? function () {
          return pickYear(year, direction);
        } : function () {
          return;
        },
        key: key
      }, _react["default"].createElement("span", {
        style: {
          verticalAlign: 'middle'
        }
      }, item));
    });
  }

  return _react["default"].createElement("div", {
    className: "react-minimal-datetime-range-calendar"
  }, _react["default"].createElement("div", {
    className: "react-minimal-datetime-range-calendar__header"
  }, _react["default"].createElement("div", {
    className: selectorPanelClass,
    ref: $monthSelectorPanel,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onTouchEnd: onMouseDown,
    onTouchCancel: onMouseUp
  }, _react["default"].createElement("div", {
    className: "react-minimal-datetime-range-dropdown-calendar__menu"
  }, _react["default"].createElement("div", {
    className: "react-minimal-datetime-range-dropdown-calendar__month"
  }, selectorPanelMonthHtml), _react["default"].createElement("div", {
    style: {
      height: '10px'
    }
  }), _react["default"].createElement("div", {
    className: "react-minimal-datetime-range__col react-minimal-datetime-range__col-0-5"
  }, _react["default"].createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    style: {
      verticalAlign: 'middle'
    },
    onClick: function onClick() {
      return changeSelectorPanelYearSet(yearSelectorPanel - _const.SELECTOR_YEAR_SET_NUMBER, _const.PREV_TRANSITION);
    }
  }, _react["default"].createElement("path", {
    d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
  }), _react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }))), _react["default"].createElement("div", {
    className: "react-minimal-datetime-range__col react-minimal-datetime-range__col-9"
  }, _react["default"].createElement(_reactAddonsCssTransitionGroup["default"], {
    className: "react-minimal-datetime-range-calendar__selector-panel-year-set-container",
    transitionName: direction === _const.NEXT_TRANSITION ? 'forward' : 'backward',
    transitionAppearTimeout: 500,
    transitionEnterTimeout: 300,
    transitionLeaveTimeout: 300
  }, _react["default"].createElement("div", {
    className: "react-minimal-datetime-range-dropdown-calendar__year",
    key: yearSelectorPanelList
  }, selectorPanelYearHtml))), _react["default"].createElement("div", {
    className: "react-minimal-datetime-range__col react-minimal-datetime-range__col-0-5"
  }, _react["default"].createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    style: {
      verticalAlign: 'middle'
    },
    onClick: function onClick() {
      return changeSelectorPanelYearSet(yearSelectorPanel + _const.SELECTOR_YEAR_SET_NUMBER, _const.NEXT_TRANSITION);
    }
  }, _react["default"].createElement("path", {
    d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
  }), _react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }))))), _react["default"].createElement("div", {
    className: "react-minimal-datetime-range__col react-minimal-datetime-range__col-3"
  }, _react["default"].createElement("div", {
    className: "react-minimal-datetime-range__col react-minimal-datetime-range-calendar__previous",
    onClick: function onClick() {
      return pickYear(pickedYearMonth.year, _const.PREV_TRANSITION);
    }
  }, _react["default"].createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24"
  }, _react["default"].createElement("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M24 24H0V0h24v24z"
  }))), _react["default"].createElement("div", {
    className: "react-minimal-datetime-range__col react-minimal-datetime-range-calendar__sub-previous",
    onClick: function onClick() {
      return pickMonth(pickedYearMonth.month, _const.PREV_TRANSITION);
    }
  }, _react["default"].createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24"
  }, _react["default"].createElement("path", {
    d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
  }), _react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  })))), _react["default"].createElement("div", {
    className: "react-minimal-datetime-range__col react-minimal-datetime-range__col-6"
  }, _react["default"].createElement(_reactAddonsCssTransitionGroup["default"], {
    className: "react-minimal-datetime-range-calendar__title-container",
    transitionName: direction === _const.NEXT_TRANSITION ? 'forward' : 'backward',
    transitionAppearTimeout: 500,
    transitionEnterTimeout: 300,
    transitionLeaveTimeout: 300
  }, _react["default"].createElement("div", {
    className: "react-minimal-datetime-range-calendar__title",
    key: pickedYearMonth.string
  }, _react["default"].createElement("span", {
    className: "react-minimal-datetime-range-calendar__clicker",
    onClick: handleShowSelectorPanel,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp
  }, _react["default"].createElement("span", {
    className: "react-minimal-datetime-range-calendar__clicker"
  }, _react["default"].createElement("span", null, "".concat(_locale["default"][locale].months[pickedYearMonth.month - 1]))), _react["default"].createElement("span", null, "\xA0"), _react["default"].createElement("span", {
    className: "react-minimal-datetime-range-calendar__clicker"
  }, _react["default"].createElement("span", null, "".concat(pickedYearMonth.year))))))), _react["default"].createElement("div", {
    className: "react-minimal-datetime-range__col react-minimal-datetime-range__col-3"
  }, _react["default"].createElement("div", {
    className: "react-minimal-datetime-range__col react-minimal-datetime-range-calendar__next",
    onClick: function onClick() {
      return pickMonth(pickedYearMonth.month, _const.NEXT_TRANSITION);
    }
  }, _react["default"].createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24"
  }, _react["default"].createElement("path", {
    d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
  }), _react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }))), _react["default"].createElement("div", {
    className: "react-minimal-datetime-range__col react-minimal-datetime-range-calendar__sub-next",
    onClick: function onClick() {
      return pickYear(pickedYearMonth.year, _const.NEXT_TRANSITION);
    }
  }, _react["default"].createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24"
  }, _react["default"].createElement("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }))))), _react["default"].createElement("div", {
    className: "react-minimal-datetime-range-calendar__content"
  }, _react["default"].createElement("div", {
    className: "react-minimal-datetime-range-calendar__table"
  }, _react["default"].createElement("div", {
    className: "react-minimal-datetime-range-calendar__table-row"
  }, captionHtml)), _react["default"].createElement(_reactAddonsCssTransitionGroup["default"], {
    className: "react-minimal-datetime-range-calendar__body-container",
    transitionName: direction === _const.NEXT_TRANSITION ? 'forward' : 'backward',
    transitionAppearTimeout: 500,
    transitionEnterTimeout: 300,
    transitionLeaveTimeout: 300,
    style: transitionContainerStyle
  }, content)), _react["default"].createElement("div", {
    className: "react-minimal-datetime-range-calendar__button react-minimal-datetime-range-calendar__today",
    onClick: function onClick() {
      return reset(true);
    }
  }, _react["default"].createElement("span", {
    className: "react-minimal-datetime-range-calendar__inline-span"
  }, _locale["default"][locale]['today']), _react["default"].createElement("span", {
    className: "react-minimal-datetime-range-calendar__inline-span react-minimal-datetime-range-calendar__icon react-minimal-datetime-range-refresh"
  })), isDefaultDateValid ? _react["default"].createElement("div", {
    className: "react-minimal-datetime-range-calendar__button react-minimal-datetime-range-calendar__default-day",
    onClick: function onClick() {
      return reset(false);
    }
  }, _react["default"].createElement("span", {
    className: "react-minimal-datetime-range-calendar__inline-span"
  }, _locale["default"][locale]['reset-date']), _react["default"].createElement("span", {
    className: "react-minimal-datetime-range-calendar__inline-span react-minimal-datetime-range-calendar__icon react-minimal-datetime-range-refresh"
  })) : "");
});
var CalendarBody = (0, _react.memo)(function (_ref2) {
  var _ref2$data = _ref2.data,
      data = _ref2$data === void 0 ? {} : _ref2$data,
      _ref2$pickedDateInfo = _ref2.pickedDateInfo,
      pickedDateInfo = _ref2$pickedDateInfo === void 0 ? {} : _ref2$pickedDateInfo,
      _ref2$pickedYearMonth = _ref2.pickedYearMonth,
      pickedYearMonth = _ref2$pickedYearMonth === void 0 ? {} : _ref2$pickedYearMonth,
      _ref2$onClick = _ref2.onClick,
      onClick = _ref2$onClick === void 0 ? function () {} : _ref2$onClick;
  var content = Object.keys(data).map(function (key) {
    var colHtml;

    if (data[key].length) {
      colHtml = data[key].map(function (item, key) {
        var isPicked = pickedDateInfo.date === item.name && pickedDateInfo.month === item.month && pickedDateInfo.year === item.year;
        var isDisabled = pickedYearMonth.month !== item.month;
        var datePickerItemClass = (0, _utils.cx)('react-minimal-datetime-range-calendar__table-cel', 'react-minimal-datetime-range-calendar__date-item', isDisabled && 'disabled', DATE == item.name && MONTH == item.month && YEAR == item.year && 'today', isPicked && 'active');
        return _react["default"].createElement(CalendarItem, {
          key: key,
          item: item,
          onClick: onClick,
          isPicked: isPicked,
          isDisabled: isDisabled,
          datePickerItemClass: datePickerItemClass
        });
      });
    }

    return _react["default"].createElement("div", {
      className: "react-minimal-datetime-range-calendar__table-row",
      key: key
    }, colHtml);
  });
  return _react["default"].createElement("div", {
    className: "react-minimal-datetime-range-calendar__table slide"
  }, content);
});
var CalendarItem = (0, _react.memo)(function (_ref3) {
  var _ref3$item = _ref3.item,
      item = _ref3$item === void 0 ? {} : _ref3$item,
      _ref3$isPicked = _ref3.isPicked,
      isPicked = _ref3$isPicked === void 0 ? false : _ref3$isPicked,
      _ref3$isDisabled = _ref3.isDisabled,
      isDisabled = _ref3$isDisabled === void 0 ? false : _ref3$isDisabled,
      _ref3$datePickerItemC = _ref3.datePickerItemClass,
      datePickerItemClass = _ref3$datePickerItemC === void 0 ? '' : _ref3$datePickerItemC,
      _ref3$onClick = _ref3.onClick,
      onClick = _ref3$onClick === void 0 ? function () {} : _ref3$onClick;
  var handleOnClick = (0, _react.useCallback)(function () {
    onClick(item.name);
  }, [item.name]);
  return _react["default"].createElement("div", {
    className: "".concat(datePickerItemClass),
    onClick: !isDisabled ? handleOnClick : function () {
      return;
    }
  }, item.name, isPicked && _react["default"].createElement("svg", {
    className: "react-minimal-datetime-range-check",
    width: "15",
    height: "15",
    viewBox: "0 0 24 24"
  }, _react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), _react["default"].createElement("path", {
    className: "react-minimal-datetime-range-check__path",
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  })));
});
var _default = Index;
exports["default"] = _default;