function startDrag (event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function startDrop (event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(data));
}

function allowDrop(event) {
    event.preventDefault();
}