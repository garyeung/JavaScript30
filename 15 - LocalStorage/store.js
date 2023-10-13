var addItems = document.querySelector('.add-items');
var itemsList = document.querySelector('.plates');
var items = JSON.parse(String(localStorage.getItem("items"))) || [];
//console.log(items);
addItems.addEventListener('submit', handleSubmit);
window.addEventListener("load", function () {
    if (items.length !== 0) {
        updateItems(items);
    }
});
itemsList.addEventListener("click", ToggleDone);
function handleSubmit(e) {
    submitItem(e);
    updateItems(items);
}
function submitItem(e) {
    e.preventDefault();
    var form = e.target;
    var formData = new FormData(form);
    var item = {
        item: String(formData.get('item')),
        done: false
    };
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
    form.reset();
    //console.log(localStorage);
}
function updateItems(items) {
    var html = items.map(function (item, index) {
        return "\n        <li>\n          <input type=\"checkbox\" data-index=\"".concat(index, "\" id=\"item").concat(index, "\" ").concat(item.done ? 'checked' : '', ">\n          <label for=\"item").concat(index, "\">").concat(item.item, "</label>\n        </li>");
    });
    itemsList.innerHTML = html.join("");
}
function ToggleDone(e) {
    var el = e.target;
    if (el.matches("input")) {
        var i = el.dataset.index;
        items[i].done = !items[i].done;
        localStorage.setItem("items", JSON.stringify(items));
        updateItems(items);
    }
}
