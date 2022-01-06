let starters = dishes.filter((dish) => dish.course === "Starters")
let entrees = dishes.filter((dish) => dish.course === "Entrees")
let desserts = dishes.filter((dish) => dish.course === "Desserts")

const dishesList = document.getElementById("dishesList")
const startersButton = document.getElementById("startersButton")
const entreesButton = document.getElementById("entreesButton")
const dessertsButton = document.getElementById("dessertsButton")
const allButton = document.getElementById("allButton")

const starterList = starters.map(function (starter) {
    return `<li>
    <h3>${starter.title}</h3>
    <p>${starter.description}</p>
    <p>$${starter.price}</p>
    <img src="${starter.imageURL}" width="30%" >
    </li>`
})

startersButton.addEventListener("click", function () {
    dishesList.innerHTML = starterList.join(" ")
})

const entreesList = entrees.map(function (entree) {
    return `<li>
    <h3>${entree.title}</h3>
    <p>${entree.description}</p>
    <p>$${entree.price}</p>
    <img src="${entree.imageURL}" width="30%" >
    </li>`
})

entreesButton.addEventListener("click", function () {
    dishesList.innerHTML = entreesList.join(" ")
})

const dessertsList = desserts.map(function (dessert) {
    return `<li>
    <h3>${dessert.title}</h3>
    <p>${dessert.description}</p>
    <p>$${dessert.price}</p>
    <img src="${dessert.imageURL}" width="30%" >
    </li>`
})

dessertsButton.addEventListener("click", function () {
    dishesList.innerHTML = dessertsList.join(" ")
})

allButton.addEventListener("click", function () {
    dishesList.innerHTML = dishList.join(" ")
})


const dishList = dishes.map(function (dish) {
    return `<li>
    <h3>${dish.title}</h3>
    <p>${dish.description}</p>
    <p>$${dish.price}</p>
    <img src="${dish.imageURL}">
    </li>`
})

dishesList.innerHTML = dishList.join(" ")