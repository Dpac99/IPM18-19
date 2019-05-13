var friendsOn = false
var meetingOn = false
var InterestOn = false
var meetingPoints = JSON.parse(sessionStorage.getItem("meetings"))
var interestPoints = JSON.parse(sessionStorage.getItem("interests"))
var fr = JSON.parse(sessionStorage.getItem("friends"))
var meetingDelete
var settings = JSON.parse(sessionStorage.getItem("interestSettings"))

var interestDB = [
    {
        name: "Portugalia",
        img: "Assets/images/map_path_portugalia.jpg",
        kind: "Restaurants",
        radius: 2
    },
    {
        name: "CinemaCity",
        img: "Assets/images/map_path_cinemacp.jpg",
        kind: "Culture",
        radius: 5
    },
    {
        name: "Arco do Cego",
        img: "Assets/images/map_path_arco.jpg",
        kind: "Gardens",
        radius: 4
    },
    {
        name: "Museu Gulbenkian",
        img: "Assets/images/map_path_gulbenkian.jpg",
        kind: "Culture",
        radius: 7
    },
    {
        name: "Mercado de Arroios",
        img: "Assets/images/map_path_mercado_arroios.jpg",
        kind: "Restaurants",
        radius: 5
    }
]
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
        distance: dist,
        name: friend,
        meetings: meetingPoints,
        friends: fr,
        interests: interestPoints,
        conds: {
            meetings: meetingPoints.length != 0,
            friends: fr.length != 0,
            interests: interestPoints.length != 0
        },
        newMeeting: meetingTemplate,
        dateTemplate: {
            day: 1,
            month: 1,
            year: 2019,
            hours: 0,
            minutes: 0
        },
        settings: settings,
        newRadius: {
            km: Math.floor(settings.Radius),
            m: (settings.Radius - Math.floor(settings.Radius)) * 10
        }
    },
    methods: {
        deleteMeetingPoint: function (i) {
            meetingDelete = i
            confirmation(deleteMeetingPointAux, function () { }, "Delete this meeting point?")
        },
        selectSetting: function (name) {
            if (name != "Radius") {
                settings[name] = !settings[name]
                exp.settings = settings
                sessionStorage.setItem("interestSettings", JSON.stringify(settings))
            } else {
                showRadius()
            }
        },
        friendsLocation:  function (name){
            document.getElementById("screen").style.display = "none"
            document.getElementById("friendLocation").style.display = "flex"
            randImg()
            this.name = name
        }
    }
})

function showRadius() {
    let screen = document.getElementById("screen")
    let rad = document.getElementById("radius")
    if (rad.style.display == "none") {
        screen.style.display = "none"
        rad.style.display = "flex"
    } else {
        screen.style.display = "flex"
        rad.style.display = "none"
    }
}

function pushRadius() {
    settings.Radius = exp.newRadius.km + (exp.newRadius.m / 10)
    exp.settings = settings
    sessionStorage.setItem("interestSettings", JSON.stringify(settings))
    showRadius()
}

function loadInterestPoints(){
    interestPoints = []
    for(i=0; i<interestDB.length; i++){
        let ipoint = interestDB[i]
        if(settings[ipoint.kind] && ipoint.radius <= settings.Radius ){
            interestPoints.push(ipoint)
        }
    }
    exp.interests = interestPoints
    sessionStorage.setItem("interests", JSON.stringify(interestPoints))
    maps()
}

function confirmSettings(){
    confirmation(loadInterestPoints, function(){}, "Confirm changes?")
}

function changeRadius(am, type) {
    if (type == 1) {
        exp.newRadius.km += am
        if (exp.newRadius.km < 0) { exp.newRadius.km = 0 }
    } else {
        exp.newRadius.m += am
        if (exp.newRadius.m < 0) {
            if (exp.newRadius.km > 0) {
                exp.newRadius.m = 9
                changeRadius(-1, 1)
            }
            else {
                exp.newRadius.m = 0
            }
        } else if (exp.newRadius.m > 9) {
            changeRadius(1, 1)
            exp.newRadius.m = 0
        }
    }
}

function deleteMeetingPointAux() {
    let i = meetingDelete
    meetingPoints.splice(i, 1)
    sessionStorage.setItem("meetings", JSON.stringify(meetingPoints))
    exp.meetingPoints = meetingPoints
    exp.conds.meetings = meetingPoints.length != 0
}

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

function changeDate(amount, field) {
    switch (field) {
        case 'D':
            exp.dateTemplate.day += amount
            if (exp.dateTemplate.day < 1) { exp.dateTemplate.day = 1 }
            if (exp.dateTemplate.day > 30) { exp.dateTemplate.day = 30 }
            break
        case 'M':
            exp.dateTemplate.month += amount
            if (exp.dateTemplate.month < 1) { exp.dateTemplate.month = 1 }
            if (exp.dateTemplate.month > 12) { exp.dateTemplate.month = 12 }
            break
        case 'Y':
            exp.dateTemplate.year += amount
            if (exp.dateTemplate.year < 1) { exp.dateTemplate.year = 1 }
            break
        case 'H':
            exp.dateTemplate.hours += amount
            if (exp.dateTemplate.hours == -1) { exp.dateTemplate.hours = 23 }
            if (exp.dateTemplate.hours == 24) { exp.dateTemplate.hours = 0 }
            break
        case 'MIN':
            exp.dateTemplate.minutes += amount
            if (exp.dateTemplate.minutes < 0) { exp.dateTemplate.minutes = 59 }
            if (exp.dateTemplate.minutes > 59) { exp.dateTemplate.minutes = 0 }
            break
    }
}

function showHours() {
    let screen = document.getElementById("screen")
    let hours = document.getElementById("hours")
    if (hours.style.display == "none") {
        screen.style.display = "none"
        hours.style.display = "flex"
    } else {
        screen.style.display = "flex"
        hours.style.display = "none"
    }
}

function pushHours() {
    exp.newMeeting.date =
        exp.dateTemplate.day + "/" +
        exp.dateTemplate.month + "/" +
        exp.dateTemplate.year + "/ " +
        exp.dateTemplate.hours + ":" +
        exp.dateTemplate.minutes
    showHours()
}

function pushMeetingPointAux() {
    meetingPoints.push(exp.newMeeting)
    sessionStorage.setItem("meetings", JSON.stringify(meetingPoints));
    maps()
}

function pushMeetingPoint() {
    confirmation(pushMeetingPointAux, function () { }, "Add this meeting Point?")
}

function confirmBack(){
    confirmation(maps, function(){}, "Go Back? Changes are not saved")
}
function inFindFriend(val) {
    inFindFriend = val
}
