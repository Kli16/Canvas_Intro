var canvas = document.getElementById("slate");
var context = canvas.getContext('2d');
var toggle = document.getElementById("toggle_button");
var clear = document.getElementById("clear_button");
var toggle_status = true;
var prevX;
var prevY;
var started = false;

var shape_maker = function(e) {
  if (toggle_status) { //circle
    context.beginPath();
    context.arc(e.offsetX, e.offsetY, 20, 0, 2 * Math.PI);
    if (!started){
      started = true;
    }
    else {
      context.lineTo(prevX, prevY);
    }
    prevX = e.offsetX;
    prevY = e.offsetY;
    context.fillStyle = "yellow";
    context.stroke();
    context.fill();
  }
  else { //rectangle
    context.beginPath();
    context.rect(e.offsetX - 25, e.offsetY - 25, 50, 50);
    context.fillStyle = "red";
    context.fill();
  }
}

var clear_canvas = function(e) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  started = false;
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
