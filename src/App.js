import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//Header component
const Header = ({ cart }) => { //add cart as a prop
  //calculate total value of cart
  const total = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0); //change reduce to include quantity in total calculation

  return (
    <header className="bg-dark text-white">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="company-name h3 mb-0">Shopez</div>
        <div className="cart text-end">
          <span className="cart-count me-3">{cart.length} items</span>
          <span className="cart-total">${total.toFixed(2)}</span> {/*display total value of cart with 2 decimal places*/}
        </div>
      </div>
    </header>
  );
};

//Product list component
const ProductList = ({ addToCart }) => { //add addToCart as a prop
  const products = [
    { name: 'Product 1', price: 10.99, size: 'M', image: 'https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-macacao-fechado-manga-comprida-tumblr--p-1656093927804.jpeg' },
    { name: 'Product 2', price: 19.99, size: 'PP', image: 'https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-macacao-fechado-manga-comprida-tumblr--p-1673444046549.png' },
    { name: 'Product 3', price: 24.99, size: 'P', image: 'https://17741.cdn.simplo7.net/static/17741/sku/saia-saia-argola-sexy--p-1663959870905.jpeg' },
    { name: 'Product 4', price: 14.99, size: 'G', image: 'https://17741.cdn.simplo7.net/static/17741/sku/biquinis-biquini-fio-com-argola-1676509827180.jpeg' },
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
                <div className="form-group">
                  <label htmlFor="size">Size</label>
                  <select className="form-control" id="size" onChange={(e) => addToCart({ ...product, size: e.target.value })}>
                    <option value="PP">PP</option>
                    <option value="P">P</option>
                    <option value="M">M</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity</label>
                  <input type="number" className="form-control" id="quantity" min="1" onChange={(e) => addToCart({ ...product, quantity: parseInt(e.target.value) })} /> {/*add quantity input field*/}
                </div>
                <button className="btn btn-primary" onClick={() => addToCart({ ...product, quantity: 1 })}>Add to cart</button> {/*add button to add item to cart*/}
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
  const total = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0); //change reduce to include quantity in total calculation

  return (
    <div className="cart-list container my-4">
      {cart.map((product) => (
        <div className="cart-item row py-2" key={product.name}>
          <div className="col">{product.name} - {product.size} - {product.quantity}</div>
          <div className="col-auto">${(product.price * product.quantity).toFixed(2)}</div> {/*display product price with 2 decimal places*/}
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
  const cartItems = cart.map((item) => `${item.name} - ${item.size} - $${item.price.toFixed(2)} - ${item.quantity} unidades`).join('%0A');
  const message = `Seu pedido foi:%0A${cartItems}%0AO valor total é: $${cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}`; //change reduce to include quantity in total calculation

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
    const existingProduct = cart.find((item) => item.name === product.name && item.size === product.size); //find existing product

    if (existingProduct) {
      setCart(cart.map((item) => (item === existingProduct ? { ...item, quantity: item.quantity + product.quantity } : item))); //update existing product quantity
    } else {
      setCart([...cart, product]);
    }
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