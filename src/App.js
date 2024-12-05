import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import WhatsAppButton from './components/WhatsAppButton';
import Modal from './components/Modal';

const App = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  const addToCart = (product) => {
    let itemIndex = cart.findIndex((item) => 
      item.name === product.name && 
      item.size === product.size && 
      item.color === product.color
    );

    if (itemIndex === -1) {
      setCart([...cart, product]);
    } else {
      let newCart = [...cart];
      newCart[itemIndex].quantity += product.quantity; // Increment the quantity if the same item is added again
      setCart(newCart);
    }
  };

  const deleteItem = (product) => {
    let itemIndex = cart.findIndex((item) => 
      item.name === product.name && 
      item.size === product.size &&
      item.color === product.color
    );

    let newCart = [...cart];
    newCart.splice(itemIndex, 1);
    setCart(newCart);
  };

  const editQuantity = (product, newQuantity) => {
    let itemIndex = cart.findIndex((item) => 
      item.name === product.name && 
      item.size === product.size &&
      item.color === product.color
    );

    let newCart = [...cart];
    if (newQuantity > 0) {
      newCart[itemIndex].quantity = newQuantity;
    } else {
      newCart.splice(itemIndex, 1);
    }
    setCart(newCart);
  };

  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  const totalQuantity = cart.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  const isWhatsAppLinkActive = totalQuantity >= 10;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header cart={cart} setShow={setShow} />
      <ProductList addToCart={addToCart} cart={cart} />
      <Modal show={show} onClose={() => setShow(false)}>
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Carrinho</h3>
            <button 
              onClick={() => setShow(false)}
              className="text-gray-400 hover:text-gray-500"
            >
              ×
            </button>
          </div>
        </div>
        <div className="p-6">
          <CartList cart={cart} deleteItem={deleteItem} editQuantity={editQuantity} />
        </div>
        <div className="px-6 py-4 border-t border-gray-200 space-y-4">
          <button 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-200"
            onClick={() => setShow(false)}
          >
            Fechar
          </button>
          {isWhatsAppLinkActive ? (
            <WhatsAppButton 
              message={
                `Olá Larissa! Aqui está a minha lista de compras e o valor total:\n` + 
                `${cart.map((item) => `${item.name} - ${item.color} - ${item.size} - ${item.quantity} - R$${item.price * item.quantity}`).join('\n')}` + 
                `\nValor Total: R$${totalPrice}`
              } 
            />
          ) : (
            <button 
              className="w-full bg-gray-400 text-white py-2 rounded-lg cursor-not-allowed" 
              disabled
            >
              Mandar mensagem WhatsApp
            </button>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default App;
