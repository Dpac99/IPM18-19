let globalPlans = JSON.parse(localStorage.getItem("plans"))
let currentPlan = 0;

var exp = new Vue({
    el: "#plans",
    data:{
        events: [],
        date: "",
        newDate:"",
        newEvent:{
            content: "",
            time:""
        },
        current: [],
        activity: null
    },
    methods:{
        deleteActivity: function(i){
            exp.activity = i
            confirmation(deleteActivity, editDay, "Delete this activity?")
        }
    }
})

function init(){
    for( var i=0; i<globalPlans.length; i++){
        exp.events.push(globalPlans[i].plans)
        exp.date = globalPlans[currentPlan].date
    }
    exp.current = globalPlans[currentPlan].plans
}

init()

function nextPlan(){
    if(currentPlan===globalPlans.length - 1){
        return;
    }
    currentPlan++
    let element = document.getElementById("plan" + currentPlan.toString())
    element.scrollIntoView({
        behavior: "smooth"
    })

    exp.date=globalPlans[currentPlan].date;
    exp.current = globalPlans[currentPlan].plans
}

function prevPlan(){
    if(currentPlan===0){
        return;
    }
    currentPlan--
    let element = document.getElementById("plan" + currentPlan.toString())
    element.scrollIntoView({
        behavior: "smooth"
    })
    exp.date=globalPlans[currentPlan].date;
    exp.current = globalPlans[currentPlan].plans
}

function addNewDay(){
    let doc = document.getElementById("newdaybox")
    doc.style.display === 'none'? doc.style.display = "inline" : doc.style.display = "none"
}

function pushPlanAux(){
    let d = new Date(exp.newDate)
    let s = buildDateNoHours(d)
    exp.newDate = ""
    globalPlans.push({
        date: s,
        plans:[]
    })
    localStorage.setItem("plans", JSON.stringify(globalPlans))
    location.reload()
}

function pushPlan(){
    confirmation(pushPlanAux, travelPlan, "Add this day?")
}

function deleteDayAux(){
    globalPlans.splice(currentPlan,1)
    localStorage.setItem("plans", JSON.stringify(globalPlans))
    prevPlan()
    exp.plans = globalPlans
}

function deleteDay(){
    confirmation(deleteDayAux,travelPlan, "Delete this day?")
}

function editDay(){
    document.location.href="addPlan.html"
}

function deleteActivity(){
    exp.current.splice(exp.activity, 1)
}

function goBack(){
    confirmation(travelPlan,editDay, "Go Back? Changes are not saved.")
}

function confirmChangesAux(){
    globalPlans[currentPlan].plans = exp.current
    localStorage.setItem("plans", JSON.stringify(globalPlans))
    exp.plans = globalPlans
    travelPlan()
}

function confirmChanges(){
    confirmation(confirmChangesAux, editDay, "Confirm changes and go back?")
}