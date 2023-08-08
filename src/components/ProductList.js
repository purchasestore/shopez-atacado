import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ addToCart }) => {
  const products = [
  {
    "id": 1,
    "name": "MACACÃO FECHADO MANGA COMPRIDA TUMBLER",
    "price": 55,
    "size": [
      "PP",
      "P",
      "M"
    ],
    "image": "https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-macacao-fechado-manga-comprida-tumblr-p-1682695739526.png",
    "quantity": 0
  },
  {
    "id": 2,
    "name": "CONJUNTO SAIA COM FENDA + TOP MANGA LONGA",
    "price": 55,
    "size": [
      "PP",
      "P",
      "M"
    ],
    "image": "https://17741.cdn.simplo7.net/static/17741/sku/vestido-conjunto-saia-com-fenda-top-manga-longa-1673585159724.jpg",
    "quantity": 0
  },
  {
    "id": 4,
    "name": "VESTIDO LONGO VAZADO FRONTAL",
    "price": 55,
    "size": [
      "PP",
      "P",
      "M"
    ],
    "image": "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-longo-vazado-frontal-1673585259238.jpg",
    "quantity": 0
  },
  {
    "id": 6,
    "name": "VESTIDO LONGO TOP + SAIA FENDA",
    "price": 55,
    "size": [
      "PP",
      "P",
      "M"
    ],
    "image": "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-longo-top-saia-fenda-1671657585217.jpeg",
    "quantity": 0
  },
  {
    "id": 7,
    "name": "VESTIDO LONGO FENDA COM ARGOLA",
    "price": 55,
    "size": [
      "PP",
      "P",
      "M"
    ],
    "image": "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-longo-fenda-com-argola-1671117690491.jpeg",
    "quantity": 0
  },
  {
    "id": 8,
    "name": "VESTIDO ABERTO CINTURA FRANZIDO",
    "price": 55,
    "size": [
      "PP",
      "P",
      "M"
    ],
    "image": "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-aberto-cintura-franzid--p-1666364027814.jpeg",
    "quantity": 0
  }
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