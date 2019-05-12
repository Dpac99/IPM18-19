var friendsOn = false
var meetingOn = false
var InterestOn = false
var meetingPoints = JSON.parse(sessionStorage.getItem("meetings"))
var interestPoints = JSON.parse(sessionStorage.getItem("interests"))
var fr = JSON.parse(sessionStorage.getItem("friends"))

var exp = new Vue({
    el: "#wrapper",
    data:{
        meetings: meetingPoints,
        friends: fr,
        interests: interestPoints,
        conds:{
            meetings: meetingPoints.length != 0,
            friends: fr.length != 0,
            interests: interestPoints.length != 0
        }
    }
})

function popUp(id) {
    switch (id) {
        case 0:
            if (meetingOn) {
                meetingOn = false;
                document.getElementById("MeetingIcon").style.backgroundColor = "#ffffff"
                document.getElementById("plans").style.display = 'none'
            }
            else{
                closePopups()
                meetingOn = true
                document.getElementById("plans").style.display = "flex"
                document.getElementById("MeetingIcon").style.backgroundColor = "#00cc00"
            }
            return
        case 1:
            if(friendsOn){
                friendsOn = false
                document.getElementById("FriendsIcon").style.backgroundColor="#ffffff"
                document.getElementById("friends").style.display = "none"
            }
            else{
                closePopups()
                friendsOn = true
                document.getElementById("friends").style.display = "flex"
                document.getElementById("FriendsIcon").style.backgroundColor = "#00cc00"
            }
            return
        case 2:
            if(InterestOn){
                InterestOn = false
                document.getElementById("InterestsIcon").style.backgroundColor = "#ffffff"
                document.getElementById("interests").style.display = "none"
            }
            else{
                closePopups()
                InterestOn = true
                document.getElementById("interests").style.display = "flex"
                document.getElementById("InterestsIcon").style.backgroundColor = "#00cc00"
            }
            return
    }
}


function closePopups() {
    meetingOn = false
    friendsOn = false
    InterestOn = false
    document.getElementById("MeetingIcon").style.backgroundColor="#ffffff"
    document.getElementById("FriendsIcon").style.backgroundColor="#ffffff"
    document.getElementById("InterestsIcon").style.backgroundColor="#ffffff"
    document.getElementById("plans").style.display = "none"
    document.getElementById("friends").style.display = "none"
    document.getElementById("interests").style.display = "none"
}
