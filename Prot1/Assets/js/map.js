var map = []
for(i=0; i < 1058; i+=2){
    var line = []
    for(j=0; j<1676; j+=2){
        line.push(j)
    }
    map.push(line)
}

sessionStorage.setItem("map", map)

document.getElementById("target").style.left = map[0][300]
document.getElementById("target").style.top = map[300][0]
