import React, { useState } from 'react';

//Header component
const Header = ({ cart }) => { //add cart as a prop
  //calculate total value of cart
  const total = cart.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <header>
      <div className="company-name">Shopez</div>
      <div className="cart">
        <span className="cart-count">{cart.length} items</span>
        <span className="cart-total">${total.toFixed(2)}</span> {/*display total value of cart with 2 decimal places*/}
      </div>
      <a href={`https://wa.me/whatsappphonenumber?text=Olá estou comprando pela Simple Store BR.%0A`} className="whatsapp-message">Custom WhatsApp Message</a> {/*fix WhatsApp message link*/}
    </header>
  );
};

//Product list component
const ProductList = ({ addToCart }) => { //add addToCart as a prop
  const products = [
    { name: 'Product 1', price: 10.99, size: 'M', image: 'product1.jpg' },
    { name: 'Product 2', price: 19.99, size: 'PP', image: 'product2.jpg' },
    { name: 'Product 3', price: 24.99, size: 'P', image: 'product3.jpg' },
    { name: 'Product 4', price: 14.99, size: 'G', image: 'product4.jpg' },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product" key={product.name}>
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h3>{product.name}</h3>
            <span className="product-price">${product.price.toFixed(2)}</span> {/*display product price with 2 decimal places*/}
            <span className="product-size">{product.size}</span>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

//Cart list component
const CartList = ({ cart }) => {
  //calculate total value of cart
  const total = cart.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <div className="cart-list">
      {cart.map((product) => (
        <div className="cart-item" key={product.name}>
          <h3>{product.name}</h3>
          <span className="product-price">${product.price.toFixed(2)}</span> {/*display product price with 2 decimal places*/}
          <span className="product-quantity">{/*quantity of product*/}</span>
        </div>
      ))}
      <div className="cart-total">${total.toFixed(2)}</div> {/*display total value of cart with 2 decimal places*/}
    </div>
  );
};

//Footer component
const Footer = ({ cart }) => {
  //create WhatsApp message with list of cart items and total value
  const cartItems = cart.map((item) => `${item.name} - $${item.price.toFixed(2)}`).join('%0A');
  const message = `Olá estou comprando pela Shopez.%0A${cartItems}%0AValor total: $${cart.reduce((acc, cur) => acc + cur.price, 0).toFixed(2)}`;

  return (
    <footer>
      <a href={`https://wa.me/whatsappphonenumber?text=${message}`} className="whatsapp-message">Custom WhatsApp Message</a> {/*fix WhatsApp message link*/}
      <div className="cart-list">
        {cart.map((product) => (
          <div className="cart-item" key={product.name}>
            <h3>{product.name}</h3>
            <span className="product-price">${product.price.toFixed(2)}</span> {/*display product price with 2 decimal places*/}
            <span className="product-quantity">{/*quantity of product*/}</span>
          </div>
        ))}
        <div className="cart-total">${cart.reduce((acc, cur) => acc + cur.price, 0).toFixed(2)}</div> {/*display total value of cart with 2 decimal places*/}
      </div>
    </footer>
  );
};

//Main component
const App = () => {
const [cart, setCart] = useState([]);

const addToCart = (product) => {
setCart([...cart, product]);
};

return (
<div>
<Header cart={cart} />
<ProductList addToCart={addToCart} />
<CartList cart={cart} />
<Footer cart={cart} />
</div>
);
};

export default App;