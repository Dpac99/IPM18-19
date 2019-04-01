var flights = JSON.parse(localStorage.getItem("flights"))

var currentFlight = 0;

var exp = new Vue({
    el: "#ticket",
    data: {
        flights:[],
        qrcode: "Assets/images/frame.png",
        dots: []
    }
})

function init() {
   for(i=0; i<flights.length; i++){
       let current = {
           company: flights[i].company,
           itinerary: flights[i].itinerary,
           number: flights[i].number,
           seat: flights[i].seat,
           date: flights[i].date,
           time: flights[i].time
       }
       exp.flights.push(current)
       if(i === currentFlight){
           exp.dots.push({class: "full-dot"})
       }
       else{
           exp.dots.push({class: "dot"})
       }
   }
}

init()

function updateDots() {
    exp.dots = []
    for (i=0; i< flights.length; i++){
        if(i===currentFlight){
            exp.dots.push({class: "full-dot"})
        }
        else{
            exp.dots.push({class: "dot"})
        }
    }
}

function nextFlight() {
    if(currentFlight === flights.length - 1){
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
    if(currentFlight === 0){
        return
    }
    currentFlight--
    let element = document.getElementById("ticket" + currentFlight.toString())
    element.scrollIntoView({
        behavior: "smooth"
    })
    updateDots()
}
