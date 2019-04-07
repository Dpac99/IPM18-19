var currentHotel = 0;
var newHotelTemplate = {
    name: "",
    checkin: "",
    checkout: "",
    room: 0,
    pre_checkinD: 1,
    pre_checkinM: 1,
    pre_checkinY: 2019,
    pre_checkinH: 0,
    pre_checkinMin: 0,
    pre_checkoutD: 1,
    pre_checkoutM: 1,
    pre_checkoutY: 2019,
    pre_checkoutH: 0,
    pre_checkoutMin: 0,
}

var exp = new Vue({
    el: "#hotels",
    data: {
        hotels: [],
        dots: [],
        newHotel: newHotelTemplate
    }
})

var hotels = JSON.parse(localStorage.getItem("hotels"))

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

function pushHotelAux(){
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

function pushHotel() {
    confirmation(pushHotelAux,addHotel, "Add this hotel?")
}

function showHours(type) {
    let doc
    let screen = document.getElementById('screen')
    let back = document.getElementById("back")
    if (type === 1) {
        doc = document.getElementById("checkin")
    }
    if (type === 2) {
        doc = document.getElementById("checkout")
    }
    if (doc.style.display === "none") {
        doc.style.display = "flex";
        screen.style.display = "none"
        back.onclick = addHotel
        return;
    }
    else {
       if( type ===1 ){
           exp.newHotel.checkin+= exp.newHotel.pre_checkinD.toString() + "/"
           exp.newHotel.checkin+=exp.newHotel.pre_checkinM.toString() + "/"
           exp.newHotel.checkin+=exp.newHotel.pre_checkinY.toString() + " - "
           exp.newHotel.checkin+=exp.newHotel.pre_checkinH.toString() + ":"
           exp.newHotel.checkin+=exp.newHotel.pre_checkinMin.toString()
       }
       else{
        exp.newHotel.checkout+= exp.newHotel.pre_checkoutD.toString() + "/"
        exp.newHotel.checkout+=exp.newHotel.pre_checkoutM.toString() + "/"
        exp.newHotel.checkout+=exp.newHotel.pre_checkoutY.toString() + " - "
        exp.newHotel.checkout+=exp.newHotel.pre_checkoutH.toString() + ":"
        exp.newHotel.checkout+=exp.newHotel.pre_checkoutMin.toString()
       }
        doc.style.display = "none"
        screen.style.display = "flex"
        back.onclick = backToHousing
    }
}

function showRoom() {
    let doc = document.getElementById("roombox")
    let screen = document.getElementById("screen")
    if(doc.style.display==="none"){
        doc.style.display = "flex"
        screen.style.display = "none"
    }
    else{
        doc.style.display = "none"
        screen.style.display = "flex"
    }
}

function changeRoom(n){
    var r = exp.newHotel.room
    r+=n
    if(r<0){
        r=0
    }
    exp.newHotel.room = r
}

function backToHousing(){
    confirmation(housing, function(){}, "Go back? Changes are not saved")
}

function deleteHotelsAux(){
    hotels.splice(currentHotel, 1)
    localStorage.setItem("hotels", JSON.stringify(hotels))
    prevHotel()
    exp.hotels = hotels
}


function deleteHotel() {
    confirmation(deleteHotelsAux, housing, "Delete this hotel?")
}

function changeDay(n, i) {
    var d,m
    if(i === 1 ){
        d = exp.newHotel.pre_checkinD 
        m = exp.newHotel.pre_checkinM
    }
    else{
        d= exp.newHotel.pre_checkoutD
        m = exp.newHotel.pre_checkoutM
    }
     m31 = [1, 3, 5, 7, 8, 10, 12]
    if (n > 0) {
        if (m31.indexOf(m) != -1) {
            d === 31 ? d= 31 : d++
        }
        else if (m=== 2) {
            d === 28 ? d = 28 : d++
        }
        else {
            d === 30 ? d = 30 : d++
        }
    }
    else {
        d === 0 ? d = 0 : d--
    }
    i === 1? exp.newHotel.pre_checkinD = d : exp.newHotel.pre_checkoutD = d
}

function changeMonth(n, i) {
    var m
    i === 1? m = exp.newHotel.pre_checkinM : m = exp.newHotel.pre_checkoutM 
    if (n > 0) {
        if (m !== 12) {
            m++
        }
    }
    else {
        if (m !== 0) {
            m--
        }
    }
    i === 1? exp.newHotel.pre_checkinM = m: exp.newHotel.pre_checkoutM = m
}

function changeYear(n,i) {
    if (i ===1 ){
        exp.newHotel.pre_checkinY+=n
    }
    else{
        exp.newHotel.pre_checkoutY +=n
    }
}

function changeHour(n,i){
    var h
    i === 1? h=exp.newHotel.pre_checkinH : h=exp.newHotel.pre_checkoutH
    h+=n
    if(h < 0){
        h = 0
    }
    if (h >23){
        h=23
    }
    i === 1? exp.newHotel.pre_checkinH =h : exp.newHotel.pre_checkoutH = h
}

function changeMinute(n,i){
    var m;
    i === 1? m=exp.newHotel.pre_checkinMin : m=exp.newHotel.pre_checkoutMin
    m+= n
    if(m>59){
        m=59
    }
    else if(m<0){
        m=0
    }
    i === 1? exp.newHotel.pre_checkinMin=m: exp.newHotel.pre_checkoutMin=m
}
