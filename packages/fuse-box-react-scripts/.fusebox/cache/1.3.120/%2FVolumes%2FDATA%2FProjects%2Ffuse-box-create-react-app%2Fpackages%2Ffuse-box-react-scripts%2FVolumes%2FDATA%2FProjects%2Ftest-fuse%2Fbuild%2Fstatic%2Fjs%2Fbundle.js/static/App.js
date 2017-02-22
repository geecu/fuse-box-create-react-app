module.exports = { contents : "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _logo = require('./logo.svg');\n\nvar _logo2 = _interopRequireDefault(_logo);\n\nrequire('./App.css');\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'App' },\n        _react2.default.createElement(\n          'div',\n          { className: 'App-header' },\n          _react2.default.createElement('img', { src: _logo2.default, className: 'App-logo', alt: 'logo' }),\n          _react2.default.createElement(\n            'h2',\n            null,\n            'Welcome to React'\n          )\n        ),\n        _react2.default.createElement(\n          'p',\n          { className: 'App-intro' },\n          'To get started, edit ',\n          _react2.default.createElement(\n            'code',\n            null,\n            'src/App.js'\n          ),\n          ' and save to reload.'\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;", 
dependencies : ["react","./logo.svg","./App.css"], 
sourceMap : "{\"version\":3,\"sources\":[\"App.js\"],\"names\":[\"App\"],\"mappings\":\";;;;;;;;AAAA;;;;AACA;;;;AACA;;;;;;;;;;IAEMA,G;;;;;;;;;;;6BACK;AACP,aACE;AAAA;AAAA,UAAK,WAAU,KAAf;AACE;AAAA;AAAA,YAAK,WAAU,YAAf;AACE,iDAAK,mBAAL,EAAgB,WAAU,UAA1B,EAAqC,KAAI,MAAzC,GADF;AAEE;AAAA;AAAA;AAAA;AAAA;AAFF,SADF;AAKE;AAAA;AAAA,YAAG,WAAU,WAAb;AAAA;AACuB;AAAA;AAAA;AAAA;AAAA,WADvB;AAAA;AAAA;AALF,OADF;AAWD;;;;;;kBAGYA,G\",\"file\":\"App.js\",\"sourcesContent\":[\"import React, { Component } from 'react';\\nimport logo from './logo.svg';\\nimport './App.css';\\n\\nclass App extends Component {\\n  render() {\\n    return (\\n      <div className=\\\"App\\\">\\n        <div className=\\\"App-header\\\">\\n          <img src={logo} className=\\\"App-logo\\\" alt=\\\"logo\\\" />\\n          <h2>Welcome to React</h2>\\n        </div>\\n        <p className=\\\"App-intro\\\">\\n          To get started, edit <code>src/App.js</code> and save to reload.\\n        </p>\\n      </div>\\n    );\\n  }\\n}\\n\\nexport default App;\\n\"]}",
headerContent : undefined, 
mtime : 1487722368000
};