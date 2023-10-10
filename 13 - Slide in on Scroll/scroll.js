function debounce(func, wait, immediate) {
    if (wait === void 0) { wait = 20; }
    if (immediate === void 0) { immediate = true; }
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = undefined;
            if (!immediate)
                func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
}
/**
 *  Requirement:
 *    the corresponding image slide in when it enter the visual viewport by scrolling and go out when it is out
 *
 */
var images = document.querySelectorAll(".slide-in");
function hanleScroll(e) {
    images.forEach(function (image) {
        var img = image;
        //console.log(img);
        if (isInViewport(img)) {
            img.classList.add("active");
        }
        else {
            img.classList.remove("active");
        }
    });
}
function isInViewport(image) {
    var slideInAt = (window.scrollY + window.innerHeight) - (image.height / 2); //slide in at half of the positio of the image
    var imageBottom = image.offsetTop + image.height;
    var isShownHalf = slideInAt > image.offsetTop;
    var isNotScrolledPast = window.scrollY < imageBottom;
    return (isShownHalf && isNotScrolledPast);
}
window.addEventListener('scroll', debounce(hanleScroll));
