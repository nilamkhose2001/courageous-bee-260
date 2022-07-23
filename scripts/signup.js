var form = document.querySelector(".signupform");

var arr = JSON.parse(localStorage.getItem("user"))||[];

import navbar from "../components/navport.js"

document.querySelector("#navbar").innerHTML = navbar();
let cartcount=JSON.parse(localStorage.getItem("cart")) || []

console.log(cartcount.length)

let count=document.querySelector("#count")
count.innerText= cartcount.length


import footer from "../components/footer.js"

document.querySelector(".footer").innerHTML = footer();


class Signupdata
{
    constructor(f,l,e,p)
    {
        this.fname = f;
        this.lname = l;
        this.email = e;
        this.password = p;
    }
}

let getdata = () =>
{
    event.preventDefault();
    var fname = form.fname.value;
    var lname = form.lname.value;
    var email = form.email.value;
    var password = form.password.value;

    var obj = new Signupdata(fname,lname,email,password)
    console.log(obj)
    if(obj.fname == ""||obj.lname == "null" ||obj.email == "" || obj.password == "")
    {
        alert("Fill complete details")
    }
    else{
    arr.push(obj);
    console.log(arr);
    localStorage.setItem("user",JSON.stringify(arr));
    let full=document.querySelectorAll("input")
    {
        full.forEach(function(element){
             element.value=null;
        })
    }
    alert("signup successful")
    window.location.href = "login.html"
    }

}
document.querySelector("#signup").addEventListener("click",getdata)


let redirect = ()=>
{
    window.location.href = "login.html"
}

document.querySelector("#signin").addEventListener("click",redirect);

