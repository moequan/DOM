console.log(document instanceof Node);
console.log(document instanceof Element);
console.log(document.firstChild);
console.log(document.firstChild instanceof Node);
console.log(document.firstChild instanceof Element);
console.log(document.firstChild.nextSibling);

var myList = document.getElementsByTagName(`ul`)[0];
let firstListItem = myList.firstChild;
console.log(firstListItem);

var x = document.getElementById("second").previousElementSibling;
console.log(x);
document.getElementById("demo").innerHTML=x.innerHTML;
var y = document.getElementById("demo").previousSibling;
console.log(y);

var z=document.getElementById("second");
console.log(z);

var childList = document.getElementsByTagName("ul")[0];
console.log(childList.childNodes)