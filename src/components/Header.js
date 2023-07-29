import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ cart, setShow }) => {
  const total = cart.reduce((acc, cur) => {
    if (cur.quantity > 0) {
      return acc + cur.price * cur.quantity;
    }
    return acc;
  }, 0);

  const totalQuantity = cart.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);


  return (
    <header className="bg-dark text-white fixed-top">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="company-name h3 mb-0">Purchase Atacado</div>
        <p className="mb-0">Mínimo 10 peças no atacado!</p>
        <div className="cart text-end">
          <span className="cart-count me-3">Você já selecionou: {totalQuantity} {totalQuantity === 1 ? 'item' : 'itens'}.</span>
          <span className="cart-total">Valor Total: R${total.toFixed(2)}</span>
            <button className="btn btn-primary btn-sm" onClick={() => setShow(true)}>
              Ver Carrinho
            </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  cart: PropTypes.array.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default Header;