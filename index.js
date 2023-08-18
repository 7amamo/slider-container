
let curentslide = 0 ; 

let indicator = document.querySelector(".indicator")
let slidenumber = document.getElementById("slide-number")
let next = document.getElementById("next")
let previous = document.getElementById("prev")


let arrayofimg = Array.from(document.querySelectorAll(".slider-container img"))
let numberofimg = arrayofimg.length;
console.log(numberofimg)

let ul = document.createElement("ul")
ul.className = "ul"
for(let i = 1 ; i<= numberofimg; i++){
    let li = document.createElement("li")
    li.setAttribute("data-index",i)
    let textofli = document.createTextNode(i)
    li.appendChild(textofli)
    ul.appendChild(li)
    indicator.appendChild(ul)
}

let arrayofli = Array.from(document.querySelectorAll(".ul li"))

for(let i = 0 ; i <arrayofli.length; i++){
    arrayofli[i].onclick = function(){
        curentslide= arrayofli[i].getAttribute('data-index') - 1
        checker()
    }
}


function checker(){
slidenumber.innerHTML = `slide#${curentslide + 1} of ${numberofimg}`

function removeactiveclass(){
    arrayofimg.forEach(function(img){
        img.classList.remove("active")
    })

    arrayofli.forEach(function(li){
        li.classList.remove("active")
    })
}
removeactiveclass()

arrayofimg[curentslide].classList.add("active")
arrayofli[curentslide].classList.add("active")

if(curentslide===0){
    previous.classList.add("disabled")
} else{
    previous.classList.remove("disabled")
}
if(curentslide=== (numberofimg - 1 )){
    next.classList.add("disabled")
} else{
    next.classList.remove("disabled")
}


}
checker()

function nextslide() {
    if (next.classList.contains("disabled")){
        return false
    } else{
        curentslide++
        checker()
    }

}
function previousslide () {
    if(previous.classList.contains("disabled")){
        return false
    } else{
        curentslide--
        checker()
    }

}

next.onclick = nextslide 
previous.onclick = previousslide 