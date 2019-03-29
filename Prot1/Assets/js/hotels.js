var currentHotel = 0;
var newHotelTemplate = {
    name: "",
    checkin: "",
    checkout: "",
    room: ""
}

var exp = new Vue({
    el: "#hotel",
    data: {
        hotels: [],
        dots: [],
        newHotel: {
            name: "",
            checkin: "",
            checkout: "",
            room: ""
        }
    }
})

let hotels = JSON.parse(localStorage.getItem("hotels"))
console.log(hotels)

function init() {
    for (i = 0; i < hotels.length; i++) {
        exp.hotels.push(hotels[i])
        if (i === currentHotel) {
            exp.dots.push({ class: "full-dot" })
        }
        else {
            exp.dots.push({ class: "dot" })
        }
    }
}

init()

function updateDots() {
    exp.dots = []
    for (i = 0; i < hotels.length; i++) {
        if (i === currentHotel) {
            exp.dots.push({ class: "full-dot" })
        }
        else {
            exp.dots.push({ class: "dot" })
        }
    }
}

function nextHotel() {
    if (currentHotel === hotels.length - 1) {
        return
    }
    currentHotel++
    let element = document.getElementById("hotel" + currentHotel.toString())
    element.scrollIntoView({
        behavior: "smooth"
    })
    updateDots()
}

function prevHotel() {
    if (currentHotel === 0) {
        return
    }
    currentHotel--
    let element = document.getElementById("hotel" + currentHotel.toString())
    element.scrollIntoView({
        behavior: "smooth"
    })
    updateDots()
}

function toggleDropdown() {
    exp.dropdown = !exp.dropdown
}

function pushHotel() {
    hotels.push(
        {
            name: exp.newHotel.name,
            stars: Math.ceil(Math.random() * 4 + 1),
            checkin: exp.newHotel.checkin,
            checkout: exp.newHotel.checkout,
            address: "Not yet implemented",
            contact: "912738126",
            room: exp.newHotel.room
        }
    )
    localStorage.setItem("hotels", JSON.stringify(hotels))
    exp.newHotel = newHotelTemplate
    housing()
}