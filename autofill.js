var progressBars = document.querySelectorAll(".skill-progress > div")

function initilisation(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';

}
for (var bar of progressBars) {
    initiliserBar(bar);
}

function fillBar(bar) {
    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function() {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}

function checkScroll() {
    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttributeNS("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }
    }
}
window.addEventListener("scroll", checkScroll);