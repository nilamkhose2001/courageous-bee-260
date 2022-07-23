import navbar from "../components/navport.js"

document.querySelector("#navbar").innerHTML = navbar();

let cartcount=JSON.parse(localStorage.getItem("cart")) || []

console.log(cartcount.length)

let count=document.querySelector("#count")
count.innerText= cartcount.length


import footer from "../components/footer.js"

document.querySelector(".footer").innerHTML = footer();


let product = [
    {
        id: 1,
        image: 'https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-1_914eb815-9c7e-4ca1-ad10-39708a1afb45_2048x.png?v=1656613248',
        product_name: 'BEAUTY BUNDLE 1',
        price: 599.00
    },

    {
        id: 2, 
        image: 'https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-02_a0530e7f-1a15-4464-9352-b976da7c39ec_2048x.png?v=1656613307',
        product_name: 'BEAUTY BUNDLE 2',
        price: 599.00
    },

    {
        id: 3,
        image: 'https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-03_d1a367d9-0873-4e30-b3a6-434ad508a503_2048x.png?v=1656613363',
        product_name: 'BEAUTY BUNDLE 3',
        price: 599.00
    },

    
    
];

document.querySelector("#mainSlider").addEventListener("click",()=>{
    localStorage.setItem("product",JSON.stringify(product[0]))
            window.location.href="product.html"
})

let cont=document.querySelector("#product")

let append=(data)=>{
    product.forEach((element)=>{
        let {image,product_name,price}=element
        let Div=document.createElement("div")
        Div.style.cursor = "pointer";
        let img=document.createElement("img")
        img.src=image
        let t=document.createElement("h3")
        t.innerText=product_name
        img.addEventListener("click",()=>{
            localStorage.setItem("product",JSON.stringify(element))
            window.location.href="product.html"
        })
        Div.append(img,t)
        cont.append(Div)
    })
}
append(product)
let cartData=JSON.parse(localStorage.getItem("cart")) || []
console.log(typeof cartData)
document.querySelector("#cartBtn").addEventListener("click",()=>{
    let flag=0
    cartData.forEach(({id})=>{
        if(id==product[0].id)
        {
            alert("product already in your cart")
            flag=1
        }
       
    })
    if(flag==0)
    {
        cartData.push(product[0])
        localStorage.setItem("cart",JSON.stringify(cartData))
        alert("product added successfuly")
        window.location.href="cart.html"
    }
   
   
})

let product_2 = [
    {
        id: 4,
        image: 'https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-2---Skincare-3.gif?v=1655088937',
        product_name: "Jun'22 The Make It Reign Fab Bag",
        price: 599.00
    },

    {
        id: 5,
        image: 'https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Skincare-2-With-BONUS.gif?v=1652238042',
        product_name: "May'22 The AweSummer May Fab Bag",
        price: 599.00
    },

    {
        id: 6,
        image: 'https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3_1728264b-2e0f-4314-9a3c-0fde458d72a7.png?v=1649483317',
        product_name: "Apr'22 The Sassy Spring Fab Bag",
        price: 599.00
    },

    {
        id: 7,
        image: 'https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3.png?v=1646971494',
        product_name: "Mar'22 The Empow-HER Fab Bag",
        price: 599.00
    },

];



let content = document.getElementById("more");

let append2=(a)=>{
    product_2.forEach((e)=>{
        let {image,product_name,price} = e;
        let div = document.createElement("div")
        div.style.cursor = "pointer"
        let img = document.createElement("img")
        img.src = image;
        img.style.height = "165px"
        let p = document.createElement("p")
        p.innerText = product_name
        let dam = document.createElement(`p`);
        dam.innerText = `from Rs ${price}`;
        dam.style.fontStyle = "italic";
        dam.style.opacity = "0.4"
        dam.style.fontFamily = "poppins"
        div.append(img, p, dam)
        content.append(div)
        img.addEventListener(`click`,()=>{
            localStorage.setItem("product_li_2", JSON.stringify(e));
            window.location.href = "./product_list_2.html"
        })
        
    })
}

append2(product_2);

localStorage.setItem("product_list", JSON.stringify(product_2));





