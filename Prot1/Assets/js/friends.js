var friends = [
    "Tiago Le",
    "Diogo Pacheco",
    "Andreia Pereira",
    "Alfredo Santa Cona",
    "Pedro Lamego",
    "Joao Silva",
]

var exp = new Vue({
    el: "#friends",
    data:{
        friends: []
    }
})

function init(){
    for (let i=0; i<friends.length; i++){
        exp.friends.push(friends[i])
    }
}

init()