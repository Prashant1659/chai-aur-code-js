const div = document.createElement("div");

div.style.backgroundColor = "green";
// div.innerText = "Hello World";
div.appendChild(document.createTextNode("Hello World"));
div.style.padding = "14px";
const ul = document.createElement("ul");
// ul.setAttribute('id','list');
div.appendChild(ul)
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
li1.appendChild(document.createTextNode("JavaScript"));
li2.appendChild(document.createTextNode("Java"));
li3.appendChild(document.createTextNode("Python"));
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
document.body.appendChild(div);

// Edit

const newLi = document.createElement("li");
newLi.appendChild(document.createTextNode("Golang"));
li2.replaceWith(newLi);

// Remove

li3.remove();