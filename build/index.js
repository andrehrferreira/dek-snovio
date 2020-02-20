'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scope = require('@dekproject/scope');

var _snovioApi = require('snovio-api');

var _snovioApi2 = _interopRequireDefault(_snovioApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    try {
        if (!process.env.hasOwnProperty('SNOVIO_USERID') || !process.env.hasOwnProperty('SNOVIO_SECRET')) {
            console.log('[ Snov.io ] - There is no SNOVIO_USERID or SNOVIO_SECRET variable in the .env file.');
        } else {
            _scope.$.set("snovio", new _snovioApi2.default(process.env.SNOVIO_USERID, process.env.SNOVIO_SECRET));
        }
    } catch (e) {
        console.log('[ Snov.io ] - ' + e.message);
    }
};
//# sourceMappingURL=index.js.map