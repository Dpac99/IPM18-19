var bpmArr = sessionStorage.getItem("bpm").split(",")
var o2Arr = sessionStorage.getItem("o2").split(",")
var km = JSON.parse(sessionStorage.getItem("km"))
var lowBpm = parseInt(sessionStorage.getItem("low-bpm"))
var topBpm = parseInt(sessionStorage.getItem("top-bpm"))
var bpmGauge = parseInt(sessionStorage.getItem("bpmGauge"))
var o2Gauge = parseInt(sessionStorage.getItem("o2Gauge"))
var kmGauge = parseInt(sessionStorage.getItem("kmGauge"))
var back = sessionStorage.getItem("healthBack")
var notifsArr = JSON.parse(sessionStorage.getItem("notifs"))

var exp = new Vue({
    el: "#wrapper",
    data: {
        bpm: bpmArr[bpmArr.length - 1],
        o2: o2Arr[o2Arr.length - 1],
        km: km.dayTotal,
        lastKm: km.values[km.values.length - 1],
        bpmGauge: bpmGauge,
        o2Gauge: o2Gauge,
        kmGauge: kmGauge
    },
    methods: {
        back: function () {
            document.location.href = back.substring(back.lastIndexOf("/") + 1)
        }
    }
})

var chart = new CanvasJS.Chart("chartContainer", {
    backgroundColor: "#1f2c3d",
    theme: "dark2",
    axisY: {
        includeZero: false,
    },
    data: [
        {
            lineColor: "#ffffff",
            type: "line",
            dataPoints: []
        }
    ]
})

function initBPM() {
    initDataPoints(bpmArr, 0)
    chart.render()
}

function initO2() {
    initDataPoints(o2Arr, 1)
    chart.render()
}

function initKm() {
    initDataPoints(km.values, -1)
    chart.render()
}

function initDataPoints(data, type) {
    switch (type) {
        case -1:
            chart.axisY.minimum = 0
            chart.axisY.maximum = 2
            break
        case 0:
            chart.axisY.minimum = lowBpm
            chart.axisY.maximum = topBpm
            break
        case 1:
            chart.axisY.minimum = 90
            chart.axisY.maximum = 100
            break
    }
    chart.options.data[0].dataPoints = []
    for (i = data.length - 6; i < data.length; i++) {
        let x = i % 24
        chart.options.data[0].dataPoints.push({ label: x.toString(), y: type >= 0 ? parseInt(data[i]) : parseFloat(data[i]) })
    }
}

function scanBPM() {
    loading()
    var newBPM = Math.floor((Math.random() * (topBpm - lowBpm) * 1.3) + lowBpm * 0.9)
    bpmArr.push(newBPM)
    exp.bpm = newBPM
    sessionStorage.setItem("bpm", bpmArr)
    initBPM()
    exp.bpmGauge = Math.floor((((newBPM - lowBpm) / (topBpm - lowBpm)) * 100) / 5) * 5
    sessionStorage.setItem("bpmGauge", exp.bpmGauge)
    if (newBPM > topBpm) {
        var id = notifsArr[notifsArr.length - 1] === undefined ? 0 : notifsArr[notifsArr.length - 1].id + 1
        notifsArr.push({
            img: "Assets/images/heartbeat.png",
            text: "BPM too high! At " + bpmArr.length % 24 + " hours",
            id: id,
            href: "bpm.html"
        })
    }
    else if (newBPM < lowBpm) {
        var id = notifsArr[notifsArr.length - 1] === undefined ? 0 : notifsArr[notifsArr.length - 1].id + 1
        notifsArr.push({
            img: "Assets/images/heartbeat.png",
            text: "BPM too low! At " + bpmArr.length % 24 + " hours",
            id: id,
            href: "bpm.html"
        })
    }
    sessionStorage.setItem("notifs", JSON.stringify(notifsArr))
}

function scanO2() {
    var newO2 = Math.floor(Math.random() * 11 + 90)
    o2Arr.push(newO2)
    exp.o2 = newO2
    sessionStorage.setItem("o2", o2Arr)
    initO2()
    exp.o2Gauge = (newO2 - 90) * 10
    sessionStorage.setItem("o2Gauge", exp.o2Gauge)
}

function walk() {
    var newKm = (Math.random() * 2).toFixed(2)
    exp.lastKm = newKm
    km.values.push(parseFloat(newKm))
    km.dayTotal = (parseFloat(km.dayTotal) + parseFloat(newKm)).toFixed(2)
    exp.km = km.dayTotal
    sessionStorage.setItem("km", JSON.stringify(km))
    initKm()
    var g = Math.round(parseFloat(km.dayTotal) * 5)
    if (g > 100) {
        g = 100
    }
    exp.kmGauge = g
    sessionStorage.setItem("kmGauge", exp.kmGauge)
}
