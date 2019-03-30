var currentHotel = 0;
var newHotelTemplate = {
    name: "",
    checkin: "",
    checkout: "",
    room: "",
    pre_checkin: "",
    pre_checkout: "",
}

var exp = new Vue({
    el: "#hotel",
    data: {
        hotels: [],
        dots: [],
        newHotel: newHotelTemplate
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

function showHours(type) {
    let doc
    if (type === 1) {
        doc = document.getElementById("checkinbox")
    }
    else if (type === 2) {
        doc = document.getElementById("checkoutbox")
    }
    if (doc.style.display === "none") {
        doc.style.display = "inline";
        return;
    }
    else {
        let date
        type === 1 ? date = new Date(exp.newHotel.pre_checkin) : date = new Date(exp.newHotel.pre_checkout)
        let s = buildDate(date)
        type === 1 ? exp.newHotel.checkin = s : exp.newHotel.checkout = s
        doc.style.display = "none"
    }
}

function showRoom(){
    let doc = document.getElementById("roombox")
    doc.style.display === "none"? doc.style.display= "inline" : doc.style.display="none"
}

function deleteHotel(){
    hotels.splice(currentHotel, 1)
    localStorage.setItem("hotels", JSON.stringify(hotels))
    prevHotel()
    exp.hotels = hotels
}