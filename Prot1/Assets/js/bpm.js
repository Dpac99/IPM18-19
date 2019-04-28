var bpm = new Vue({
    el: "#bpm", 
    data: {
        currentBpm: sessionStorage.getItem("bpm")
    }
})