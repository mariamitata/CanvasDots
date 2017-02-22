$(function() {
var canvas = document.getElementById("imgCanvas");
var context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/*function createImageOnCanvas(imageId) {
    canvas.style.display = "block";
    document.getElementById("images").style.overflowY = "hidden";
    var img = new Image(300, 300);
    img.src = document.getElementById(imageId).src;
    context.drawImage(img, (0), (0)); //onload....
}
*/
function draw(e) {
    var pos = getMousePos(canvas, e);
    posx = pos.x;
    posy = pos.y;
    context.fillStyle = "#40E0D0";
    context.beginPath();
    context.arc(posx, posy, 10, 0, 2*Math.PI);
    context.fill();
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function drawit() {
    var divsize = ((Math.random()*100) + 50).toFixed();
    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
    context.fillStyle = "#40E0D0";
    context.beginPath();
    context.arc(posx, posy, 10, 0, 2*Math.PI);
    context.fill();
    console.log(posx);

   
};



drawit();
window.draw = draw;


        // bind mouse events
        canvas.node.mousemove = function(e) {
            if (!canvas.isDrawing) {
               return;
            }
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var radius = 10; // or whatever
            var fillColor = '#ff0000';
            ctx.fillCircle(x, y, radius, fillColor);
        };

});