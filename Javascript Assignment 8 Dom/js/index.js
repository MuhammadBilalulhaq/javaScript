var content = document.getElementById("main-content");
console.log(content.childNodes);

var renderElement = document.getElementsByClassName("render");

for (var i = 0; i < renderElement.length; i++) {
    console.log(renderElement[i].innerHTML);
}

document.getElementById("first-name").value = "Muhammad";
document.getElementById("last-name").value = "Bilal ul Haq";
document.getElementById("email").value = "bilal@example.com";