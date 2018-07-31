var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'XGaoDeLocation', 'coolMethod', [arg0]);
};

exports.getCurrentPosition = function (success, error) {
    exec(success, error, 'XGaoDeLocation', 'getCurrentPosition', []);
};

exports.watchPosition = function(success, error) {
    exec(success, error, "XGaoDeLocation", "watchPosition", []);
};

exports.clearWatch = function(success, error) {
    exec(success, error, "XGaoDeLocation", "clearWatch", []);
};