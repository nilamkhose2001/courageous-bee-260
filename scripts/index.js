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



