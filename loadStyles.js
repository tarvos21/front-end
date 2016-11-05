<style rel="stylesheet" type="text/css" href="styles.css">

// Add above style by function below
function loadStyles(url) {
    var link = document.createElement("link");
    link.ref = "stylesheet";
    link.type = "text/css";
    link.href = url;
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(link);
}

<style type="text/css">
body {
    background-color: teal;
}
</style>

// Add above style by function below
function loadStyleString(css) {
    var style = document.createElement("style");
    style.type = "text/css";
    try {
        style.appendChild(document.createTextNode(css));
    } catch (ex) {
        style.styleSheet.cssText = css;     //take care in IE
    }
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
}
