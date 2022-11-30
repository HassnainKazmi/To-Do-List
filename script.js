const ul = document.querySelector("ul");
let li = ul.querySelectorAll("li");
const inputBar = document.querySelector("#inputBar");
const all = document.querySelector(".all");
const active = document.querySelector(".active");
const completed = document.querySelector(".completed");
let inputCheck = document.querySelectorAll(".inputCheck");
let label = document.querySelectorAll("label");
let closeButton = document.querySelectorAll("#close");
let counter = 0;

all.style.opacity = "1";
active.style.opacity = "0.5";
completed.style.opacity = "0.5";

inputBar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const newLi = document.createElement("li");
        newLi.setAttribute("id", `lis${counter}`);
        newLi.innerHTML = `<input class="inputCheck" type="checkbox" value="${inputBar.value}">` + `<label class="labels mx-1">${inputBar.value}</label>` + `<button type="button" class= "btn-close" id="close" aria-label="Close"></button>`
        ul.appendChild(newLi);
        counter++;
        li = ul.querySelectorAll("li");
        inputCheck = document.querySelectorAll(".inputCheck");
        label = document.querySelectorAll("label");
        closeButton = document.querySelectorAll("#close");
        inputBar.value = "";
    }
})

ul.addEventListener("click", (e) => {
    for (i = 0; i < li.length; i++) {
        if (inputCheck[i].checked) {
            label[i].style.textDecoration = "line-through";
        }
        else {
            label[i].style.textDecoration = "none";
        }
        closeButton[i].addEventListener("click", function () {
            this.parentElement.remove();
            li = ul.querySelectorAll("li");
            inputCheck = document.querySelectorAll(".inputCheck");
            label = document.querySelectorAll("label");
            closeButton = document.querySelectorAll("#close");
        });
    }
})

all.addEventListener("click", (e) => {
    all.style.opacity = "1";
    active.style.opacity = "0.5";
    completed.style.opacity = "0.5";
    for (i = 0; i < li.length; i++) {
        if (inputCheck[i].checked || !inputCheck[i].checked) {
            li[i].style.display = "block";
        }
    }
})

active.addEventListener("click", (e) => {
    all.style.opacity = "0.5";
    active.style.opacity = "1";
    completed.style.opacity = "0.5";
    for (i = 0; i < li.length; i++) {
        if (inputCheck[i].checked) {
            li[i].style.display = "none";
        }
        else {
            li[i].style.display = "block";
        }
    }
})

completed.addEventListener("click", (e) => {
    all.style.opacity = "0.5";
    active.style.opacity = "0.5";
    completed.style.opacity = "1";
    for (i = 0; i < li.length; i++) {
        if (inputCheck[i].checked) {
            li[i].style.display = "block";
        }
        else {
            li[i].style.display = "none";
        }
    }
})