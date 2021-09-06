var canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var lastpositionofX, lastpositionofY, currentposofX, currentposofY ;
var color = "red";
var width_of_line = 3;
var mouse_event = "empty";

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
    mouse_event="mousedown";
    console.log(mouse_event);
    }
    canvas.addEventListener("mousemove", mymousemove);
    function mymousemove(e) {
        console.log("mousemove");
        currentposofX=e.clientX-canvas.offsetLeft;
        currentposofY=e.clientY-canvas.offsetTop;
        if(mouse_event=="mousedown"){
            ctx.beginPath();
            ctx.strokeStyle=color;
            ctx.lineWidth=width_of_line;
            ctx.moveTo(lastpositionofX, lastpositionofY);
            console.log("lastx="+lastpositionofX+",lastY="+lastpositionofY);
            ctx.lineTo(currentposofX, currentposofY);
            console.log("currentx="+currentposofX+",currentY="+currentposofY);
            ctx.stroke();
        }
        lastpositionofX=currentposofX;
        lastpositionofY=currentposofY;
    }
    canvas.addEventListener("mouseup", mymouseup);
    function mymouseup(e) {
        mouse_event="mouseup";
        console.log(mouse_event);
        }