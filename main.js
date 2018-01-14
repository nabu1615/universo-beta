function startDrag (event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function startDrop (event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text');
    if( event.target.nodeName !== 'A' ) {
        event.target.appendChild(document.getElementById(data));    
    }
    else {
        alert("ya existe un elemento en esta zona"); 
    }
}

function allowDrop(event) {
    event.preventDefault();
}

var activeModal = document.getElementsByClassName('active_modal');

for (var i = 0; i < activeModal.length; i++) {
    activeModal[i].addEventListener('click', function() {
        var person = document.querySelector('.person');
        var positionPerson = this.getBoundingClientRect();
        person.setAttribute('style', `top: ${positionPerson.top}px; left: ${positionPerson.left}px;`);
    }, false);
}



