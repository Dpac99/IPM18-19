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
        }
    }
})

function init(){
    for( var i=0; i<globalPlans.length; i++){
        exp.events.push(globalPlans[i].plans)
        exp.date = globalPlans[currentPlan].date
    }
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
}

function addNewDay(){
    let doc = document.getElementById("newdaybox")
    doc.style.display === 'none'? doc.style.display = "inline" : doc.style.display = "none"
}

function pushPlan(){
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