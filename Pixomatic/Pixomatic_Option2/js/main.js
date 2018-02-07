var source;

function dragStarted(evt){
//start drag
    source=evt.target;
//set data
    evt.dataTransfer.setData("text/plain", evt.target.innerHTML);
//specify allowed transfer
    evt.dataTransfer.effectAllowed = "move";
}

function draggingOver(evt){
//drag over
    evt.preventDefault();
//specify operation
    evt.dataTransfer.dropEffect = "move";
}

function dropped(evt){
//drop
    evt.preventDefault();
    evt.stopPropagation();
//update text in dragged item
    source.innerHTML = evt.target.innerHTML;
//update text in drop target
    evt.target.innerHTML = evt.dataTransfer.getData("text/plain");
}

function myFunction() {
    var list = document.getElementById('names');
    var firstname = document.getElementById('name').value;
    var entry = document.createElement('li');
    var att1 = document.createAttribute("draggable");       // Create a "class" attribute

    att1.value = "true";                           // Set the value of the class attribute
    entry.setAttributeNode(att1);
    entry.addEventListener("dragstart", dragStarted);
    entry.addEventListener("dragover", draggingOver);
    entry.addEventListener("drop", dropped);

    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var col = "rgb(" + r + "," + g + "," + b + ")";

    entry.style.backgroundColor = col;

    entry.appendChild(document.createTextNode(firstname));
    list.appendChild(entry);
}