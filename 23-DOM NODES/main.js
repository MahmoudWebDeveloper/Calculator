const parent = document.body.firstElementChild;

parent.style.backgroundColor = "lightblue";
parent.style.padding = "10px";

const secondChild = parent.children[1];
secondChild.style.backgroundColor = "lightgreen";
secondChild.style.padding = "10px";

const childOfSecondChild = secondChild.firstElementChild;

childOfSecondChild.style.backgroundColor = "lightyellow";
childOfSecondChild.style.padding = "10px";
