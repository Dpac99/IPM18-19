var profileTemplate = {
    name: "",
    low_bpm: 0,
    top_bpm: 0,
    current: false
}

var profilesArr = JSON.parse(sessionStorage.getItem("profiles"))

var profileToDelete = null

var profileToEdit = sessionStorage.getItem("profileToEdit")

var prevProfile = sessionStorage.getItem("prevProfile")

var exp = new Vue({
    el: "#wrapper",
    data: {
        expProfiles: profilesArr,
        newProfile: profileTemplate
    },
    methods: {
        selectProfile: function (profile) {
            for (i = 0; i < profilesArr.length; i++) {
                var p = profilesArr[i]
                if (p.current) {
                    if (p.name !== profile) {
                        document.getElementById(p.name).style.backgroundColor = ""
                        document.getElementById(p.name + "name").style.color = "white"
                        document.getElementById(p.name + "range").style.color = "white"
                        p.current = false
                    }
                    prevProfile = p.name
                    sessionStorage.setItem("prevProfile", prevProfile)
                }
                if (p.name === profile) {
                    document.getElementById(profile).style.backgroundColor = "lightgreen"
                    document.getElementById(p.name + "name").style.color = "black"
                    document.getElementById(p.name + "range").style.color = "black"
                    p.current = true
                    sessionStorage.setItem("low-bpm", p.low_bpm)
                    sessionStorage.setItem("top-bpm", p.top_bpm)
                }

            }
            sessionStorage.setItem("profiles", JSON.stringify(profilesArr))
        },
        deleteProfile: function (profile) {
            for (i = 0; i < profilesArr.length; i++) {
                let p = profilesArr[i]
                if (p.name === profile) {
                    profileToDelete = i
                }
                if(prevProfile === p.name){
                    if(p.name  === profile){
                        profilesArr[0].current = true
                    }
                    else{
                        console.log("found prev")
                        profilesArr[i].current = true
                    }
                }
            }
            sessionStorage.setItem("profiles", JSON.stringify(profilesArr))
            confirmation(deleteProfileAux, profiles, "Delete this Profile?")
        },
        editCurrProfile: function (profile) {
            for (i = 0; i < profilesArr.length; i++) {
                let p = profilesArr[i]
                if (p.name === profile) {
                    sessionStorage.setItem("profileToEdit", i)
                    if(prevProfile !== p.name){
                        p.current = false
                    }
                }
                if(prevProfile === p.name){
                    if(prevProfile !== profile){
                        document.getElementById(p.name).style.backgroundColor = "lightgreen"
                        document.getElementById(p.name + "name").style.color = "black"
                        document.getElementById(p.name + "range").style.color = "black"
                    }
                }
            }
            sessionStorage.setItem("profiles", JSON.stringify(profilesArr))
            editProfile()
        }
    }
})

function deleteProfileAux() {
    profilesArr = JSON.parse(sessionStorage.getItem("profiles"))
    profilesArr.splice(profileToDelete, 1)
    exp.expProfiles = profilesArr
    sessionStorage.setItem("profiles", JSON.stringify(profilesArr))
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.location.href.substring(document.location.href.lastIndexOf("/") + 1) === "Profiles.html") {
        for (i = 0; i < profilesArr.length; i++) {
            var p = profilesArr[i]
            if (p.current) {
                document.getElementById(p.name).style.backgroundColor = "lightgreen"
                document.getElementById(p.name + "name").style.color = "black"
                document.getElementById(p.name + "range").style.color = "black"
            }
        }
    }
    else if (document.location.href.substring(document.location.href.lastIndexOf("/") + 1) === "editProfile.html") {
        exp.newProfile = profilesArr[profileToEdit]
    }
})

function confirmChangesAuxAdd() {
    profilesArr.push(exp.newProfile)
    exp.newProfile = profileTemplate
    exp.profilesArr = profilesArr
    sessionStorage.setItem("profiles", JSON.stringify(profilesArr))
    profiles()
}

function confirmChangesAdd() {
    confirmation(confirmChangesAuxAdd, addProfile, "Save and add this profile?")
}

function confirmChangesEdit() {
    confirmation(confirmChangesAuxEdit, editProfile, "Save and add this profile?")
}

function confirmChangesAuxEdit() {
    profilesArr[profileToEdit] = exp.newProfile
    sessionStorage.setItem("profiles", JSON.stringify(profilesArr))
    profiles()
}


function changeBPM(type) {
    var target
    var screen = document.getElementById("screen")
    if (type === "low") {
        target = document.getElementById("lowBPM")
    }
    else {
        target = document.getElementById("topBPM")
    }
    if (screen.style.display === "none") {
        screen.style.display = "flex"
        target.style.display = "none"
    }
    else {
        screen.style.display = "none"
        target.style.display = "flex"
    }
}

function incrementBPM(type, amount) {
    if (type === 'low') {
        exp.newProfile.low_bpm === 0 && amount < 0 ? exp.newProfile.low_bpm = 0 : exp.newProfile.low_bpm += amount
        while (exp.newProfile.top_bpm <= exp.newProfile.low_bpm) {
            exp.newProfile.top_bpm++
        }
    }
    else {
        exp.newProfile.top_bpm === 0 && amount < 0 ? exp.newProfile.top_bpm = 0 : exp.newProfile.top_bpm += amount
    }
}

function goBackAdd() {
    confirmation(profiles, addProfile, "Go back? Changes are not saved.")
}

function goBackEdit() {
    confirmation(profiles, editProfile, "Go back? Changes are not saved.")
}

