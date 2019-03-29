var flights = [
    {
        company: "Ryanair",
        itinerary: "LIS-OPO",
        number: "2543",
        seat: "28A",
        date: "11/03/2019",
        time: "06:15",
    },
    {
        company: "Ryanair",
        itinerary: "OPO-LIS",
        number: "2271",
        seat: "24A",
        date: "18/03/2019",
        time: "18:55",
    },
    {
        company: "TAP",
        itinerary: "LIS-PDL",
        number: "1371",
        seat: "2A",
        date: "19/05/2019",
        time: "19:05",
    },
    {
        company: "TAP",
        itinerary: "PDL-LIS",
        number: "1149",
        seat: "5F",
        date: "22/06/2019",
        time: "10:25",
    }
]

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
