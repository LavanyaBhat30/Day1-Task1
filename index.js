//Document object model
document.getElementById("first").innerHTML = document.body.nodeName;
const allNodes = document.body.childNodes;
let element = "";
for (let i = 0; i < allNodes.length; i++) {
    element += allNodes[i].nodeType + " " + allNodes[i].nodeName + "<br>";
}
document.getElementById("dom").innerHTML = element;

