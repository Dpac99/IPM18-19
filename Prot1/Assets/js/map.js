var friendsOn = false
var meetingOn = false
var InterestOn = false
var meetingPoints = JSON.parse(sessionStorage.getItem("meetings"))
var interestPoints = JSON.parse(sessionStorage.getItem("interests"))
var fr = JSON.parse(sessionStorage.getItem("friends"))
var dist = Math.floor((Math.random() * 20) + 1)
var friend = "Diogo Pacheco"
var inFindFriend    // To check if we are in "maps.html" or "friendsLocation.html"

var meetingTemplate = {
    location: "",
    description: "",
    date: ""
}

var exp = new Vue({
    el: "#wrapper",
    data: {
        meetings: meetingPoints,
        friends: fr,
        interests: interestPoints,
        conds: {
            meetings: meetingPoints.length != 0,
            friends: fr.length != 0,
            interests: interestPoints.length != 0
        },
        newMeeting: meetingTemplate,
        distance: dist,
        name: friend
    }
})

function popUp(id) {
    switch (id) {
        case 0:
            if (meetingOn) {
                meetingOn = false;
                document.getElementById("MeetingIcon").style.backgroundColor = "#ffffff"
                document.getElementById("plans").style.display = 'none'
                if (inFindFriend)
                    document.getElementById("findFriend").style.display = "flex"
            }
            else {
                closePopups()
                meetingOn = true
                document.getElementById("plans").style.display = "flex"
                document.getElementById("MeetingIcon").style.backgroundColor = "#00cc00"
            }
            return
        case 1:
            if (friendsOn) {
                friendsOn = false
                document.getElementById("FriendsIcon").style.backgroundColor = "#ffffff"
                document.getElementById("friends").style.display = "none"
                if (inFindFriend)
                    document.getElementById("findFriend").style.display = "flex"
            }
            else {
                closePopups()
                friendsOn = true
                document.getElementById("friends").style.display = "flex"
                document.getElementById("FriendsIcon").style.backgroundColor = "#00cc00"
            }
            return
        case 2:
            if (InterestOn) {
                InterestOn = false
                document.getElementById("InterestsIcon").style.backgroundColor = "#ffffff"
                document.getElementById("interests").style.display = "none"
                if (inFindFriend)
                    document.getElementById("findFriend").style.display = "flex"
            }
            else {
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
    document.getElementById("MeetingIcon").style.backgroundColor = "#ffffff"
    document.getElementById("FriendsIcon").style.backgroundColor = "#ffffff"
    document.getElementById("InterestsIcon").style.backgroundColor = "#ffffff"
    document.getElementById("plans").style.display = "none"
    document.getElementById("friends").style.display = "none"
    document.getElementById("interests").style.display = "none"
    if (inFindFriend)
        document.getElementById("findFriend").style.display = "none"
}

function randImg() {
    var r = Math.floor((Math.random() * 3) + 1)
    switch (r) {
        case (1):
            document.getElementById('imageBox').src = 'Assets/images/map_friend_cg.jpg';
            return
        case (2):
            document.getElementById('imageBox').src = 'Assets/images/map_friend_castelo.jpg'
            return
        case (3):
            document.getElementById('imageBox').src = 'Assets/images/map_friend_lxfactory.jpg'
            return
    }
}

function randImg2() {
    var r = Math.floor((Math.random() * 5) + 1)
    switch (r) {
        case (1):
            document.getElementById('imageBox').src = 'Assets/images/map_path_arco.jpg';
            return
        case (2):
            document.getElementById('imageBox').src = 'Assets/images/map_path_cinemacp.jpg'
            return
        case (3):
            document.getElementById('imageBox').src = 'Assets/images/map_path_gulbenkian.jpg'
            return
        case (4):
            document.getElementById('imageBox').src = 'Assets/images/map_path_mercado_arroios.jpg'
            return
        case (5):
            document.getElementById('imageBox').src = 'Assets/images/map_path_portugalia.jpg'
            return
    }
}

function randDirections() {
    var r = Math.floor((Math.random() * 3) + 1)
    switch (r) {
        case (1):
            document.getElementById('imageBox').src = 'Assets/images/map-front.jpg';
            return
        case (2):
            document.getElementById('imageBox').src = 'Assets/images/map-left.jpg'
            return
        case (3):
            document.getElementById('imageBox').src = 'Assets/images/map-right.jpg'
            return
    }

}

function inFindFriend(val) {
    inFindFriend = val
}