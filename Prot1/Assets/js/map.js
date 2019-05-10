var map = []
for(i=0; i < 1058; i+=2){
    var line = []
    for(j=0; j<1676; j+=2){
        line.push(j)
    }
    map.push(line)
}

sessionStorage.setItem("map", map)

document.getElementById("target").style.left = map[0][300]
document.getElementById("target").style.top = map[300][0]

function popUp(id) {
    if (id === "Friends" && sessionStorage.getItem("friendsOn") === "true") {
        document.getElementById("FriendsIcon").style.backgroundColor = "white"
        document.getElementById("friends").style.zIndex = "-100"
        sessionStorage.setItem("friendsOn", "false")
    } else if (id === "Friends" && sessionStorage.getItem("friendsOn") === "false") {
        document.getElementById("FriendsIcon").style.backgroundColor = "#00cc00"
        document.getElementById("friends").style.zIndex = "100"
        sessionStorage.setItem("friendsOn", "true")
        sessionStorage.setItem("meetingOn", "false")
        document.getElementById("InterestsIcon").style.backgroundColor = "white"
        document.getElementById("plans").style.zIndex = "-100"
        sessionStorage.setItem("interestsOn", "false")
        document.getElementById("MeetingIcon").style.backgroundColor = "white"
        document.getElementById("interests").style.zIndex = "-100"
    } else if (id === "Meeting" && sessionStorage.getItem("meetingOn") === "true") {
        document.getElementById("MeetingIcon").style.backgroundColor = "white"
        document.getElementById("plans").style.zIndex = "-100"
        sessionStorage.setItem("meetingOn", "false")
    } else if (id === "Meeting" && sessionStorage.getItem("meetingOn") === "false") {
        document.getElementById("MeetingIcon").style.backgroundColor = "#00cc00"
        document.getElementById("plans").style.zIndex = "100"
        sessionStorage.setItem("meetingOn", "true")
        sessionStorage.setItem("friendsOn", "false")
        document.getElementById("FriendsIcon").style.backgroundColor = "white"
        document.getElementById("friends").style.zIndex = "-100"
        sessionStorage.setItem("interestsOn", "false")
        document.getElementById("MeetingIcon").style.backgroundColor = "white"
        document.getElementById("interests").style.zIndex = "-100"
    } else if (id === "Interests" && sessionStorage.getItem("interestsOn") === "true") {
        document.getElementById("InterestsIcon").style.backgroundColor = "white"
        document.getElementById("interests").style.zIndex = "-100"
        sessionStorage.setItem("interestsOn", "false")
    } else if (id === "Interests" && sessionStorage.getItem("interestsOn") === "false") {
        document.getElementById("InterestsIcon").style.backgroundColor = "#00cc00"
        document.getElementById("interests").style.zIndex = "100"
        sessionStorage.setItem("interestsOn", "true")
        sessionStorage.setItem("friendsOn", "false")
        document.getElementById("FriendsIcon").style.backgroundColor = "white"
        document.getElementById("friends").style.zIndex = "-100"
        sessionStorage.setItem("meetingOn", "false")
        document.getElementById("InterestsIcon").style.backgroundColor = "white"
        document.getElementById("plans").style.zIndex = "-100"
    }
}

function closePopups() {
    sessionStorage.setItem("friendsOn", "false")
    sessionStorage.setItem("meetingOn", "false")
    sessionStorage.setItem("interestsOn", "false")
}