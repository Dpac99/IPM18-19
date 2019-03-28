var hotels = [
    {
        name: "Hotel Ritz",
        stars: 5,
        checkin: "07/05/2019 - 10:00",
        checkout: "12/05/2019 - 12:00",
        address: "Rotunda do Marques",
        contact: "912738126",
        room: "312"
    },
    {
        name: "Hotel Roma",
        stars: 4,
        checkin: "13/05/2019 - 08:00",
        checkout: "19/05/2019 - 12:00",
        address: "Avenida de Roma",
        contact: "912738126",
        room: "114"
    },
    {
        name: "Hotel Tivoli",
        stars: 3,
        checkin: "29/05/2019 - 07:00",
        checkout: "05/0562019 - 12:00",
        address: "Rua Castilho",
        contact: "912738126",
        room: "420"
    }
]

var currentHotel=0;

var exp = new Vue({
    el: "#hotel",
    data: {
        hotels: [],
        dots: [],
        dropdown: false
    }
})

function init(){
    for(i =0; i<hotels.length; i++){
        exp.hotels.push(hotels[i])
        if(i === currentHotel){
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
    for (i=0; i< hotels.length; i++){
        if(i===currentHotel){
            exp.dots.push({class: "full-dot"})
        }
        else{
            exp.dots.push({class: "dot"})
        }
    }
}

function nextHotel() {
    if(currentHotel === hotels.length - 1){
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
    if(currentHotel === 0){
        return
    }
    currentHotel--
    let element = document.getElementById("hotel" + currentHotel.toString())
    element.scrollIntoView({
        behavior: "smooth"
    })
    updateDots()
}

function toggleDropdown(){
    exp.dropdown = !exp.dropdown
}