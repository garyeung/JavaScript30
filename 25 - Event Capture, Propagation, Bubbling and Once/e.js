var all = document.body.querySelectorAll('div, button');
function callEventOnce(e) {
    var element = e.currentTarget;
    if (element.hasAttribute('class')) {
        console.log(element.getAttribute('class'));
    }
    else {
        console.log("Click!!!");
    }
}
Array.from(all).forEach(function (element) {
    element.addEventListener('click', callEventOnce, { once: true });
});
