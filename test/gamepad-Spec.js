var expect  = require("expect")
var event   = require("./event.js")
var gamepad = require("../src/gamepad.js")
var browser = require("../src/browser.js")

describe("gamepad.js", function () {
    it('should return undefined when gamepad doesn\'t exist', function () {
        expect(gamepad(0) === undefined
            || gamepad(0) !== undefined && gamepad(0).id === undefined).toEqual(true)
    })
    it('should return a gamepad when it exists', function () {
        addGamepad()
        expect(gamepad(0)).toEqual(gamepad.mocks[0])
        removeGamepad()
    })
})


function addGamepad() {
    var mockGamepad = {   // 360 Controller
        id:        gamepad.mocks.length,
        index:     gamepad.mocks.length,
        connected: true,
        timestamp: 1,
        mapping:   'standard',
        axes:      [0, 0, 0, 0],
        buttons:   [
            {pressed: false, value: 0},
            {pressed: false, value: 0},
            {pressed: false, value: 0},
            {pressed: false, value: 0},
            {pressed: false, value: 0},
            {pressed: false, value: 0},
            {pressed: false, value: 0},
            {pressed: false, value: 0},
            {pressed: false, value: 0},
            {pressed: false, value: 0},
            {pressed: false, value: 0},
            {pressed: false, value: 0},
            {pressed: false, value: 0},
            {pressed: false, value: 0},
            {pressed: false, value: 0},
            {pressed: false, value: 0}
        ]
    }
    gamepad.mocks.push(mockGamepad)
}
function removeGamepad() {
    gamepad.mocks.pop()
}