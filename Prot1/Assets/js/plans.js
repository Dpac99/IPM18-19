var plans = [
    {
        date: "05/03/2019",
        plans:[
            {
                content: "Breakfast",
                time: "08:30"
            },
            {
                content: "Lunch",
                time: "13:00"
            },
            {
                content: "Museum",
                time: "14:30"
            },
            {
                content: "Dinner",
                time: "21:00"
            },
            {
                content: "Disco",
                time: "01:00"
            },
            {
                content: "Breakfast",
                time: "08:30"
            },
            {
                content: "Lunch",
                time: "13:00"
            },
            {
                content: "Museum",
                time: "14:30"
            },
            {
                content: "Dinner",
                time: "21:00"
            },
            {
                content: "Disco",
                time: "01:00"
            }
        ]
    },
    {
        date: "06/03/2019",
        plans:[
            {
                content: "Breakfast",
                time: "08:30"
            },
            {
                content: "Lunch",
                time: "13:00"
            },
            {
                content: "Museum",
                time: "14:30"
            },
            {
                content: "Dinner",
                time: "21:00"
            },
            {
                content: "Disco",
                time: "01:00"
            }
        ]
    },
    {
        date: "07/03/2019",
        plans:[
            {
                content: "Breakfast",
                time: "08:30"
            },
            {
                content: "Lunch",
                time: "13:00"
            },
            {
                content: "Museum",
                time: "14:30"
            },
            {
                content: "Dinner",
                time: "21:00"
            },
            {
                content: "Disco",
                time: "01:00"
            }
        ]
    }
]

currentPlan = 0;

var exp = new Vue({
    el: "#plans",
    data:{
        plans: [],
        date: ""
    }
})

function init(){
    for( var i=0; i<plans.length; i++){
        exp.plans.push(plans[i].plans)
        exp.date = plans[currentPlan].date
    }
}

init()

function nextPlan(){
    if(currentPlan===plans.length - 1){
        return;
    }
    currentPlan++
    let element = document.getElementById("plan" + currentPlan.toString())
    element.scrollIntoView({
        behavior: "smooth"
    })

    exp.date=plans[currentPlan].date;
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
    exp.date=plans[currentPlan].date;
}