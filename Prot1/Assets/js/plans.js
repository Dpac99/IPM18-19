let globalPlans = JSON.parse(sessionStorage.getItem("plans"))
let currentPlan = parseInt(sessionStorage.getItem("currentPlanIndex"))

exp = new Vue({
    el: "#plans",
    data: {
        events: [],
        date: "",
        newDateD: 1,
        newDateM: 1,
        newDateY: 2019,
        newEvent: {
            content: "",
            time: ""
        },
        current: [],
        activity: null,
        edit: {
            content: "",
            time: ""
        }
    },
    methods: {
        deleteActivity: function (i) {
            exp.activity = i
            confirmation(deleteActivity, function () { }, "Delete this activity?")
        },
        editActivity: function (i) {
            exp.edit = exp.current[i]
            exp.activity = i
            editActivity()
        }
    }
})

function init() {
    for (var i = 0; i < globalPlans.length; i++) {
        exp.events.push(globalPlans[i].plans)
        exp.date = globalPlans[currentPlan].date
    }
    exp.current = globalPlans[currentPlan].plans
}


init()



function nextPlan() {
    if (currentPlan === globalPlans.length - 1) {
        return;
    }
    currentPlan++
    let element = document.getElementById("plan" + currentPlan.toString())
    element.scrollIntoView({
        behavior: "smooth"
    })

    exp.date = globalPlans[currentPlan].date;
    exp.current = globalPlans[currentPlan].plans;
    setData()
}

function prevPlan() {
    if (currentPlan === 0) {
        return;
    }
    currentPlan--
    let element = document.getElementById("plan" + currentPlan.toString())
    element.scrollIntoView({
        behavior: "smooth"
    })
    exp.date = globalPlans[currentPlan].date;
    exp.current = globalPlans[currentPlan].plans;
    setData()
}

function addNewDayConf(){
    addNewDay()
    confirmation(function(){}, addNewDay ,"Go back? Changes are not saved")
}

function addNewDay() {
    let doc = document.getElementById("newdaybox")
    let screen = document.getElementById("screen")
    let back = document.getElementById("back")
    if (doc.style.display === 'none') {
        doc.style.display = "flex"
        screen.style.display = "none"
        back.onclick=addNewDayConf
    }
    else {
        doc.style.display = "none"
        screen.style.display = "flex"
        back.onclick=myTrip
    }
}



function setData() {
    sessionStorage.setItem("currentPlan", JSON.stringify(exp.current))
    sessionStorage.setItem("currentPlanIndex", currentPlan.toString())
}

function pushPlanAux() {
    var s = exp.newDateD.toString() + "/" + exp.newDateM.toString() + "/" + exp.newDateY.toString()
    exp.newDateD = 1
    exp.newDateM = 1
    exp.newDateY = 2019
    globalPlans.push({
        date: s,
        plans: []
    })
    sessionStorage.setItem("plans", JSON.stringify(globalPlans))
}

function pushPlan() {
    addNewDay()
    confirmation(pushPlanAux, addNewDay, "Add this day?")
}

function deleteDayAux() {
    globalPlans.splice(currentPlan, 1)
    sessionStorage.setItem("plans", JSON.stringify(globalPlans))
    prevPlan()
    exp.plans = globalPlans
}

function deleteDay() {
    confirmation(deleteDayAux, function () { }, "Delete this day?")
}

function deleteActivity() {
    exp.current.splice(exp.activity, 1)
}

function editDay() {
    setData()
    document.location.href = "addPlan.html"
}

function goBack() {
    confirmation(travelPlan, editDay, "Go Back? Changes are not saved.")
}

function confirmChangesAux() {
    globalPlans[currentPlan].plans = exp.current
    sessionStorage.setItem("plans", JSON.stringify(globalPlans))
    sessionStorage.setItem("currentPlanIndex", "0")
    exp.plans = globalPlans
    travelPlan()
}

function confirmChanges() {
    confirmation(confirmChangesAux, travelPlan, "Confirm changes and go back?")
}

function editActivity() {
    var doc = document.getElementById("inputbox")
    doc.style.display === "none" ? doc.style.display = "inline" : doc.style.display = "none"
    document.getElementById("editButton").style.display = "inline"
    document.getElementById("addButton").style.display = "none"
}

function confirmEditActivity() {
    exp.current[exp.activity] = exp.edit
    editActivity()
}
function addActivity() {
    var doc = document.getElementById("inputbox")
    doc.style.display === "none" ? doc.style.display = "inline" : doc.style.display = "none"
    document.getElementById("editButton").style.display = "none"
    document.getElementById("addButton").style.display = "inline"
}

function confirmAddActivity() {
    exp.current.push(exp.edit)
    addActivity()
}

function changeDay(n) {
    var m31 = [1, 3, 5, 7, 8, 10, 12]
    if (n > 0) {
        if (m31.indexOf(exp.newDateM) != -1) {
            exp.newDateD === 31 ? exp.newDateD = 31 : exp.newDateD++
        }
        else if (exp.newDateM === 2) {
            exp.newDateD === 28 ? exp.newDateD = 28 : exp.newDateD++
        }
        else {
            exp.newDateD === 30 ? exp.newDateD = 30 : exp.newDateD++
        }
    }
    else {
        exp.newDateD === 0 ? exp.newDateD = 0 : exp.newDateD--
    }
}

function changeMonth(n) {
    if (n > 0) {
        if (exp.newDateM !== 12) {
            exp.newDateM++
        }
    }
    else {
        if (exp.newDateM !== 0) {
            exp.newDateM--
        }
    }
}

function changeYear(n) {
    exp.newDateY += n
}