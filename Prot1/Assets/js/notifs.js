var notifsArr = JSON.parse(sessionStorage.getItem("notifs"))

var notifs = new Vue({
    el: "#notifs",
    data:{
        notifs: notifsArr,
    },
    methods:{
        selectNotification: function(id){
            for (i=0; i<notifsArr.length; i++){
                let n = notifsArr[i]
                if(n.id === id){
                    notifsArr.splice(i,1)
                    sessionStorage.setItem("notifs", JSON.stringify(notifsArr))
                    if(n.href === "protFuncional1-beta.html"){
                        document.location.href=n.href
                    }
                    else{
                        unlock(n.href)
                    }
                }
            }
        },
        deleteNotification: function(id){
            for(i=0; i<notifsArr.length; i++){
                if(notifsArr[i].id === id){
                    notifsArr.splice(i,1)
                    sessionStorage.setItem("notifs", JSON.stringify(notifsArr))
                    this.notifs = notifsArr
                }
            }
        }
    }
})