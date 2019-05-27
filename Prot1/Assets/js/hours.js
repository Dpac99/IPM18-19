var exp = new Vue({
    el: "#hours",
    data: {
        hours: "",
        day: "",
        date: ""
    }
})

function updateTime() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var day = currentTime.getDay()
    var dotm = currentTime.getDate()
    var month = currentTime.getMonth() + 1
    exp.date = dotm.toString() + " "
    switch (day) {
        case 0:
            exp.day = "SUN"
            break
        case 1:
            exp.day = "MON"
            break
        case 2:
            exp.day = "TUE"
            break
        case 3:
            exp.day = "WED"
            break
        case 4:
            exp.day = "THU"
            break
        case 5:
            exp.day = "FRI"
            break
        case 6:
            exp.day = "SAT"
            break
    }
    switch (month) {
        case 1:
            exp.date += "JAN"
            break
        case 2:
            exp.date += "FEB"
            break
        case 3:
            exp.date += "MAR"
            break
        case 4:
            exp.date += "APR"
            break
        case 5:
            exp.date += "MAY"
            break
        case 6:
            exp.date += "JUN"
            break
        case 7:
            exp.date += "JUL"
            break
        case 8:
            exp.date += "AUG"
            break
        case 9:
            exp.date += "SET"
            break
        case 10:
            exp.date += "OCT"
            break
        case 11:
            exp.date += "NOV"
            break
        case 12:
            exp.date += "DEC"
            break
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    var t_str = hours + ":" + minutes + " ";
    exp.hours = t_str
}

updateTime()
setInterval(updateTime, 1000);