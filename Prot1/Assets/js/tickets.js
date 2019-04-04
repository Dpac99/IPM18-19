var flights = JSON.parse(localStorage.getItem("flights"))



var currentFlight = 0;

var exp = new Vue({
    el: "#ticket",
    data: {
        flights: [],
        qrcode: "Assets/images/frame.png",
        dots: []
    }
})

function init() {
    for (i = 0; i < flights.length; i++) {
        let current = {
            company: flights[i].company,
            itinerary: flights[i].itinerary,
            number: flights[i].number,
            seat: flights[i].seat,
            date: flights[i].date,
            time: flights[i].time
        }
        exp.flights.push(current)
        if (i === currentFlight) {
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
    for (i = 0; i < flights.length; i++) {
        if (i === currentFlight) {
            exp.dots.push({ class: "full-dot" })
        }
        else {
            exp.dots.push({ class: "dot" })
        }
    }
}

function nextFlight() {
    if (currentFlight === flights.length - 1) {
        return
    }
    currentFlight++
    let element = document.getElementById("ticket" + currentFlight.toString())
    element.scrollIntoView({
        behavior: "smooth"
    })
    updateDots()
}

function prevFlight() {
    if (currentFlight === 0) {
        return
    }
    currentFlight--
    let element = document.getElementById("ticket" + currentFlight.toString())
    element.scrollIntoView({
        behavior: "smooth"
    })
    updateDots()
}

function addTicket() {
    scanner()
    setTimeout(scanner, 6000)
    flights.push({
        company: "Ryanair ",
        itinerary: "LIS- LDN",
        number: "1148",
        seat: "30F",
        date: "25/06/2019",
        time: "11:25",
    })
    localStorage.setItem("flights", JSON.stringify(flights))
    exp.flights = []
    exp.dots = []
    init()
}

function deleteTicketAux(){
    flights.splice(currentFlight, 1)
    localStorage.setItem("flights", JSON.stringify(flights))
    prevFlight()
    exp.flights = flights
}

function deleteTicket() {
    confirmation(deleteTicketAux , tickets, "Delete this flight?")
}