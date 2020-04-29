/*!
 * ScrollToTop v2.0.0
 * Copyright 2019 zkreations
 * Daniel Abel M. (fb.com/danieI.abel)
 * Licensed under MIT (github.com/zkreations/plugins/blob/master/LICENSE)
 */
var scrollToTop = (function() {
    var scrollButton = document.getElementById("scrollToTop")
        showButton = scrollButton.dataset.upshow || 600,
        scrollSpeed = scrollButton.dataset.upspeed || 1000;
    function scrollTop(b) {
        function a(d) {
            c += Math.PI / (b / (d - e));
            c >= Math.PI && window.scrollTo(0, 0);
            0 !== window.scrollY && (window.scrollTo(0, Math.round(scrollTime + scrollTime * Math.cos(c))), e = d, window.requestAnimationFrame(a))
        }
        var scrollTime = window.scrollY / 2,
            c = 0,
            e = performance.now();
        window.requestAnimationFrame(a)
    }
    var scrollPosition = window.scrollY;
    window.addEventListener("scroll", function() {
        scrollPosition = window.scrollY;
        showButton < scrollPosition ? scrollButton.classList.add("visible") : scrollButton.classList.remove("visible")
    });
    scrollButton.onclick = function() {
        scrollTop(scrollSpeed)
    }
})();