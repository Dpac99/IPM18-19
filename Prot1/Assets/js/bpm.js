var bpm = sessionStorage.getItem("bpm").split(",")

var exp = new Vue({
    el: "#bpm", 
    data: {
        bpm: bpm[bpm.length - 1]
    }
})