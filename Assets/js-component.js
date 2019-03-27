var flights = [
    {
        company: "Ryanair",
        itinerary: "LIS-OPO",
        number: "2543",
        seat: "28A",
        date: "11/03/2019",
        time: "06:15",
        qrcode: "Assets/frame.png"
    },
    {
        company: "Ryanair",
        itinerary: "OPO-LIS",
        number: "2271",
        seat: "24A",
        date: "18/03/2019",
        time: "18:55",
        qrcode: "Assets/frame.png"
    }
]

var currentFlight = 0;

var exp = new Vue({
    el: '#ticket',
    data: {
        company: "Ryanair",
        itinerary: "LIS-OPO",
        number: "2543",
        seat: "28A",
        date: "11/03/2019",
        time: "06:15",
        qrcode: "Assets/frame.png",
        dots:[]
    }
})

for(i=0; i<flights.length; i++){
    exp.dots.push({class: "dot"})
}

exp.dots[0].class="full-dot"

function toggleVisible(id) {
    let style;
    let element = document.getElementById(id)
    element.style.visibility == "collapse" ? style = "visible" : style = "collapse"
    element.style.visibility = style
}

function mainMenu() {
    document.location.href = "mainScreen1.html"
}

function myTrip() {
    document.location.href = "myTripScreen.html"
}

function lock() {
    document.location.href = "protFuncional1-beta.html"
}

function tickets() {
    document.location.href = "tickets.html"
}

function hotels() {
    document.location.href = "hotels.html"
}

function nextFlight() {
    let size = flights.length
    currentFlight +=1
    if (currentFlight > size - 1) {
        currentFlight = 0
    }
    let flight = flights[currentFlight]
    exp.company = flight.company
    exp.itinerary = flight.itinerary
    exp.number = flight.number
    exp.seat = flight.seat
    exp.date = flight.date
    exp.time = flight.time
    exp.qrcode = flight.qrcode
    for (i=0; i<exp.dots.length; i++){
        if (i != currentFlight){
            exp.dots[i].class = "dot"
        }
        else{
            exp.dots[i].class="full-dot"
        }
    }
}

function prevFlight() {
    let size = flights.length
    currentFlight -=1
    if (currentFlight <= -1) {
        currentFlight = size -1
    }
    let flight = flights[currentFlight]
    exp.company = flight.company
    exp.itinerary = flight.itinerary
    exp.number = flight.number
    exp.seat = flight.seat
    exp.date = flight.date
    exp.time = flight.time
    exp.qrcode = flight.qrcode
    for (i=0; i<exp.dots.length; i++){
        if (i != currentFlight){
            exp.dots[i].class = "dot"
        }
        else{
            exp.dots[i].class="full-dot"
        }
    }
}