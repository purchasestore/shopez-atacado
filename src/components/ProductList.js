import React, { useState } from 'react';
import PropTypes from 'prop-types';
import image1 from '../images/product_1.png';
import image2 from '../images/product_2.png';
import image3 from '../images/product_3.png';
import image4 from '../images/product_4.png';


const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Product 1', price: 10.99, size: ['PP','P','M'], image: image1, quantity: 0 },
    { id: 2, name: 'Product 2', price: 19.99, size: ['PP','P','M'], image: image2, quantity: 0 },
    { id: 3, name: 'Product 3', price: 24.99, size: ['PP','P','M'], image: image3, quantity: 0 },
    { id: 4, name: 'Product 4', price: 14.99, size: ['PP','P','M'], image: image4, quantity: 0 },
  ];

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
                <span className="product-price h5">${product.price.toFixed(2)}</span>
                <div className="form-group">
                  <label htmlFor={`size${product.id}`}>Size</label>
                  <select className="form-control" id={`size${product.id}`} value={selectedSize[product.id]} onChange={(e) => handleSizeChange(product.id, e)}>
                    {product.size.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor={`quantity${product.id}`}>Quantity</label>
                  <input type="number" className="form-control" id={`quantity${product.id}`} min="1" value={quantity[product.id] || product.quantity} onChange={(e) => handleQuantityChange(product.id, e)} />
                </div>
                <button className="btn btn-primary" onClick={() => addToCart({ ...product, quantity: quantity[product.id] || product.quantity, size: selectedSize[product.id] || product.size[0] })} disabled={(quantity[product.id] || product.quantity) < 1}>Add to cart</button>
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