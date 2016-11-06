<script type="text/javascript" src="clien.js"></script>

fucntion loadScript(url) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "url";
    document.appendChild(script);
}

loadScript("client.js");

<script type="text/javascript">
    function sayHi() {
        alert("Hi, dubing!");
    }
</script>

var script = document.createElement("script");
script.type = "text/javascript";
var code = "function sayHi() {alert(\"Hi, DuBing!\");}";
try {
    script.appendChild(document.createTextNode("code"));
} catch (ex) {
    script.text = "code";
}
document.body.appendChild(script);
