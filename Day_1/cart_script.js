let cartDataFromLS = JSON.parse(localStorage.getItem("cart"));
display(cartDataFromLS);
TotalSum();
function display() {
    

  cartDataFromLS.forEach(function (el, index) {
      totalPrice = Number(el.price);

    let tr = document.createElement("tr");

    let tdImg = document.createElement("td");
    let image = document.createElement("img");
    image.setAttribute("src", el.img);

    let name = document.createElement("td");
    name.innerText = el.name;

      let tdQty = document.createElement("td");
    let qty = document.createElement("input");
    qty.setAttribute("type", "number");
    qty.value = 1;
    

    let price = document.createElement("td");
    price.innerText = `Rs. ${Number(qty.value) * totalPrice}.00`;

    let dlt = document.createElement("td");
    dlt.innerText = "✕";
    dlt.style.cursor = "pointer";
    dlt.addEventListener("click", function () {
      deleteData(index);
    });

      
      
  
      
    tr.append(tdImg, name, tdQty, price, dlt);
      tdImg.append(image)
      tdQty.append(qty);
    document.querySelector("tbody").append(tr);
  });

  function deleteData(index) {
    cartDataFromLS.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cartDataFromLS));
    window.location.reload();
  }
}
function TotalSum()
{
   let total= cartDataFromLS.reduce(function(ac,ele){
        return ac+ele.price;
    },0)
    document.querySelector("#tPrice").textContent=`Total Price: ₹${total}.00 ` ;
}
