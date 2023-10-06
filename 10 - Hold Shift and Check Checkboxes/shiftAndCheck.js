/**
 *  Requirement:
 *    first check one item
 *    then hold down the shift key
 *    check a lower item
 *    everything in between should be set to checked
 *
 *  Solution:
 *    get all the checkbox in to an array
 *    all add an click event：
 *      if shift key is pressing and one above item have checked, check all item between your clikcing and the above.
 *
 *    need shiftkey state
 */
var checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
//console.log(checkboxes);
var pressingShift = false;
window.addEventListener('keydown', function (e) {
    if (e.key === "Shift") {
        pressingShift = true;
    }
});
window.addEventListener('keyup', function (e) {
    if (e.key === "Shift") {
        pressingShift = false;
    }
});
checkboxes.forEach(function (checkbox, item) {
    checkbox.addEventListener("click", function (event) {
        if (pressingShift) {
            for (var i = item - 1; i >= 0; i--) {
                if (checkboxes[i].checked !== true) {
                    checkboxes[i].checked = true;
                }
                else
                    break;
            }
        }
    });
});
