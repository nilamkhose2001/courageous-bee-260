import navbar from "../components/navport.js"

document.querySelector("#navbar").innerHTML = navbar();



let cartcount=JSON.parse(localStorage.getItem("cart")) || []

console.log(cartcount.length)

let count=document.querySelector("#count")
count.innerText= cartcount.length