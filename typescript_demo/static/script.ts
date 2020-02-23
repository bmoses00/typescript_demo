
var canvas = document.getElementById("slate") as HTMLCanvasElement;
var ctx = canvas.getContext("2d");

var x:number = 200;
var y:number = 200;
var dx:number = 0;
var dy:number = 0;

var animation_id:number;

var animate = function (e) {
    // modify location based on velocity
    x += dx;
    y += dy;
    // slowly decrease velocity
    dx *= .95;
    dy *= .95;
    // if logo hits edge, change direction
    if (x < 0 || x > canvas.width - 25)  dx = -dx;
    if (y < 0 || y > canvas.height - 25) dy = -dy;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, y, 25, 25);
    
    animation_id = window.requestAnimationFrame(animate);
};

function move(e) {
    if (e.key == "w") dy = -2;
    if (e.key == "a") dx = -2;
    if (e.key == "s") dy = 2;
    if (e.key == "d") dx = 2;
}

window.addEventListener('load', animate);
window.addEventListener('keydown', move);
