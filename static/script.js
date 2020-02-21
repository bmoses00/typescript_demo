var html = document.getElementById("html");
var js = document.getElementById("js");
var code = document.getElementById("code");

var text = code.contentWindow.document;

window.addEventListener('keydown', execute);

function execute(e) {
    console.log(html.value)
    text.open();
    text.writeln(html.value + "<script>" + js.value + "</script>");
    text.close();
}
