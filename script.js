ocument.querySelector("h1").textContent = "WELCOME TO RIYONA ENGINEERING";
const websiteOnline = true;

if (websiteOnline) {
    document.querySelector("h1").textContent = "RIYONA ENGINEERING IS ONLINE";
}
if (websiteOnline) {
    console.log("Riyona Engineering is online");
} else {
    console.log("Riyona Engineering is offline");
}
const websiteOnline = true;
if (websiteOnline) {
    document.querySelector("h1").textContent = "RIYONA ENGINEERING IS ONLINE";
} else {
    document.querySelector("h1").textContent = "RIYONA ENGINEERING IS OFFLINE";
}
function calculatePrice(price, quantity) {
    return price * quantity;
}
const total = calculatePrice(500, 3);
const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("main-nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
        nav.classList.toggle("show");
    });
}
const company = "Riyona Engineering";
const establishedYear = 2027;
const websiteOnline = true;
if (websiteOnline) {
    console.log(company + " is online");
} else {
    console.log(company + " is offline");
}
const services = [
    "Industrial Equipment Production",
    "Machinery Maintenance",
    "Engineered Systems"
];
const project = {
    name: "Industrial Equipment Project",
    year: establishedYear,
    status: "Planned"
};

function calculateCost(price, quantity) {
    return price * quantity;
}
const contactForm = document.querySelector("form");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Thank you for contacting Riyona Engineering.");
    });
}
const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}