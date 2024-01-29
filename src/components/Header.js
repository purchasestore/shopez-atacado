import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ cart, setShow }) => {
  const { total, totalQuantity } = cart.reduce((acc, cur) => {
    return {
      total: acc.total + (cur.quantity > 0 ? cur.price * cur.quantity : 0),
      totalQuantity: acc.totalQuantity + cur.quantity
    };
  }, { total: 0, totalQuantity: 0 });
  
  return (
    <header className="bg-dark text-white">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="company-name h3 mb-0">Purchase Atacado</div>
        <p className="mb-0">Mínimo 10 peças no atacado!</p>
        <p className="mb-0">Entrega 24h</p>
        <p className="mb-0">Entrega por motoboy em SP capital - FRETE FIXO R$20</p>
        <p className="mb-0">Entregamos em excursões de SP capital</p>
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
