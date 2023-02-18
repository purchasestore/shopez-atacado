import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';

//Header component
const Header = ({ cart, setShow }) => {
  //calculate total value of cart
  const total = cart.reduce((acc, cur) => {
    if (cur.quantity > 0) { //block the option of add in the cart list if input is zero or empty
      return acc + cur.price * cur.quantity;
    }
    return acc;
  }, 0);

  return (
    <header className="bg-dark text-white">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="company-name h3 mb-0">Shopez</div>
        <div className="cart text-end">
          <span className="cart-count me-3">{cart.length} items</span>
          <span className="cart-total">${total.toFixed(2)}</span>
          <button className="btn btn-primary btn-sm" onClick={() => setShow(true)}>View cart</button>
        </div>
      </div>
    </header>
  )
};

//Product list component
const ProductList = ({ addToCart }) => { //add addToCart as a prop
  const products = [
    { name: 'Product 1', price: 10.99, size: ['PP','P','M'], image: 'https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-macacao-fechado-manga-comprida-tumblr--p-1656093927804.jpeg' },
    { name: 'Product 2', price: 19.99, size: ['PP','P','M'], image: 'https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-macacao-fechado-manga-comprida-tumblr--p-1673444046549.png' },
    { name: 'Product 3', price: 24.99, size: ['PP','P','M'], image: 'https://17741.cdn.simplo7.net/static/17741/sku/saia-saia-argola-sexy--p-1663959870905.jpeg' },
    { name: 'Product 4', price: 14.99, size: ['PP','P','M'], image: 'https://17741.cdn.simplo7.net/static/17741/sku/biquinis-biquini-fio-com-argola-1676509827180.jpeg' },
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
                    {product.size.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
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
const CartList = ({ cart, deleteItem, editQuantity }) => { //add deleteItem as a prop
  //calculate total value of cart
  const total = cart.reduce((acc, cur) => {
    if (cur.quantity > 0) { //block the option of add in the cart list if input is zero or empty
      return acc + cur.price * cur.quantity;
    }
    return acc;
  }, 0); //change reduce to include quantity in total calculation

  return (
    <div className="cart-list container my-4">
      {cart.map((product) => (
        <div className="cart-item row py-2" key={product.name}>
          <div className="col">{product.name} - {product.size}</div>
          <div className="col-auto">
            <input type="number" className="form-control" min="1" onChange={(e) => editQuantity(product, parseInt(e.target.value))} value={product.quantity} /> {/*add quantity input field*/}
          </div>
          <div className="col-auto">${(product.price * product.quantity).toFixed(2)}</div> {/*display product price with 2 decimal places*/}
          <div className="col-auto"><button className="btn btn-primary" onClick={() => deleteItem(product)}>Delete</button></div> {/*add delete button*/}
        </div>
      ))}
      <div className="cart-item row py-2">
        <div className="col font-weight-bold">Total</div>
        <div className="col-auto font-weight-bold">${total.toFixed(2)}</div> {/*display total value of cart with 2 decimal places*/}
      </div>
    </div>
  );
};

//Main component
const WhatsAppButton = ({ message }) => {
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappLink} className="btn btn-success" target="_blank" rel="noopener noreferrer">
      Send WhatsApp message
    </a>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  const addToCart = (product) => {
    let itemIndex = cart.findIndex((item) => item.name === product.name && item.size === product.size);
    
    if (itemIndex === -1) {
      setCart([...cart, product]);
    } else {
      let newCart = [...cart];
      newCart[itemIndex].quantity = product.quantity;
      setCart(newCart);
    }
  };

  const deleteItem = (product) => {
    let itemIndex = cart.findIndex((item) => item.name === product.name && item.size === product.size);
    let newCart = [...cart];
    newCart.splice(itemIndex, 1);
    setCart(newCart);
  }

  const editQuantity = (product, newQuantity) => { //add function to edit quantity
    let itemIndex = cart.findIndex((item) => item.name === product.name && item.size === product.size);
    let newCart = [...cart];
    if (newQuantity > 0) {
      newCart[itemIndex].quantity = newQuantity;
    } else {
      newCart.splice(itemIndex, 1);
    }
    setCart(newCart);
  }

  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <div className="App">
      <Header cart={cart} setShow={setShow} /> {/*add setShow to Header props*/}
      <ProductList addToCart={addToCart} />
      <Modal show={show} onHide={() => setShow(false)}> 
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CartList cart={cart} deleteItem={deleteItem} editQuantity={editQuantity} /> {/*add editQuantity to Cart List props*/}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={() => setShow(false)}>Close</button>
        </Modal.Footer>
        <WhatsAppButton message={`Hello! Welcome to Shopez! Here is the list of products you have in your cart and their total value: ${ cart.map((item) => `${item.name} - ${item.quantity} - $${item.price * item.quantity}`).join(', ') }. Total Value: $${totalPrice}`} />
      </Modal>
    </div>
  );
};

export default App;