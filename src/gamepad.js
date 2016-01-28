var browser = require("./browser")

module.exports              = gamepad
browser.window.gamepadinput = gamepad

function gamepad(index) {
    index        = index || 0;
    var gamepads =
            browser.navigator.getGamepads && browser.navigator.getGamepads() ||
            browser.navigator.webkitGetGamepads && browser.navigator.webkitGetGamepads()
    return gamepad.mocks.concat(gamepads)[index];
}
gamepad.mocks = [];
