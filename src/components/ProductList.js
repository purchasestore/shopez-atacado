import React from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ addToCart }) => {
  const products = [
    { name: 'Product 1', price: 10.99, size: ['PP','P','M'], image: 'https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-macacao-fechado-manga-comprida-tumblr--p-1656093927804.jpeg', quantity: 0 },
    { name: 'Product 2', price: 19.99, size: ['PP','P','M'], image: 'https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-macacao-fechado-manga-comprida-tumblr--p-1673444046549.png', quantity: 0 },
    { name: 'Product 3', price: 24.99, size: ['PP','P','M'], image: 'https://17741.cdn.simplo7.net/static/17741/sku/saia-saia-argola-sexy--p-1663959870905.jpeg', quantity: 0 },
    { name: 'Product 4', price: 14.99, size: ['PP','P','M'], image: 'https://17741.cdn.simplo7.net/static/17741/sku/biquinis-biquini-fio-com-argola-1676509827180.jpeg', quantity: 0 },
  ];

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
                  <select className="form-control" id="size" onChange={(e) => addToCart({ ...product, size: e.target.value })}>
                    {product.size.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity</label>
                  <input type="number" className="form-control" id="quantity" min="1" onChange={(e) => {if (e.target.value > 0){ addToCart({ ...product, quantity: parseInt(e.target.value), size: e.target.parentNode.previousSibling.value })}}}/>
                </div>
                <button className="btn btn-primary" onClick={() => addToCart({ ...product, quantity: 1, size: product.size[0] })} disabled={!product.quantity}>Add to cart</button>
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