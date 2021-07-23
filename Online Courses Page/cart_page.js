var data_cart = document.getElementById("cart_values");
var num = 0;
var price = 0;

function appendCart(el) {
    var div = document.createElement('div');
    var divname = document.createElement('div');
    divname.setAttribute("Id" ,"divName")
    var divprice = document.createElement('div');
    divname.innerHTML = `${el.name}    `;
    divxprice = document.createElement("div")
    divxprice.innerHTML = `₹${el.xprice}`
    divprice.innerHTML =  `₹${el.price}`;
    var btn = document.createElement("button");
    btn.innerHTML = 'X';
    div.append(btn, divname, divxprice,divprice);
    data_cart.append(div);
    btn.addEventListener('click', function () {
        removeFromCart(el);
    });
}

function showCart() {
    let data = JSON.parse(localStorage.getItem("cart"));
    data_cart.innerHTML = null;
    num = 0;
    price = 0;
    data.forEach(function (el) {
        num++;
        price = price + Number(el.price);
        appendCart(el);
    });
    netContent();

}
showCart();

function netContent() {
    var divNet = document.getElementById("rate");
    divNet.innerHTML = null;
    div1 = document.createElement('div');
    div2 = document.getElementById('cartNum');
    div1.innerHTML = `₹${price}`;
    div2.innerHTML = `${num}`;
    divNet.append(div1);
    
    
    // var shopIcon = document.getElementById("shopCart")
    // shopIcon.append(div2)
    
}

var pr = document.getElementById("total");
pr.innerHTML = `₹ ${price}`;

function ApplyPromo() {
    const promo = document.getElementById("couponcode").value;
    if (promo == "masai30") {
        price = Math.floor(price * .7);
    }
    pr.innerHTML = `₹ ${price}`;

}

function checkOut() {
    window.location.href = 'success.html';
}

function removeFromCart(obj) {
    let data = JSON.parse(localStorage.getItem("cart"));
    var pos = data.map(function (e) {
        return e.name;
    }).indexOf(`${obj.name}`);
    data.splice(pos, 1);
    localStorage.setItem('cart', JSON.stringify(data));
    showCart();
}
function empty_cart(){
    localStorage.clear()
    showCart();
}