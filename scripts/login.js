var form = document.querySelector(".loginform");

var arr = JSON.parse(localStorage.getItem("user"))||[];

import navbar from "../components/navport.js"

document.querySelector("#navbar").innerHTML = navbar();

let cartcount=JSON.parse(localStorage.getItem("cart")) || []

console.log(cartcount.length)

let count=document.querySelector("#count")
count.innerText= cartcount.length

import footer from "../components/footer.js"

document.querySelector(".footer").innerHTML = footer();

let logindata = () => 
{
    event.preventDefault();
    var useremail = form.email.value;
    var userpassword = form.password.value;
    var flag ;
    for(var i = 0 ;i<arr.length;i++ )
    {
        if(arr[i].email == useremail&&arr[i].password == userpassword)
        {
            flag = true;
        }
    }
    if(flag == true)
    {
        alert("Login Success")
        window.location.href = "index.html"
    }
    else
    {
        alert("Invalid email/password")
    }

    let full=document.querySelectorAll("input")
    {
        full.forEach(function(element){
             element.value=null;
        })
    }
}
document.querySelector("#signin").addEventListener("click",logindata)

let redirect = ()=>
{
    window.location.href = "signup.html"
}

document.querySelector("#signup").addEventListener("click",redirect)