//Get all em elements in div with id="dubing"
var ems = document.getElementById("dubing").querySelectorAll("em");

//Get all elements with class="family"
var family = document.querySelectorAll(".family");

//Get all strong elements in p elements
var strongs = document.querySelectorAll("p strong");

//To change the class of every strong elements
var i, len, strong;
for (i=0, len=strongs.length; i < len; i++) {
    strong = strongs.item(i);   //strong = strongs[i]
    strong.className = "important";
}
