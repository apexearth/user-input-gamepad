# user-input-gamepad

![](https://travis-ci.org/apexearth/user-input-gamepad.svg)
![](http://img.shields.io/npm/v/user-input-gamepad.svg?style=flat)
![](http://img.shields.io/npm/dm/user-input-gamepad.svg?style=flat)
![](http://img.shields.io/npm/l/user-input-gamepad.svg?style=flat)

Provides access to gamepads for developers using Node.js for browsers.

## Usage

[![NPM](https://nodei.co/npm/user-input-gamepad.png)](https://nodei.co/npm/user-input-gamepad/)

### `gamepad = gamepadinput(1)`

## Example

### Node

    var gamepadinput = require("user-input-gamepad")
    var gamepad      = gamepadinput(0) // Retrieve gamepad at index 0.
    
### Browser

    function update() {
        gamepad                                     = window.gamepadinput(0);
        document.getElementById("output").innerText = JSON.stringify({
            id:        gamepad.id,
            index:     gamepad.index,
            timestamp: gamepad.timestamp,
            axes:      gamepad.axes,
            buttons:   gamepad.buttons.map(function (button) {
                return {
                    pressed: button.pressed,
                    value:   button.value
                };
            })

        }, null, 2);
        window.requestAnimationFrame(update);
    }
    window.requestAnimationFrame(update);

## Tests

- Mocha
   - Test functionality in Node.js
- Karma
   - Using browserify, test functionality in browsers
- User Testing
   - `npm run-script user-test` is set to build, serve, and open [test/index.html](test/index.html)