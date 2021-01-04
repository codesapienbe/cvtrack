let vars = require('./vars.js');
let symbols = require('./symbols.js');

// The function checks scroll direction and starts scroll
function setScrollDirectionAndMakeScroll() {
    let pageScrollOffset = 2;
    let pageScrollSpeed = 10;
    let timerScroll;

    return function () {
        // The function checks scroll direction and starts scroll
        if (vars.scrollDirection != 0) {
            // "index.js"
            vars.wheelScrollCounter = 0;
            makeScroll();
        } else
            resetScrollStates();

        // The function triggers a scroll
        function makeScroll() {
            if (vars.scrollDirection == 1)
                smoothScroll(pageScrollSpeed, -pageScrollOffset);
            else if (vars.scrollDirection == -1)
                smoothScroll(pageScrollSpeed, pageScrollOffset);

            function smoothScroll(scrollSpeed, scrollOffset) {
                window.scrollTo(0, window.pageYOffset + scrollOffset);
                // If scroll has reached the beginning or end of the page
                if ((window.pageYOffset == 0) || (window.pageYOffset == document.documentElement.scrollHeight - document.body.clientHeight)) {
                    resetScrollStates();
                    return 0;
                }
                // If double blink
                else if (vars.scrollDirection == 0) {
                    resetScrollStates();
                    return 0;
                }

                timerScroll = setTimeout(smoothScroll, scrollSpeed, scrollSpeed, scrollOffset);
            }
        }

        // Reset scroll states
        function resetScrollStates() {
            vars.scrollDirection = 0;
            clearTimeout(timerScroll);
            symbols.showLockSymbol();
        }
    }
}

module.exports = {
    setScrollDirectionAndMakeScroll: setScrollDirectionAndMakeScroll()
}