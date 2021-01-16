var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

var mouseEvent = "empty";

var last_position_of_X,last_position_of_Y;

var last_position_of_touch_X,last_position_of_touch_Y;

var color;

var width_of_line;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {

color = document.getElementById("color").value;

width_of_line = document.getElementById("width_of_line").value;

mouseEvent = "mouseDown";

}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e) {

mouseEvent = "mouseUp";

}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e) {

mouseEvent = "mouseLeave";

}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {

var current_position_of_touch_X = e.touches[0].clientX - canvas.offsetLeft;

var current_position_of_touch_Y = e.touches[0].clientY - canvas.offsetTop;

ctx.beginPath();

ctx.strokeStyle = color;

ctx.lineWidth = width_of_line;

ctx.moveTo(last_position_of_touch_X,last_position_of_touch_Y);

ctx.lineTo(current_position_of_touch_X,current_position_of_touch_Y);

ctx.stroke();

last_position_of_touch_X = current_position_of_touch_X;

last_position_of_touch_Y = current_position_of_touch_Y;

}

canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(e) {

    var current_position_of_X = e.clientX - canvas.offsetLeft;
    
    var current_position_of_Y = e.clientY - canvas.offsetTop;
    
    ctx.beginPath();
    
    ctx.strokeStyle = color;
    
    ctx.lineWidth = width_of_line;
    
    ctx.moveTo(last_position_of_X,last_position_of_Y);
    
    ctx.lineTo(current_position_of_X,current_position_of_Y);
    
    ctx.stroke();
    
    last_position_of_X = current_position_of_X;
    
    last_position_of_Y = current_position_of_Y;
    
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)

    {

        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;

        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

        console.log("touchstart");

    }

    function clearArea() {

        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

    }