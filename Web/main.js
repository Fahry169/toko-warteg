const searchBox = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    searchBox.classList.toggle('active');
}

const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-icon').onclick = () => {
    shoppingCart.classList.toggle('active');
}
