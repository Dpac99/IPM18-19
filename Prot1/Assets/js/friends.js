var exp = new Vue({
    el: "#friends",
    data:{
        friends: [],
        newFriend: ""
    },
    methods:{
        deleteFriend: function(name){
            function findName(s){
                return s === name
            }
            let i = friends.findIndex(findName)
            console.log(friends[i])
            friends.splice(i,1)
            localStorage.setItem("friends", JSON.stringify(friends))
            location.reload()
        }
    }
})

let friends = JSON.parse(localStorage.getItem("friends"))

function init(){
    for (let i=0; i<friends.length; i++){
        exp.friends.push(friends[i])
    }
}

init()

function addFriend(){
    friends.push(exp.newFriend)
    exp.newFriend=""
    localStorage.setItem("friends", JSON.stringify(friends))
    showSpeech()
    location.reload()
}