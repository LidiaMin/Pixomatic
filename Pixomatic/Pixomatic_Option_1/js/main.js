function change() {
    var range = document.getElementById("range");
    var out = document.getElementById("thumb");
    var newPoint, newPlace, offset, val = event.target.value;
    var newPoint = val / 100;
    var offset = -1.3;

    if (newPoint < 0) { newPlace = 0; }
    else if (newPoint > 1) { newPlace = 100; }
    else { newPlace = 100 * newPoint + offset; offset -= newPoint; }

    out.style.marginLeft = newPlace   + "px";
}