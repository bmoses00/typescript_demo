var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var x = 200;
var y = 200;
var dx = 0;
var dy = 0;
var animation_id;
var animate = function (e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // modify location based on velocity
    x += dx;
    y += dy;
    dx *= .95;
    dy *= .95;
    // if logo hits edge, change direction
    if (x < 0 || x > canvas.width - 25)
        dx = -dx;
    if (y < 0 || y > canvas.height - 25)
        dy = -dy;
    ctx.fillRect(x, y, 25, 25);
    animation_id = window.requestAnimationFrame(animate);
};
window.addEventListener('load', animate);
window.addEventListener('keydown', move);
function move(e) {
    if (e.key == "w")
        dy = -2;
    if (e.key == "a")
        dx = -2;
    if (e.key == "s")
        dy = 2;
    if (e.key == "d")
        dx = 2;
}
