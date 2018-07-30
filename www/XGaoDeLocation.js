var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'XGaoDeLocation', 'coolMethod', [arg0]);
};

exports.getCurrentPosition = function (success, error) {
    exec(success, error, 'XGaoDeLocation', 'getCurrentPosition', []);
};