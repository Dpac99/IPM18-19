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

