var element = document.createElement('div');
element.className = 'message';

var textNode = document.createTextNode('Hello Dubing!');
element.appendChild(textNode);

var secondTextNode = document.createTextNode('JavaScript is interesting!');
element.appendChild(secondTextNode);

document.body.appendChild(element);

alert(element.childNodes.length);   //2

element.normalize(); 
alert(element.childNodes.length);    //1
alert(element.firstChild.nodeValue);    //'Hello Dubing!JavaScript is interesting!'
