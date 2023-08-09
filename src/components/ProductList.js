import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ addToCart }) => {
  const products = [
    {
      "name": "VESTIDO COLADO MANGA FLARE FENDA",
      "color": ["Preto", "Vermelho"],
      "size": ["PP", "P", "M", "G"],
      "price": 55.90,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-colado-manga-flare-fenda-1690670625878.jpeg",
      "quantity": 0
    },
    {
      "name": "MACACÃO VIRGÍNIA TOP SUPLEX",
      "color": ["Preto"],
      "size": ["PP", "P", "M", "G"],
      "price": 55.90,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-macacao-decotado-manga-longa-suplex-1690477910840.png",
      "quantity": 0
    },
    {
      "name": "VESTIDO LÃZINHA OMBRO A OMBRO",
      "color": ["Cinza", "Preto"],
      "size": ["PP", "P", "M", "G", "GG"],
      "price": 55.90,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-lazinha-ombro-a-ombro-1689086492234.jpeg",
      "quantity": 0
    },
    {
      "name": "VESTIDO MANGA ÚNICA COM FENDA GOLA DIAGONAL",
      "color": ["Preto"],
      "size": ["PP", "P", "M", "G", "GG"],
      "price": 44.50,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-manga-unica-com-fenda-gola-diagonal-1689086420243.jpeg",
      "quantity": 0
    },
    {
      "name": "CONJUNTO TOP MANGA LONGA + SAIA COM FENDA",
      "color": ["Preto", "Branco", "Vermelho", "Nude"],
      "size": ["PP", "P", "M", "G", "GG"],
      "price": 52.40,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/vestido-conjunto-saia-com-fenda-top-manga-longa-1689085146332.png",
      "quantity": 0
    },
    {
      "name": "CONJUNTO PAETÊ TOP CROPPED RETO ALCINHA + SAIA",
      "color": ["Preto"],
      "size": ["PP", "P", "M", "G"],
      "price": 44.90,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-conjunto-paete-top-cropped-reto-alcinha-saia-1689086350659.jpeg",
      "quantity": 0
    },
    {
      "name": "CONJUNTO LÃZINHA TOP E SAIA FENDA",
      "color": ["Preto", "Cinza"],
      "size": ["PP", "P", "M", "G", "GG"],
      "price": 55.00,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-plus-conjunto-lazinha-top-cropped-gola-quadrada-e-saia-fenda-1689096753147.png",
      "quantity": 0
    },
    {
      "name": "MACACÃO FECHADO MANGA COMPRIDA TUMBLR",
      "color": ["Preto"],
      "size": ["PP", "P", "M", "G", "GG"],
      "price": 59.90,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-macacao-fechado-manga-comprida-tumblr-p-1682695739526.png",
      "quantity": 0
    },
    {
      "name": "Vestido Lãzinha Manga Longa Cacharrel",
      "color": ["Preto", "Cinza"],
      "size": ["PP", "P", "M", "G"],
      "price": 40.00,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-lazinha-ombro-a-ombro-manga-longa-cacharrel-1686934895859.png",
      "quantity": 0
    },
    {
      "name": "VESTIDO LONGO FENDA COM ARGOLA",
      "color": ["Nude", "Preto", "Branco", "Vermelho"],
      "size": ["PP", "P", "M", "G", "GG"],
      "price": 44.50,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-longo-fenda-com-argola-1690822101969.png",
      "quantity": 0
    },
    {
      "name": "VESTIDO LONGO TOP + SAIA FENDA",
      "color": ["Preto", "Branco", "Vermelho", "Nude"],
      "size": ["PP", "P", "M", "G", "GG"],
      "price": 37.00,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-longo-top-saia-fenda-1690480891323.jpg",
      "quantity": 0
    },
    {
      "name": "Biquini fio frente única",
      "color": ["Preto", "azul", "pink", "laranja", "nude"],
      "size": ["PP", "P", "M", "G"],
      "price": 25.00,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/biquinis-biquini-fio-frente-unica-1666295902446.jpeg",
      "quantity": 0
    },
    {
      "name": "BIQUÍNI FIO COM ARGOLA",
      "color": ["Preto", "Laranja", "Pink", "Azul"],
      "size": ["PP", "P", "M", "G"],
      "price": 25.00,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/biquinis-biquini-fio-com-argola-1666286988971.jpeg",
      "quantity": 0
    },
    {
      "name": "Biquini Cortininha De Amarrar",
      "color": ["Pink", "Rosa-Bebê", "Preto", "Azul", "Laranja"],
      "size": ["PP", "P", "M", "G"],
      "price": 25.00,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/biquinis-biquini-cortininha-calcinha-de-amarrar-fio-1691423457455.jpeg",
      "quantity": 0
    }
  ]
  ;

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
                  <label htmlFor={`color${product.id}`}>Cor</label>
                  <select className="form-control" id={`color${product.id}`} value={selectedSize[product.id]} onChange={(e) => handleSizeChange(product.id, e)}>
                    {product.color.map((color) => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                </div>
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