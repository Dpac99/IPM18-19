let speechImage= '<img class="screen" src="Assets/images/fingerprint.png"'
let prevHtml = ""

function mainMenu() {
    document.location.href = "mainScreen1.html"
}

function myTrip() {
    document.location.href = "myTripScreen.html"
}

function payNow() {
    document.location.href = "payNow.html"
}

function settings() {
    document.location.href = "settings.html"
}

function privacy() {
    document.location.href = "privacy.html"
}

function lock() {
    document.location.href = "protFuncional1-beta.html"
}

function calling() {
    document.location.href = "calling.html"
}

function tickets() {
    document.location.href = "tickets.html"
}

function housing() {
    document.location.href = "hotels.html"
}

function travelPlan(){
    document.location.href = "travelPlan.html"
}

function travelFriends(){
    document.location.href="friends.html"
}

function addHotel(){
    document.location.href="addHotel.html"
}

function sos(){
    document.location.href="sos.html"
}

function showSpeech(){
    let doc = document.getElementById('screen')
    if (doc.classList.length == 1){
        doc.className +=" overlay"
        document.getElementById("textbox").style.display="inline"
    }
    else{
        doc.className="screen"
        document.getElementById("textbox").style.display="none"
    }
}

function scanner() {
    let doc = document.getElementById('screen')
    if (doc.classList.length == 1){
        doc.className +=" scan"
    }
    else{
        doc.className="screen"
    }
}


function buildDate(date){
    let hours = date.getHours()
    let min = date.getMinutes()
    let extra0 = [false, false]
    if(hours <10){
        extra0[0] = true
    }
    if(min < 10){
        extra0[1] = true
    }
    let s= ""
    s+=date.getDate().toString() + "/"
    s+=(date.getMonth() +1 ).toString() + "/"
    s+=date.getFullYear().toString() + " - "

    extra0[0]? s+="0" + hours.toString() + ":" : s+= hours.toString() + ":"
    extra0[1]? s+="0" + min.toString() : s+= min.toString()
    return s
}

function buildDateNoHours(date){
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let s = ""
    if( day < 10){
        s+="0"
    }
    s+=day.toString() + "/"
    if(month < 10){
        s+="0"
    }
    s+=month.toString() + "/" + year.toString()
    return s;
}

function toggleConfirmation(){
    var screen = document.getElementById("screen")
    var confirm_ = document.getElementById("confirm")

    if(screen.style.display === "none"){
        screen.style.display = "flex"
        confirm_.style.display= "none"
    }
    else{
        screen.style.display = "none"
        confirm_.style.display= "flex"
    }
}

function confirmation(func, back, message){
    document.getElementById("confirmText").innerHTML = message
    toggleConfirmation()
    document.getElementById("yes").addEventListener("click", func)
    document.getElementById("yes").addEventListener("click", toggleConfirmation)
    document.getElementById("no").addEventListener("click", toggleConfirmation)
    document.getElementById("no").addEventListener("click", back)
    
}
