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

// Helper function to get an element's exact position
function getPosition(el) {
    var xPos = 0;
    var yPos = 0;
   
    while (el) {
      if (el.tagName == "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        var yScroll = el.scrollTop || document.documentElement.scrollTop;
   
        xPos += (el.offsetLeft - xScroll + el.clientLeft);
        yPos += (el.offsetTop - yScroll + el.clientTop);
      } else {
        // for all other non-BODY elements
        xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);
      }
   
      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos
    };
  }

var activeModal = document.getElementsByClassName('active_modal');

for (var i = 0; i < activeModal.length; i++) {
    activeModal[i].addEventListener('click', function() {
        var person = document.querySelector('.person');
        var positionHouse = getPosition(this);
        var positionPerson = getPosition(person);
        var x = positionHouse.x - positionPerson.x;
        var y = positionHouse.y - positionPerson.y;
        person.setAttribute('style', `transform: translate(${x}px, ${y}px);`);
    }, false); 
}

document.querySelector('.save').addEventListener('click', function() {
    var dropSpaces = document.getElementsByClassName('land__spaces');
    for (var i = 0; i < dropSpaces.length; i++) {
        dropSpaces[i].removeAttribute('ondrop');
        dropSpaces[i].removeAttribute('ondragover');
    }
});


var modal = document.querySelector('.modal'),
overlay = document.querySelector('.overlay'),
showModal = document.querySelectorAll('.active_modal'),
close = document.querySelector('.close');

for (var i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', function(e) {
        e.preventDefault();

        var windowHeight = document.documentElement.clientWidth,
        windowWidth =  document.documentElement.clientHeight,
        modalWidth = windowWidth/2;

        overlay.setAttribute('style', 'display: block')
        modal.setAttribute('style', `width: ${modalWidth}px; margin-left: ${-modalWidth/2}px`);

    }, false); 
}

close.addEventListener('click', function() {
    overlay.setAttribute('style', 'display: none');
});

/* close on click outside of modal */
overlay.addEventListener('click', function(e) {
if (e.target !== this) return;
    overlay.setAttribute('style', 'display: none'); 
});



