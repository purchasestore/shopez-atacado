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
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-2xl font-bold">Purchase Atacado</div>
          <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm">Mínimo 10 peças no atacado!</p>
            <p className="text-sm">Entrega 24h</p>
            <p className="text-sm">Entrega por motoboy em SP capital - FRETE FIXO R$20</p>
            <p className="text-sm">Entregamos em excursões de SP capital</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <div className="text-sm">
              <span>Você já selecionou: {totalQuantity} {totalQuantity === 1 ? 'item' : 'itens'}</span>
              <span className="mx-2">|</span>
              <span>Valor Total: R${total.toFixed(2)}</span>
            </div>
            <button 
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-200"
              onClick={() => setShow(true)}
            >
              Ver Carrinho
            </button>
          </div>
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
