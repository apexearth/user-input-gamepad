var browser = require("./browser")

module.exports              = gamepad
browser.window.gamepadinput = gamepad

function gamepad(index) {
    index = index || 0;
    
    if (gamepad.mocks.length > 0) return gamepad.mocks[index]

    var gamepads =
            browser.navigator.getGamepads && browser.navigator.getGamepads() ||
            browser.navigator.webkitGetGamepads && browser.navigator.webkitGetGamepads() ||
            gamepad.mocks
    return gamepads[index];
}
gamepad.mocks        = [];
gamepad.onConnect    = function (callback) {
    return browser.window.addEventListener("gamepadconnected", function (event) {
        callback(event.gamepad)
    })
}
gamepad.onDisconnect = function (callback) {
    return browser.window.addEventListener("gamepaddisconnected", function (event) {
        callback(event.gamepad)
    })
}