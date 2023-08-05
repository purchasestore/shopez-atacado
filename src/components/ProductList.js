import React, { useState } from 'react';
import PropTypes from 'prop-types';
import image1 from '../images/product_1.jpeg';
import image2 from '../images/product_2.png';
import image3 from '../images/product_3.png';

const ProductList = ({ addToCart }) => {
  const products = [{"id": 1, "name": "Copo da Felicidade - Peso: 300g", "price": 15.0, "size": ["Morango", "Chocolate", "Maçã", "Maracujá", "Abacaxi com Côco", "Banana", "Paçoca" ], "image": image1, "quantity": 0},
  {"id": 2, "name": "Docinhos - Peso: 30g", "price": 3.5, "size": ["Brigadeiro", "Branquinho", "Casadinho"], "image": image2, "quantity": 0},
  {"id": 3, "name": "Sagu - Peso 200g", "price": 8, "size": ["Pote"], "image": image3, "quantity": 0}];

  const [quantity, setQuantity] = useState({});
  const [selectedSize, setSelectedSize] = useState({});

  const handleQuantityChange = (id, e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setQuantity((prevQuantity) => ({ ...prevQuantity, [id]: value }));
    }
  };

  const handleSizeChange = (id, e) => {
    const value = e.target.value;
    setSelectedSize((prevSelectedSize) => ({ ...prevSelectedSize, [id]: value }));
  };

  return (
    <div className="container my-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-6 col-lg-4 mb-4" key={product.name}>
            <div className="card h-100">
              <img src={product.image} alt={product.name} className="card-img-top" style={{width: "100%", height: "auto"}} />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title">{product.name}</h3>
                <span className="product-price h5">R${product.price.toFixed(2)}</span>
                <div className="form-group">
                  <label htmlFor={`size${product.id}`}>Tamanho</label>
                  <select className="form-control" id={`size${product.id}`} value={selectedSize[product.id]} onChange={(e) => handleSizeChange(product.id, e)}>
                    {product.size.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor={`quantity${product.id}`}>Quantidade</label>
                  <input type="number" className="form-control" id={`quantity${product.id}`} min="1" value={quantity[product.id] || product.quantity} onChange={(e) => handleQuantityChange(product.id, e)} />
                </div>
                <button className="btn btn-primary" onClick={() => addToCart({ ...product, quantity: quantity[product.id] || product.quantity, size: selectedSize[product.id] || product.size[0] })} disabled={(quantity[product.id] || product.quantity) < 1}>Adicionar ao carrinho</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
};