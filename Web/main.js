const searchBox = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    searchBox.classList.toggle('active');
}

const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-icon').onclick = () => {
    shoppingCart.classList.toggle('active');
}

document.getElementById('cart-icon').addEventListener('click', function(event) {
    event.preventDefault();
    // Add your code here to show the shopping cart
  });

document.getElementById('search-icon').addEventListener('click', function(event) {
    event.preventDefault();
    // Add your code here to show the shopping cart
  });
