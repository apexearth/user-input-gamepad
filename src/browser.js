module.exports = {
    window:    typeof window !== 'undefined' ? window : {
        addEventListener: function () {
        }
    },
    document:  typeof document !== 'undefined' ? document : {
        addEventListener: function () {
        }, body:          {
            addEventListener: function () {
            }
        }

    },
    navigator: typeof navigator !== 'undefined' ? navigator : {
        getGamepads:       function () {
        },
        webkitGetGamepads: function () {
        }
    }
}