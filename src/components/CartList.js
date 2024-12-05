import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const CartList = ({ cart, deleteItem, editQuantity }) => {
  const total = cart.reduce((acc, cur) => {
    if (cur.quantity > 0) {
      return acc + cur.price * cur.quantity;
    }
    return acc;
  }, 0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="space-y-4">
      {cart.map((product) => (
        <div 
          className="flex items-center justify-between py-3 border-b border-gray-200" 
          key={`${product.name}-${product.color}-${product.size}`}
        >
          <div className="flex-1 pr-4">{product.name} - {product.color} - {product.size}</div>
          <div className="flex items-center space-x-4">
            <input 
              type="number" 
              className="w-20 px-2 py-1 border rounded focus:ring-blue-500 focus:border-blue-500" 
              min="1" 
              onChange={(e) => editQuantity(product, e.target.value)} 
              value={product.quantity} 
            />
            <div className="w-24 text-right">R${(product.price * product.quantity).toFixed(2)}</div>
            <button 
              className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition duration-200"
              onClick={() => deleteItem(product)}
            >
              Deletar
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center py-3 font-bold">
        <div>Total</div>
        <div>R${total.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CartList;

CartList.propTypes = {
  cart: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
  editQuantity: PropTypes.func.isRequired,
};
