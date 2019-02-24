function toggleVisible(id) {
    let style;
    let element = document.getElementById(id) 
    element.style.visibility == "collapse"? style = "visible" : style = "collapse"
    element.style.visibility = style
}