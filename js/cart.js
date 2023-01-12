let cart = {};

$.getJSON('goods.json', (data) => {
    let goods = data;
    console.log(data);
    checkCart();
    showCart();

    function showCart() {
        if($.isEmptyObject(cart)){
            let out = 'Корзина пуста. Добавте товар в корзину. <a href="index.html">Главная страница</a>';
            $('#my-cart').html(out);
        }
        else{
        let out = '';
            for(let i in cart) {
                out += '<button class="delete" data-atr="'+i+'">Delete</button>';
                out += '<img src="'+ goods[i].image +'" width ="48">';
                out += goods[i].name;
                out += '<button class="minus" data-atr="'+i+'">-</button>';
                out += cart[i];
                out += '<button class="plus" data-atr="'+i+'">+</button>';
                out += cart[i]*goods[i].cost;
                out += '<br>';
            }
            $('#my-cart').html(out);
            $('.plus').on('click', plusGoods);
            $('.minus').on('click', minusGoods);
            $('.delete').on('click', deleteGoods);
            
        }
    } 

    function plusGoods() {
        let articul = $(this).attr('data-atr');
        cart[articul]++;
        saveCartToLocalStorage();
        showCart();
    }
    function minusGoods() {
        let articul = $(this).attr('data-atr');
        if(cart[articul] > 1){
            cart[articul]--;
        }
        else {
            delete cart[articul];
        }
        saveCartToLocalStorage();
        showCart();
    }
    function deleteGoods() {
        let articul = $(this).attr('data-atr');
        delete cart[articul];
        saveCartToLocalStorage();
        showCart();
    }

   
});

function checkCart() {
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
