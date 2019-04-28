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
            friends.splice(i,1)
            sessionStorage.setItem("friends", JSON.stringify(friends))
            location.reload()
        }
    }
})

let friends = JSON.parse(sessionStorage.getItem("friends"))

function init(){
    for (let i=0; i<friends.length; i++){
        exp.friends.push(friends[i])
    }
}

init()

function addFriend(){
    friends.push(exp.newFriend)
    exp.newFriend=""
    sessionStorage.setItem("friends", JSON.stringify(friends))
    showSpeech()
    location.reload()
}