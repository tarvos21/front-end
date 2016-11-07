//Warning: only Chrome and Firefox support classList!

//Three class Names in div element
<div class="dubing user man">...</div>

//Delete the "man" class
div.classList.remove("man");

//Add "current" class
div.classList.add("current");

//Toggle "user" class
div.classList.toggle("user");

//Check if div element has a specific class name
if (div.classList.contains("dubing") &&
        !div.classList.contains("user")) {
    do something;
}

//itarate the class names
for (var i=0, len=div.classList.length; i < len; i++) {
    doSomething(div.classList[i]);
}
