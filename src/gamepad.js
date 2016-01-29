var browser = require("./browser")

module.exports              = gamepad
browser.window.gamepadinput = gamepad

function gamepad(index) {
    index = index || 0;

    var gamepads = [];
    if (gamepad.mocks.length > 0) {
        gamepads = gamepad.mocks
    } else {
        gamepads =
            browser.navigator.getGamepads && browser.navigator.getGamepads() ||
            browser.navigator.webkitGetGamepads && browser.navigator.webkitGetGamepads() ||
            gamepad.mocks
    }
    return gamepads[index]
}
gamepad.mocks = [];