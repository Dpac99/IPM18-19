var name = sessionStorage.getItem("name")
var bloodType = sessionStorage.getItem("bloodType")
var healthProblems = sessionStorage.getItem("healthProblems").split(",")
var medicines = sessionStorage.getItem("medicines").split(",")
var contacts = JSON.parse(sessionStorage.getItem("emergencyContacts"))
var birthday = sessionStorage.getItem("birthday")
var back = sessionStorage.getItem("medicalBack")

if(healthProblems[0] === ""){
    healthProblems = ["-"]
}

if(medicines[0] === ""){
    medicines = ["-"]
}

if(contacts[0] === ""){
    contacts=["-"]
}

var exp = new Vue({
    el : "#wrapper",
    data:{
        name: name,
        bloodType: bloodType,
        birthday: birthday,
        healthProblems: healthProblems,
        medicines: medicines,
        contacts: contacts,
    },
    methods:{
        back: function(){
            document.location.href = back.substring(back.lastIndexOf("/") + 1)
        }
    }
})