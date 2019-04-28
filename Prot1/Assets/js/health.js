var bpmArr = sessionStorage.getItem("bpm").split(",")
var o2Arr = sessionStorage.getItem("o2").split(",")
var km = JSON.parse(sessionStorage.getItem("km"))
var lowBpm = sessionStorage.getItem("low-bpm")
var topBpm = sessionStorage.getItem("top-bpm")
var gauge = sessionStorage.getItem("bpmGauge")
var BPMcounter = parseInt(sessionStorage.getItem("BPMCounter"))

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
    backgroundColor: "#1f2c3d",
    theme: "dark2",
    axisY:{
        includeZero: false,
    },
    data:[
        {
            lineColor:"#ffffff",
            type: "line",
            dataPoints: []
        }
    ]
})

function initBPM(){
    initDataPoints(bpmArr, BPMcounter)
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

function initDataPoints(data, counter){
    chart.options.data[0].dataPoints= []
    for(i=0; i<data.length; i++){
        let x = counter - 5 + i
        if(x < 0){
            x+=24
        }
        chart.options.data[0].dataPoints.push({label: x.toString(), y: parseInt(data[i]) })
    }
}

function scanBPM(){
    var newBPM =Math.floor(Math.random() * 61 + 75)
    BPMcounter++
    if(BPMcounter > 23){
        BPMcounter = 0
    }
    sessionStorage.setItem("BPMCounter", BPMcounter )
    bpmArr.push(newBPM)
    exp.bpm = newBPM
    sessionStorage.setItem("bpm", bpmArr)
    if(bpmArr.length >= 6){
        bpmArr.splice(0,1)
    }
    initBPM()
    exp.bpmGauge =Math.floor((((newBPM-lowBpm)/(topBpm - lowBpm))*100)/5)*5
    sessionStorage.setItem("bpmGauge", exp.bpmGauge)

}

function scanO2(){
    var newO2 = Math.random() * 10 + 90
    exp.o2 = newO2
    sessionStorage.setItem("o2", newO2)
}
