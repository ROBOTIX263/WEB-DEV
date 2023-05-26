let color = document.querySelector(".colorPicker")
let hexcode = document.getElementById('color-code')

color.addEventListener('input', colorgen)

function colorgen(){
    let mycolor = color.value;
    document.body.style.backgroundColor = mycolor
    hexcode.innerHTML = mycolor;
}
