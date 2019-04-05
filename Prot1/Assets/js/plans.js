let globalPlans = JSON.parse(localStorage.getItem("plans"))
let currentPlan = parseInt(localStorage.getItem("currentPlanIndex"))

exp = new Vue({
    el: "#plans",
    data: {
        events: [],
        date: "",
        newDate: "",
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
            confirmation(deleteActivity, function(){}, "Delete this activity?")
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

function addNewDay() {
    let doc = document.getElementById("newdaybox")
    doc.style.display === 'none' ? doc.style.display = "inline" : doc.style.display = "none"
}

function setData(){
    localStorage.setItem("currentPlan", JSON.stringify(exp.current))
    localStorage.setItem("currentPlanIndex", currentPlan.toString())
}

function pushPlanAux() {
    let d = new Date(exp.newDate)
    let s = buildDateNoHours(d)
    exp.newDate = ""
    globalPlans.push({
        date: s,
        plans: []
    })
    localStorage.setItem("plans", JSON.stringify(globalPlans))
    location.reload()
}

function pushPlan() {
    confirmation(pushPlanAux, addNewDay, "Add this day?")
}

function deleteDayAux() {
    globalPlans.splice(currentPlan, 1)
    localStorage.setItem("plans", JSON.stringify(globalPlans))
    prevPlan()
    exp.plans = globalPlans
}

function deleteDay() {
    confirmation(deleteDayAux, function (){}, "Delete this day?")
}

function deleteActivity() {
    exp.current.splice(exp.activity, 1)
}

function editDay() {
    setData()
    document.location.href="addPlan.html"
}

function goBack(){
    confirmation(travelPlan,editDay, "Go Back? Changes are not saved.")
}

function confirmChangesAux() {
    globalPlans[currentPlan].plans = exp.current
    localStorage.setItem("plans", JSON.stringify(globalPlans))
    localStorage.setItem("currentPlanIndex", "0")
    exp.plans = globalPlans
    travelPlan()
}

function confirmChanges() {
    confirmation(confirmChangesAux, travelPlan, "Confirm changes and go back?")
}

function editActivity() {
    var doc = document.getElementById("inputbox")
    doc.style.display === "none" ? doc.style.display = "inline" : doc.style.display = "none"
    document.getElementById("editButton").style.display="inline"
    document.getElementById("addButton").style.display="none"
}

function confirmEditActivity() {
    exp.current[exp.activity] = exp.edit
    editActivity()
}

function addActivity(){
    var doc = document.getElementById("inputbox")
    doc.style.display === "none" ? doc.style.display = "inline" : doc.style.display = "none"
    document.getElementById("editButton").style.display="none"
    document.getElementById("addButton").style.display="inline"
}

function confirmAddActivity(){
    exp.current.push(exp.edit)
    addActivity()
}