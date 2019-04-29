

function selectProfile(id) {
    var prevID = sessionStorage.getItem("profileId")
    sessionStorage.setItem("profileId", id)
    if (id == 'Running') {
        document.getElementById('Running').style.border = '0.1cm #00cc00 solid'
        sessionStorage.setItem("top-bpm", 170)
        sessionStorage.setItem("low-bpm", 100)
    }
    if (id == 'Walking') {
        document.getElementById('Walking').style.border = '0.1cm #00cc00 solid'
        sessionStorage.setItem("top-bpm", 75)
        sessionStorage.setItem("low-bpm", 135)
    }
    if (id == 'Resting') {
        document.getElementById('Resting').style.border = '0.1cm #00cc00 solid'
        sessionStorage.setItem("top-bpm", 110)
        sessionStorage.setItem("low-bpm", 60)
    }
    if (id == 'Sleeping') {
        document.getElementById('Sleeping').style.border = '0.1cm #00cc00 solid'
        sessionStorage.setItem("top-bpm", 80)
        sessionStorage.setItem("low-bpm", 40)
    }

   if(prevID != id){ 
       document.getElementById(prevID).style.border = '0.1cm #1f2c3d solid'
   }
}

function initProfiles(){
    selectProfile(sessionStorage.getItem("profileId"))
}