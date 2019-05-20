var friends = JSON.parse(sessionStorage.getItem("friendGroups"))
var currentFriend = 0
var newGroup = false
var groupTemplate = {
    name: "",
    friends: []
}


var exp = new Vue({
    el: "#friends",
    data: {
        allFriends: friends[0],
        currFriends: friends[currentFriend],
        newFriend: "",
        friendsArr: friends,
        friendsToAdd: [],
        newGroup: groupTemplate
    },
    methods: {
        deleteFriend: function (id, name) {
            if (currentFriend == 0) {
                deleteFriendAllGroups(name)
            }
            friends[currentFriend].friends.splice(id, 1)
            this.friendsArr = friends
            this.currFriends = friends[currentFriend]
            sessionStorage.setItem("friendGroups", JSON.stringify(friends))
        },
        addToGroup: function (i) {
            this.friendsToAdd[i].in = !this.friendsToAdd[i].in
        }
    }
})

function nextGroup() {
    if (currentFriend === friends.length - 1) {
        return
    }
    currentFriend++
    exp.currFriends = friends[currentFriend]
    let element = document.getElementById("group" + currentFriend.toString())
    element.scrollIntoView({
        behavior: "smooth"
    })
}

function prevGroup() {
    if (currentFriend === 0) {
        return
    }
    currentFriend--
    exp.currFriends = friends[currentFriend]
    let element = document.getElementById("group" + currentFriend.toString())
    element.scrollIntoView({
        behavior: "smooth"
    })
}

function deleteFriendAllGroups(name) {
    for (let i = 0; i < friends.length; i++) {
        let length = friends[i].friends.length
        for (let j = 0; j < length; j++) {
            if (friends[i].friends[j].name == name) {
                friends[i].friends.splice(j, 1)
                length--
            }
        }
    }
    exp.allFriends = friends[0]
    exp.currFriends = friends[currentFriend]
    exp.friendsArr = friends
}

function addFriend() {
    friends[0].friends.push(exp.newFriend)
    allFriends = friends[0]
    exp.friendsArr = friends
    exp.newFriend = ""
    sessionStorage.setItem("friendGroups", JSON.stringify(friends))
    showSpeech()
}

function deleteGroupAux() {
    friends.splice(currentFriend, 1)
    exp.friendsArr = friends
    currentFriend = 0
    exp.currFriend = friends[currentFriend]
    let element = document.getElementById("group" + currentFriend.toString())
    element.scrollIntoView({
        behavior: "smooth"
    })
    sessionStorage.setItem("friendGroups", JSON.stringify(friends))
}

function deleteGroup() {
    confirmation3(deleteGroupAux, function () { }, "Delete Group?")
}

function showGroupEdit() {
    let screen = document.getElementById("screen")
    let gr = document.getElementById("addToGroup")
    if (gr.style.display == "none") {
        gr.style.display = "flex"
        screen.style.display = "none"
        document.getElementById("back").onclick = function () {
            confirmation2(showGroupEdit, function () { }, "Go back? Changes are not saved")
        }
    } else {
        gr.style.display = "none"
        screen.style.display = "flex"
        document.getElementById("back").onclick = function () {
            myTrip()
        }
        let element = document.getElementById("group" + currentFriend.toString())
        element.scrollIntoView({
            behavior: "smooth"
        })
    }
}

function addFriendToGroup() {
    exp.friendsToAdd = []
    for (let i = 0; i < friends[0].friends.length; i++) {
        let name = friends[0].friends[i]
        let contained = false
        for (let j = 0; j < friends[currentFriend].friends.length; j++) {
            if (friends[currentFriend].friends[j] == name) {
                contained = true
            }
        }
        exp.friendsToAdd.push({
            name: name,
            in: contained
        })
    }
    showGroupEdit()
}

function confirmEditAux() {
    friends[currentFriend].friends = []
    for (let i = 0; i < exp.friendsToAdd.length; i++) {
        if (exp.friendsToAdd[i].in) {
            friends[currentFriend].friends.push(exp.friendsToAdd[i].name)
        }
    }
    exp.currFriends = friends[currentFriend]
    exp.friendsArr = friends
    sessionStorage.setItem("friendGroups", JSON.stringify(friends))
    newGroup = false
    showGroupEdit()
}

function confirmEdit() {
    confirmation2(confirmEditAux, function () { }, "Save changes?")
}

function toggleConfirmation2() {
    var screen = document.getElementById("addToGroup")
    var confirm_ = document.getElementById("confirm")

    if (screen.style.display === "none") {
        screen.style.display = "flex"
        confirm_.style.display = "none"
        let el = document.getElementById("yes")
        let clone = el.cloneNode(true)
        el.parentNode.replaceChild(clone, el)
        el = document.getElementById('no')
        clone = el.cloneNode(true)
        el.parentNode.replaceChild(clone, el)
    }
    else {
        screen.style.display = "none"
        confirm_.style.display = "flex"
    }
}

function confirmation3(func, back, message) {
    document.getElementById("confirmText").innerHTML = message
    toggleConfirmation()
    document.getElementById("yes").addEventListener("click", toggleConfirmation)
    document.getElementById("yes").addEventListener("click", func)
    document.getElementById("no").addEventListener("click", toggleConfirmation)
    document.getElementById("no").addEventListener("click", back)
}

function confirmation2(func, back, message) {
    document.getElementById("confirmText").innerHTML = message
    toggleConfirmation2()
    document.getElementById("yes").addEventListener("click", toggleConfirmation2)
    document.getElementById("yes").addEventListener("click", func)
    document.getElementById("no").addEventListener("click", toggleConfirmation2)
    document.getElementById("no").addEventListener("click", back)
}

function addGroup() {
    showSpeech('textbox1')
    currentFriend = friends.length
    friends.push(exp.newGroup)
    exp.newGroup = { name: "", friends: [] }
    exp.friendsArr = friends
    exp.currFriends = friends[currentFriend]
    newGroup = true
    addFriendToGroup()
}

function confirmBackEdit() {
    confirmation2(function () {
        if (newGroup) {
            friends.splice(currentFriend, 1)
            exp.currFriends = friends[--currentFriend]
            exp.friendsArr = friends
        }
        showGroupEdit()
    }, function () { }, "Go back? Changes are not saved")
}