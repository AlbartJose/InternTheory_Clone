function itstark(event){
    event.preventDefault()
    let cart = {
        name: "IT Starter Pack (4 Courses)",
        xprice: 32999,
        price: 15999
    }
    let arr;
    arr = localStorage.getItem("cart");
    
    if (arr == null) {
        arr = [];   
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    var itAdd = document.getElementById("itAdd1")
    itAdd.textContent = "Checkout"
    const nam = cart.name;
    const found = arr.some(el => el.name === nam);
    if (found) {
        return;
    }
    arr.push(cart);
    localStorage.setItem("cart", JSON.stringify(arr));
}
function finance(event){
    event.preventDefault()
    let cart = {
        name:"Finance Starter Pack",
        xprice: 32999,
        price:11999
    }

    let arr;
    arr = localStorage.getItem("cart");

    if (arr == null) {
        arr = [];   
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    var itAdd = document.getElementById("itAdd2")
    itAdd.textContent = "CHECKOUT"
    const nam = cart.name;
    const found = arr.some(el => el.name === nam);
    if (found) {
        return;
    }
    arr.push(cart);
    
    localStorage.setItem("cart", JSON.stringify(arr));
}
function digital(event){
    event.preventDefault()
    let cart = {
        name:"Digital Marketing Course",
        xprice: 32999,
        price:5999
    }

    let arr;
    arr = localStorage.getItem("cart");

    if (arr == null) {
        arr = [];   
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    var itAdd = document.getElementById("itAdd3")
    itAdd.textContent = "CHECKOUT"
    const nam = cart.name;
    const found = arr.some(el => el.name === nam);
    if (found) {
        return;
    }
    arr.push(cart);
    
    localStorage.setItem("cart", JSON.stringify(arr));
}
function stock(event){
    event.preventDefault()

    let cart = {
        name:"Stock Market Course",
        xprice: 32999,
        price:15999
    }

    let arr;
    arr = localStorage.getItem("cart");

    if (arr == null) {
        arr = [];   
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    var itAdd = document.getElementById("itAdd4")
    itAdd.textContent = "CHECKOUT"
    const nam = cart.name;
    const found = arr.some(el => el.name === nam);
    if (found) {
        return;
    }
    arr.push(cart);
    
    localStorage.setItem("cart", JSON.stringify(arr));
}
function data(event){
    event.preventDefault()
    let cart = {
        name:"Data Analytics",
        xprice: 32999,
        price:5999
    }

    let arr;
    arr = localStorage.getItem("cart");
    
    if (arr == null) {
        arr = [];   
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    var itAdd = document.getElementById("itAdd5")
    itAdd.textContent = "CHECKOUT"
    const nam = cart.name;
    const found = arr.some(el => el.name === nam);
    if (found) {
        return;
    }
    arr.push(cart);
    
    localStorage.setItem("cart", JSON.stringify(arr));
}
function web(event){
    event.preventDefault()
    let cart = {
        name:"Web Development Course",
        xprice: 32999,
        price:3999
    }

    let arr;
    arr = localStorage.getItem("cart");
    
    if (arr == null) {
        arr = [];   
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    var itAdd = document.getElementById("itAdd6")
    itAdd.textContent = "CHECKOUT"
    const nam = cart.name;
    const found = arr.some(el => el.name === nam);
    if (found) {
        return;
    }
    arr.push(cart);
    
    localStorage.setItem("cart", JSON.stringify(arr));
}
function android(event){
    event.preventDefault()
    let cart = {
        name:"Android App Development",
        xprice: 32999,
        price:15999
    }

    let arr;
    arr = localStorage.getItem("cart");
    
    if (arr == null) {
        arr = [];   
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    var itAdd = document.getElementById("itAdd7")
    itAdd.textContent = "CHECKOUT"
    const nam = cart.name;
    const found = arr.some(el => el.name === nam);
    if (found) {
        return;
    }
    arr.push(cart);
    
    localStorage.setItem("cart", JSON.stringify(arr));
}
function itstart2(event){
    event.preventDefault()
    let cart = {
        name:"IT Starter Pack-2 (2 Courses)",
        xprice: 32999,
        price:15999
    }

    let arr;
    arr = localStorage.getItem("cart");

    if (arr == null) {
        arr = [];   
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    var itAdd = document.getElementById("itAdd8")
    itAdd.textContent = "CHECKOUT"
    const nam = cart.name;
    const found = arr.some(el => el.name === nam);
    if (found) {
        return;
    }
    arr.push(cart);
    
    localStorage.setItem("cart", JSON.stringify(arr));
}
function advanced(event){
    event.preventDefault()
    let cart = {
        name:"Advanced Excel Course",
        xprice: 32999,
        price:15999
    }

    let arr;
    arr = localStorage.getItem("cart");

    if (arr == null) {
        arr = [];   
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    var itAdd = document.getElementById("itAdd9")
    itAdd.textContent = "CHECKOUT"
    const nam = cart.name;
    const found = arr.some(el => el.name === nam);
    if (found) {
        return;
    }
    arr.push(cart);
    
    localStorage.setItem("cart", JSON.stringify(arr));
}
function rpro(event){
    event.preventDefault()
    let cart = {
        name:"R Programming Course",
        xprice: 32999,
        price:15999
    }

    let arr;
    arr = localStorage.getItem("cart");

    if (arr == null) {
        arr = [];   
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    var itAdd = document.getElementById("itAdd10")
    itAdd.textContent = "CHECKOUT"
    const nam = cart.name;
    const found = arr.some(el => el.name === nam);
    if (found) {
        return;
    }
    arr.push(cart);
    
    localStorage.setItem("cart", JSON.stringify(arr));
}
let icon = document.getElementById("shopCart")
icon.addEventListener("click", function(){
    window.location.href ="cart_page.html"
})
