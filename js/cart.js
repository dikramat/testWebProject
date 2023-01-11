let cart = {};

$.getJSON('goods.json', (data) => {
    let goods = data;
    console.log(data);
    checkCart();
    showCart();

    function showCart() {
        let out = '';
        for(let i in cart) {
            out += '<button class="delete">Delete</button>';
            out += '<img src="'+ goods[i].image +'" width ="48">';
            out += goods[i].name;
            out += '<button class="minus">-</button>';
            out += cart[i];
            out += '<button class="plus">+</button>';
            out += cart[i]*goods[i].cost;
            out += '<br>';
        }
        $('#my-cart').html(out);
    } 

   
});

function checkCart() {
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}