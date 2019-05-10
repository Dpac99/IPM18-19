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
    }
}

function closePopups() {
    sessionStorage.setItem("friendsOn", "false")
}