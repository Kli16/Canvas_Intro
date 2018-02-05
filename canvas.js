var canvas = document.getElementById("slate");
var context = canvas.getContext('2d');
var toggle = document.getElementById("toggle_button");
var clear = document.getElementById("clear_button");
var toggle_status = true;

var shape_maker = function(e) {
  var mousepos = get_mouse_pos(canvas, e);
  if (toggle_status) { //circle
    context.beginPath();
    context.arc(mousepos.x, mousepos.y, 30, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "yellow";
    context.fill();
  }
  else { //rectangle
    context.beginPath();
    context.rect(mousepos.x - 25, mousepos.y - 25, 50, 50);
    context.stroke();
    context.fillStyle = "red";
    context.fill();
  }
}

var clear_canvas = function(e) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

//returns the relative x and y position of the mouse in the canvas
var get_mouse_pos = function(canvas, e) {
  var canvasrect = canvas.getBoundingClientRect();
  return {
    x: e.x - canvasrect.left,
    y: e.y - canvasrect.top
  };
}

var toggler = function(e) {
  toggle_status = !toggle_status;
}

canvas.addEventListener("click", shape_maker);
clear.addEventListener("click", clear_canvas);
toggle.addEventListener("click", toggler);
