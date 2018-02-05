var canvas = document.getElementById("slate");
var ctx = canvas.getContext('2d');
var toggle = document.getElementById("toggle_button");
var clear = document.getElementById("clear_button");

var circle_maker = function(e) {
    ctx.beginPath();
    ctx.arc(e.x, e.y, 30, 0, 2 * Math.PI);
    ctx.stroke();
}

canvas.addEventListener("click", circle_maker);
