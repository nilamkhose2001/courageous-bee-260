let cartDataFromLS = JSON.parse(localStorage.getItem("cart"));
console.log(cartDataFromLS);
display(cartDataFromLS);


function display() {
  TotalSum();
  cartDataFromLS.forEach(function (el, index) {
    totalPrice = Number(el.price);

    let div = document.createElement("div");
    div.setAttribute("class", "box");

    let image = document.createElement("img");
    image.setAttribute("src", el.image);

    let name = document.createElement("p");
    name.innerText = el.product_name;

    let price = document.createElement("p");
    price.innerText = `₹${totalPrice}.00`;

    div.append(image, name, price);

    document.querySelector("#CheckOutProd").append(div);
  });

  function TotalSum() {
    let total = cartDataFromLS.reduce(function (ac, ele) {
      return ac + ele.price;
    }, 0);
    document.querySelector("#toTal").textContent = ` ₹${total}.00 `;
  }


   // .............Promo Code Functionality............................

document.querySelector("#promo").addEventListener("click", promoFunction);

  
}

function promoFunction() {
  document.querySelector("#toTal").innerHTML = "";
  let PromoCode = document.querySelector(".Promo").value;
  if (PromoCode === "fab30") {
      totalPrice -= (totalPrice / 100) * 30;
      alert("Promocode Applied Successfully 🎉")
      document.querySelector("#toTal").append( `₹${totalPrice.toFixed(2)}` + " INR");
      document.querySelector("#TotalAmt").append( `₹${totalPrice.toFixed(2)}` + " INR");
      
  } else {
      alert("Invalid Promocode")
      document.querySelector("#toTal").append(totalPrice + " INR");
  }
}

function displayData(){
    let userData = JSON.parse(localStorage.getItem('userDetails')) || [];
    document.querySelector("#userDataLS").innerHTML = null;


    userData.forEach(function(el){
        

        let phone = document.createElement("p")
        phone.innerText = `Contact : ${el.phone}`;
        let address = document.createElement("p")
        address.innerText = `Ship To : ${el.address}`;
    


        
        document.querySelector("#userDataLS").append(phone,address);
    })
}

displayData();
