var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var x = 200;
var y = 200;
var dx = 0;
var dy = 0;
// changes velocity based on keyboard input
function move(e) {
    var speed_change = get_speed_change(x, y);
    if (e.key == "w")
        dy = -speed_change;
    if (e.key == "a")
        dx = -speed_change;
    if (e.key == "s")
        dy = speed_change;
    if (e.key == "d")
        dx = speed_change;
    ctx.fillRect(x, y, 40, 40);
}
// gives less velocity change the further the square is from the center
function get_speed_change(x, y) {
    return 10 - Math.sqrt(Math.abs(x - canvas.width / 2) + Math.abs(y - canvas.height / 2)) / 2;
}
var animate = function (e) {
    // changes position based on velocity
    x += dx;
    y += dy;
    // decreases velocity over time
    dx *= .95;
    dy *= .95;
    // bounces off walls
    if (x < 0 || x > canvas.width - 25)
        dx = -dx;
    if (y < 0 || y > canvas.height - 25)
        dy = -dy;
    // drawing square
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, y, 25, 25);
    window.requestAnimationFrame(animate);
};
window.addEventListener('load', animate);
window.addEventListener('keydown', move);
