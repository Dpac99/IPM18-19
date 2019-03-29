let speechImage= '<img class="screen" src="Assets/images/fingerprint.png"'
let prevHtml = ""

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

function showSpeech(message){
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
