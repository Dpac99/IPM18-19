function mainMenu() {
    document.location.href = "mainScreen1.html"
}

function myTrip() {
    document.location.href = "myTripScreen.html"
}

function payNow() {
    document.location.href = "payNow.html"
}

function payNowConfirmation() {
    document.location.href = "payNowConfirmation.html"
}

function settings() {
    document.location.href = "settings.html"
}

function health() {
    document.location.href = "healthScreen.html"
}

function tips() {
    document.location.href = "tips.html"
}

function profiles() {
    document.location.href = "Profiles.html"
}

function addProfile(){
    document.location.href = "addProfile.html"
}

function editProfile(){
    document.location.href = "editProfile.html"
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

function medicalSheet(){
    sessionStorage.setItem("medicalBack", document.location.href)
    document.location.href="medicalSheet.html"
}

function bpm(){
    sessionStorage.setItem("healthBack", document.location.href)
    document.location.href="bpm.html"
}

function o2(){
    sessionStorage.setItem("healthBack", document.location.href)
    document.location.href = "o2.html"
}

function distance(){
    sessionStorage.setItem("healthBack", document.location.href)
    document.location.href="km.html"
}

function showSpeech(){
    let screen = document.getElementById('screen')
    let doc = document.getElementById("overlay")
    let box = document.getElementById("textbox")
    if (doc.style.display == "none"){
        doc.style.display = "flex"
        screen.style.display= "none"
        box.style.display = "inline"
    }
    else{
        doc.style.display = "none"
        screen.style.display= "flex"
        box.style.display = "none"
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

function payNowScanner() {
    scanner()
    setTimeout(scanner, 3000)
    setTimeout(payNowConfirmation, 2995)
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

function unlock(href){
    document.getElementById("screen").style.display="none"
    document.getElementById("overlay").style.display = "flex"
    document.getElementById("overlay").addEventListener("click", function(){
        document.location.href = href
    })
}

function loading(){
    document.getElementById("scanButton").style.backgroundImage = "url('Assets/images/Rolling-1s-200px-blue2.gif')"
    document.getElementById("scanButton").innerText=" "
    document.getElementById("bpm1").style.display = "none"
    document.getElementById("bpm2").style.display = "inline"
    setTimeout(unload, 1500)
}

function unload(){
    document.getElementById("scanButton").style.backgroundImage = ""
    document.getElementById("scanButton").innerText="SCAN NOW"
    document.getElementById("bpm2").style.display = "none"
    document.getElementById("bpm1").style.display = "inline"
}