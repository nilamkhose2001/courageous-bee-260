import navbar from "../components/navport.js"

document.querySelector("#navbar").innerHTML = navbar();



let cart=JSON.parse(localStorage.getItem("basket")) || []

console.log(cart.length)

let count=document.querySelector("#count")
count.innerText= cart.length