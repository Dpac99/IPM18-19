var bpmArr = localStorage.getItem("bpm").split(",")
var o2Arr = localStorage.getItem("o2").split(",")
var km = JSON.parse(localStorage.getItem("km"))
var lowBpm = localStorage.getItem("low-bpm")
var topBpm = localStorage.getItem("top-bpm")
var gauge = localStorage.getItem("bpmGauge")

var exp = new Vue({
    el: "#wrapper",
    data:{
        bpm: bpmArr[bpmArr.length - 1],
        o2: o2Arr[o2Arr.length - 1],
        km: km.dayTotal,
        bpmGauge: gauge
    }
})

var chart = new CanvasJS.Chart("chartContainer", {
    theme: "dark2",
    data:[
        {
            type: "line",
            dataPoints: []
        }
    ]
})

function initBPM(){
    initDataPoints(bpmArr)
    chart.render()
}

function initO2(){
    initDataPoints(o2Arr)
    chart.render()
}

function initKm(){
    initDataPoints(km.values)
    chart.render()
}

function initDataPoints(data){
    chart.options.data[0].dataPoints     = []
    for(i=0; i<data.length; i++){
        chart.options.data[0].dataPoints.push({x: i+1, y: parseInt(data[i]) })
    }
}

function scanBPM(){
    var newBPM =Math.floor(Math.random() * 61 + 75) 
    bpmArr.push(newBPM)
    exp.bpm = newBPM
    localStorage.setItem("bpm", bpmArr)
    initBPM()
    exp.bpmGauge =Math.floor((((newBPM-lowBpm)/(topBpm - lowBpm))*100)/5)*5
    localStorage.setItem("bpmGauge", exp.bpmGauge)

}

function scanO2(){
    var newO2 = Math.random() * 10 + 90
    exp.o2 = newO2
    localStorage.setItem("o2", newO2)
}
