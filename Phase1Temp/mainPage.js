var arr = [];


function check() {
    var city = document.getElementById("city").value
    console.log(city);
    if (!arr.includes(city)) arr.push(city);
    console.log(arr);


}