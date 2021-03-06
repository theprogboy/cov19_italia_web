webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/LeftSideBar.js":
/*!***********************************!*\
  !*** ./components/LeftSideBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_live_clock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-live-clock */ "./node_modules/react-live-clock/lib/index.js");
/* harmony import */ var react_live_clock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_live_clock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CardStat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardStat */ "./components/CardStat.js");
var _this = undefined,
    _jsxFileName = "D:\\Code\\Personal\\dev\\covid19it\\cov19ItaliaWeb\\components\\LeftSideBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var LeftSideBar = function LeftSideBar(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    nuovi_positivi: 0,
    totale_casi: 0,
    deceduti: 0,
    casi_testati: 0,
    tamponi: 0,
    terapia_intensiva: 0,
    data: Date.now()
  }),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      toolTip = _useState2[0],
      setToolTip = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://localhost:8000/api/" + "stats").then(function (res) {
      var resData = res.data[0];
      setState({
        nuovi_positivi: resData.nuovi_positivi,
        totale_casi: resData.totale_casi,
        deceduti: resData.deceduti,
        casi_testati: resData.casi_testati,
        tamponi: resData.tamponi,
        terapia_intensiva: resData.terapia_intensiva,
        "l'ultimo_aggiornamento": formatDate(resData.data)
      });
      showToolTip();
    });
  }, []);

  var showToolTip = function showToolTip() {
    if (localStorage.getItem("darkMode") === null) {
      setTimeout(function () {
        setToolTip(true);
        setTimeout(function () {
          setToolTip(false);
        }, 5000);
      }, 4000);
    }
  };

  var makeUpperCase = function makeUpperCase(text) {
    var splitedText = text.split("_");
    var result = "";

    for (var i = 0; i < splitedText.length; i++) {
      result += " " + splitedText[i][0].toUpperCase() + splitedText[i].slice(1);
    }

    return result;
  };

  var formatDate = function formatDate(dateString) {
    return new Date(dateString).toLocaleString("it-IT", {
      timeZone: "UTC"
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "border-bottom border-gray w-100 px-2 d-flex align-items-center  justify-content-between " + (props.darkMode ? "darkMode" : ""),
    style: {
      height: 90
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      width: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "header-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "logo_anim",
    src: "https://image.flaticon.com/icons/svg/2659/2659980.svg",
    alt: "cov19",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "h5 mb-0 mx-2 font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, "Statistica"), __jsx("span", {
    className: "lightIcon tooltip-c",
    onClick: props.toggleDarkMode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: !props.darkMode ? "https://image.flaticon.com/icons/svg/841/841641.svg" : "https://image.flaticon.com/icons/png/512/841/841539.png",
    width: "20",
    alt: "flaticon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: "tooltiptext " + (toolTip ? "tooltiptext-show" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, "Passare alla modalit\xE0 luce"))), __jsx("p", {
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx(react_live_clock__WEBPACK_IMPORTED_MODULE_2___default.a, {
    format: "D/MM/YYYY:HH:mm:ss",
    ticking: true,
    timezone: "Europe/Rome",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "w-100 d-flex flex-wrap align-items-start align-content-start position-relative customScrollbar " + (props.darkMode ? "bg-dark" : ""),
    style: {
      height: "calc(100% - 90px)",
      overflowY: "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, Object.keys(state).map(function (key, index) {
    return __jsx(_CardStat__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: makeUpperCase(key),
      text: state[key],
      key: index,
      dateField: key == "l'ultimo_aggiornamento" ? true : false,
      darkMode: props.darkMode,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LeftSideBar);

/***/ })

})
//# sourceMappingURL=index.js.ef8b7312b0b053c37d67.hot-update.js.map