import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//Header component
const Header = ({ cart }) => { //add cart as a prop
  //calculate total value of cart
  const total = cart.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <header className="bg-dark text-white">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="company-name h3 mb-0">Shopez</div>
        <div className="cart text-end">
          <span className="cart-count me-3">{cart.length} items</span>
          <span className="cart-total">${total.toFixed(2)}</span> {/*display total value of cart with 2 decimal places*/}
        </div>
      </div>
      <a href={`https://wa.me/+551199999999?text=Olá estou comprando pela Simple Store BR.%0A`} className="whatsapp-message d-flex justify-content-end pe-3">Custom WhatsApp Message</a> {/*fix WhatsApp message link*/}
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
    <div className="container my-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-6 col-lg-4 mb-4" key={product.name}>
            <div className="card h-100">
              <img src={product.image} alt={product.name} className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title">{product.name}</h3>
                <span className="product-price h5">${product.price.toFixed(2)}</span> {/*display product price with 2 decimal places*/}
                <span className="product-size mb-3">{product.size}</span>
                <button className="btn btn-primary mt-auto" onClick={() => addToCart(product)}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
//Cart list component
const CartList = ({ cart }) => {
  //calculate total value of cart
  const total = cart.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <div className="cart-list container my-4">
      {cart.map((product) => (
        <div className="cart-item row py-2" key={product.name}>
          <div className="col">{product.name}</div>
          <div className="col-auto">${product.price.toFixed(2)}</div> {/*display product price with 2 decimal places*/}
        </div>
      ))}
      <div className="cart-total row pt-3">
        <div className="col">Total:</div>
        <div className="col-auto">${total.toFixed(2)}</div> {/*display total value of cart with 2 decimal places*/}
      </div>
    </div>
  );
};

//Footer component
const Footer = ({ cart }) => {
  //create WhatsApp message with list of cart items and total value
  const cartItems = cart.map((item) => `${item.name} - $${item.price.toFixed(2)}`).join('%0A');
  const message = `Olá estou comprando pela Shopez.%0A${cartItems}%0AValor total: $${cart.reduce((acc, cur) => acc + cur.price, 0).toFixed(2)}`;

  return (
    <footer className="bg-light pt-4">
      <div className="container">
        <a href={`https://wa.me/whatsappphonenumber?text=${message}`} className="whatsapp-message d-flex justify-content-end">Custom WhatsApp Message</a> {/*fix WhatsApp message link*/}
        <CartList cart={cart} />
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
      <Footer cart={cart} />
    </div>
  );
};

export default App;