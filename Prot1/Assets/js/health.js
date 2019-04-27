var bpm = localStorage.getItem("bpm")
var o2 = localStorage.getItem("o2")
var km = localStorage.getItem("km")

var exp = new Vue({
    el: "#wrapper",
    data:{
        bpm: bpm,
        o2: o2,
        km: km
    }
})
console.log(exp.bpm)

function scanBPM(){
    var newBpm = Math.random() * 50 + 60
    exp.bpm = newBpm
    localStorage.setItem("bpm", newBpm)
}

function scanO2(){
    var newO2 = Math.random() * 10 + 90
    exp.o2 = newO2
    localStorage.setItem("o2", newO2)
}