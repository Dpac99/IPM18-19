var bpm = new Vue({
    el: "#bpm", 
    data: {
        currentBpm: localStorage.getItem("bpm")
    }
})