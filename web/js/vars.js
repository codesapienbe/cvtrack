<<<<<<< HEAD
// jQuery
let $video__wrapper = $("#video__wrapper");
// Lock symbol
let $lockSymbol = $("#lock-symbol");
let $lockSymbolWrapper = $("#lock-symbol__wrapper");
let lockSymbolWrapperHiddenTimer = parseFloat($lockSymbolWrapper.css("transition-duration")) * 1000;
// Eye symbol
let $eyeSymbol = $("#index__eye-symbol");
// JS
let video = document.getElementById("video");
// Eyes distance
let prevEyelidDist = 0;
let currEyelidDist = 0;
// Scroll direction: 0 - horizon, 1 - up, -1 - down
let scrollDirection = 0;
// Indexes: 0 - the first blink, 1 - the second one, 2 - difference (ms)
let blinkDates = [0, 0, 0];
let blinkDatesIndex = 0;
// Array of distances between eyelids { "leftEyeDist", rightEyeDist" }
let fixedEyelidDist = 0;
let blinkIndex = 0;
// Fixed silhouette positions { "top", "botom" }
let fixedSilhouettePos = 0;
// Wheel scroll
let wheelScrollCounter = 0;
// ScrollTimer
let timerScroll;
//  It is used for the correct operation of the function silhouetteOffsetBoolean. Allows to set the direction of scrolling by head movement
let setScrollDirection = false;
=======
module.exports = {
    // Scroll direction: 0 - horizon, 1 - up, -1 - down
    scrollDirection: 0,
    //  It is used for the correct operation of the function silhouetteOffsetBoolean. Allows to set the direction of scrolling by head movement
    setScrollDirection: false,
    wheelScrollCounter: 0,
    // 1 - closing eyes, 2 - opening eyes, 0 - setting the status (1 / 2)
    blinkIndex: 0
}
>>>>>>> develop-head-movement-to-scroll-modules
