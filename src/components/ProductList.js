import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([
    { name: 'Product 1', price: 10.99, size: ['PP','P','M'], image: 'https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-macacao-fechado-manga-comprida-tumblr--p-1656093927804.jpeg', quantity: 0, id: 1 },
    { name: 'Product 2', price: 19.99, size: ['PP','P','M'], image: 'https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-macacao-fechado-manga-comprida-tumblr--p-1673444046549.png', quantity: 0, id: 2 },
    { name: 'Product 3', price: 24.99, size: ['PP','P','M'], image: 'https://17741.cdn.simplo7.net/static/17741/sku/saia-saia-argola-sexy--p-1663959870905.jpeg', quantity: 0, id: 3 },
    { name: 'Product 4', price: 14.99, size: ['PP','P','M'], image: 'https://17741.cdn.simplo7.net/static/17741/sku/biquinis-biquini-fio-com-argola-1676509827180.jpeg', quantity: 0, id: 4 },
  ]);

  const handleQuantityChange = (productId, e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      const updatedProducts = products.map(product => {
        if (product.id === productId) {
          product.quantity = value;
        }
        return product;
      });
      setProducts(updatedProducts);
    }
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
                  <label htmlFor="size">Size</label>
                  <select className="form-control" id="size">
                    {product.size.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity</label>
                  <input type="number" className="form-control" key={product.id} id={`quantity${product.id}`} min="1" value={product.quantity} onChange={(e) => handleQuantityChange(product.id, e)} />
                </div>
                <button className="btn btn-primary" onClick={() => addToCart({ ...product, quantity: product.quantity, size: document.getElementById('size').value })} disabled={product.quantity < 1}>Add to cart</button>
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