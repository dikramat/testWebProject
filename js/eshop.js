let cart = {};
$('document').ready(()=>{
    loadGoods();
    checkCart();
    showMiniCart();
});

function loadGoods() {
    $.getJSON('goods.json', (data) => {
        let out = '';
        for(let i in data) {
            out += '<div class= "single-goods">';
            out += '<h3>' + data[i]['name'] + '</h3>';
            out += '<p> Price: ' + data[i]['cost'] + '</p>';
            out += '<img src= "'+data[i].image+'">';
            out += '<button class="add-to-cart" data-art='+i+'>Buy</button>'
            out += '</div>';
        }
        $('#goods').html(out);
        $('button.add-to-cart').on('click', addToCart);
    });
}

function addToCart() {
    const articul = $(this).attr('data-art');
    if(cart[articul] != undefined){
        cart[articul]++;
    }else {
    cart[articul] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    showMiniCart();
}

function checkCart() {
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function showMiniCart() {
    let out = '';
    for(let j in cart) {
        out += j + ' --- ' + cart[j] + '<br>';
    }
    out += '<br><a href="cart.html">Корзина</a>'
    $('#mini-cart').html(out);
}