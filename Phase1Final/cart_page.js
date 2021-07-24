var data_cart = document.getElementById("cart_values");
var num = 0;
var price = 0;
var amt = document.getElementById("amount")

function appendCart(el) {
    var div = document.createElement('div');
    var divname = document.createElement('div');
    divname.setAttribute("Id", "divName")
    var divprice = document.createElement('div');
    divname.innerHTML = `${el.name}    `;
    divxprice = document.createElement("div")
    divxprice.innerHTML = `₹${el.xprice}`
    divprice.innerHTML = `₹${el.price}`;
    var btn = document.createElement("button");
    btn.innerHTML = 'X';
    div.append(btn, divname, divxprice, divprice);
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
amt.innerHTML = pr.innerHTML;
function ApplyPromo() {
    const promo = document.getElementById("couponcode").value;
    if (promo == "masai30") {
        price = Math.floor(price * .7);
    }
    pr.innerHTML = `₹ ${price}`;

}

function checkOut() {
    var container = document.getElementById("container");
    console.log(1);
    container.style.visibility = 'visible';
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
function empty_cart() {
    localStorage.clear()
    showCart();
}

var content = document.getElementById('content');
var red = document.getElementById('red');
var paymentBox = document.getElementById('paymentBox');
var total = document.getElementById("total");


function card() {
    console.log("----444---");
    content.innerHTML = null;
    content.append(red);
    var card = document.createElement('div');
    card.setAttribute('id', 'credit_card')
    card.innerHTML = `<div class = 'card'>
    <div class = 'div1'>
    <label for='cardNumber'>Card Number</label><br>
    <input type="text" id="cardNumber" placeholder="Card Number">
    </div>
    <div class = 'div2'>
    <label for = 'expiry_date' style="width:100px;">Expiry</label><br>
    <input type="text" id="expiry_date" placeholder="Expiry Date" style="width:60px;">
    </div>
    <div class = 'div3'>
    <label for = 'card_name'>Card Name</label><br>
    <input type="text" id="card_name" placeholder="Card Name">
    </div>
    <div class = 'div4'>
    <label for = 'cvv'>Cvv</label><br>
    <input type="text" id="cvv" placeholder="Cvv" style="width:60px;">
    </div>

    </div>`;
    content.append(card);

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('class', 'checkbox')
    content.append(checkbox);
    let rem = document.createElement('div');
    rem.setAttribute('class', 'remember')
    rem.innerHTML = 'Remember Card';
    content.append(rem);
    let checkout = document.createElement('button');
    checkout.setAttribute('id', 'checkout');
    checkout.innerHTML = pr.innerHTML;
    console.log("Hi", pr.innerHTML);
    paymentBox.append(checkout);
    content.style.overflow = 'hidden';

}
