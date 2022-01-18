// document es la raiz de nuestro acceso al DOM
// console.log(document);
// const catDiv = document.getElementById("cat");
// const catDiv = document.querySelector("#cat");

// catDiv.innerHTML = "Holda desde js";

// catDiv.style.backgroundColor = "black";
// catDiv.style.color = "white";

// // Devuelve un HTMLCollection que luce como array pero no lo es
// // const mice = document.getElementsByClassName("mouse");
// const mice = document.querySelectorAll(".mouse");

// // mice.forEach(function (mouse) {
// // 	console.log(mouse);
// // });

// // const divs = document.getElementsByTagName("div");
// const divs = document.querySelectorAll("div");

// const helloDiv = document.querySelector(".hello");
// console.log(helloDiv);
// console.log(helloDiv.classList.value);

// helloDiv.classList.add("new-class");
// helloDiv.classList.remove("otra");

// console.log(helloDiv);

// const googleLink = document.querySelector("a");
// googleLink.setAttribute("href", "http://google.com");

// =================== Manipulacion de elementos =====================

const googleLink = document.querySelector("a");
const body = document.querySelector("body");

// creamos un nuevo elemento desde js
const newTitleElement = document.createElement("p");
// Asingamos un contenido
newTitleElement.innerHTML = "Hola soy un parrafo <b>creado</b> desde js";

// Agregamos el nuevo elemento a uno existente
body.appendChild(newTitleElement);

const ironhackLink = document.createElement("a");
ironhackLink.setAttribute("href", "http://ironhack.com");
ironhackLink.innerText = "Ironhack.com";

body.insertBefore(ironhackLink, googleLink);

// Borrar elemento

body.removeChild(googleLink);
// Como sigue existiendo como variable de JS podemos volver a colocarlo en HTML
body.appendChild(googleLink);

// body.innerHTML = "";

// ================= EVENTOS ===============

const button = document.querySelector("button");
const list = document.querySelector("#list");
const input = document.querySelector("#new-item");

button.onclick = () => {
	list.innerHTML += `
    <li>${input.value}</li>
    `;
	input.value = "";
};

// button.addEventListener("click", () => {
// 	console.log("click");
// });
