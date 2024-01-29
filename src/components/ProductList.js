import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ addToCart }) => {
  const products = [
    {
      "name": "CONJ-REVEILLON-TOP-SAIA-BRANCO",
      "color": ["BRANCO"],
      "price": 75.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-conjunto-reveillon-com-top-decotado-e-saia-com-amarracao-colecao-premium-1703614371521.png"
      ],
      "quantity": 0
    },
    {
      "name": "CONJ-REVEILLON-TOP-SAIA-ROSA",
      "color": ["ROSA"],
      "price": 75.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-conjunto-reveillon-com-top-decotado-e-saia-com-amarracao-colecao-premium-1703614394200.png"
      ],
      "quantity": 0
    },
    {
      "name": "CONJ-REVEILLON-TOP-SAIA - PRETO",
      "color": ["PRETO"],
      "price": 75.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-conjunto-reveillon-com-top-decotado-e-saia-com-amarracao-colecao-premium-1703614385513.png"
      ],
      "quantity": 0
    },
    {
      "name": "CONJ-REVEILLON-TOP-SAIA -NUDE",
      "color": ["NUDE"],
      "price": 75.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-conjunto-reveillon-com-top-decotado-e-saia-com-amarracao-colecao-premium-1703614362773.png"
      ],
      "quantity": 0
    },
    {
      "name": "VEST-LONG-TOP-SAI-FEND - VERMELHO",
      "color": ["VERMELHO"],
      "price": 30.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-longo-top-saia-fenda-1705337201985.jpg"
      ],
      "quantity": 0
    },
    {
      "name": "VEST-LONG-TOP-SAI-FEND - NUDE",
      "color": ["NUDE"],
      "price": 30.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-longo-top-saia-fenda-1705337199849.jpg"
      ],
      "quantity": 0
    },
    {
      "name": "VEST-LONG-TOP-SAI-FEND - BRANCO",
      "color": ["BRANCO"],
      "price": 30.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-longo-top-saia-fenda-1705337197474.jpg"
      ],
      "quantity": 0
    },
    {
      "name": "VEST-LONG-TOP-SAI-FEND - PRETO",
      "color": ["PRETO"],
      "price": 30.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-longo-top-saia-fenda-1705337195710.jpg"
      ],
      "quantity": 0
    },
    {
      "name": "VEST-LONGO-BOJO-ROMANO - NUDE",
      "color": ["NUDE"],
      "price": 45.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-longo-com-bojo-romano-1699378185659.png"
      ],
      "quantity": 0
    },
    {
      "name": "VEST-LONGO-BOJO-ROMANO - BRANCO",
      "color": ["BRANCO"],
      "price": 45.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-longo-com-bojo-romano-1699378182561.jpg"
      ],
      "quantity": 0
    },
    {
      "name": "VEST-LONGO-BOJO-ROMANO - PRETO",
      "color": ["PRETO"],
      "price": 45.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-longo-com-bojo-romano-1699378211552.png"
      ],
      "quantity": 0
    },
    {
      "name": "VEST-LONGO-BOJO-ROMANO-VERMELHO",
      "color": ["VERMELHO"],
      "price": 45.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-longo-com-bojo-romano-1699378142154.png"
      ],
      "quantity": 0
    },
    {
      "name": "CONJUNTO TOP MANGA LONGA- PRETO",
      "color": ["PRETO"],
      "price": 45.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/vestido-conjunto-saia-com-fenda-top-manga-longa-1697638142642.png"
      ],
      "quantity": 0
    },
    {
      "name": "CONJUNTO TOP MANGA LONGA- BRANCO",
      "color": ["BRANCO"],
      "price": 45.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/vestido-conjunto-saia-com-fenda-top-manga-longa-1697638183579.png"
      ],
      "quantity": 0
    },
    {
      "name": "CONJUNTO TOP MANGA LONGA- NUDE",
      "color": ["NUDE"],
      "price": 45.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/vestido-conjunto-saia-com-fenda-top-manga-longa-1697638153392.png"
      ],
      "quantity": 0
    },
    {
      "name": "CONJUNTO TOP MANGA LONGA-VERMELHO",
      "color": ["VERMELHO"],
      "price": 45.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/vestido-conjunto-saia-com-fenda-top-manga-longa-1697638194332.png"
      ],
      "quantity": 0
    },
    {
      "name": "BIQ-MARQUINHA-FIO- ROSA",
      "color": ["ROSA"],
      "price": 30.00,
      "size": ["PP", "P", "M", "G", "GG"],
      "images": [
        "https://i.pinimg.com/736x/9d/6e/7f/9d6e7f37c8a8d448e6f7e4106f87e679.jpg",
      ],
      "quantity": 0
    },
    {
      "name": "BIQ-MARQUINHA-FIO-NUDE",
      "color": ["NUDE"],
      "price": 30.00,
      "size": ["PP", "P", "M", "G", "GG"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/biquinis-kit-3-biquinis-de-marquinha-fita-com-fio-duplo--p-1696598601782.png"
      ],
      "quantity": 0
    },
    {
      "name": "BIQ-MARQUINHA-FIO-BRANCO",
      "color": ["BRANCO"],
      "price": 30.00,
      "size": ["PP", "P", "M", "G", "GG"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/biquinis-kit-3-biquinis-de-marquinha-fita-com-fio-duplo--p-1696598217895.png"
      ],
      "quantity": 0
    },
    {
      "name": "BIQ-MARQUINHA-FIO-PRETO",
      "color": ["PRETO"],
      "price": 30.00,
      "size": ["PP", "P", "M", "G", "GG"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/biquinis-biquini-de-marquinha-de-fita-fio-duplo-com-calcinha-1699552526534.png"
      ],
      "quantity": 0
    }
  ]
  ;

  const [quantity, setQuantity] = useState({});
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedColor, setSelectedColor] = useState({});
  const [selectedImageIndex, setSelectedImageIndex] = useState({});

  const handleQuantityChange = (name, e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity((prev) => ({ ...prev, [name]: value }));
  };

  const handleColorChange = (name, e) => {
    setSelectedColor((prev) => ({ ...prev, [name]: e.target.value }));
    resetQuantity(name);
  };

  const handleSizeChange = (name, e) => {
    setSelectedSize((prev) => ({ ...prev, [name]: e.target.value }));
    resetQuantity(name);
  };

  const resetQuantity = (name) => {
    setQuantity((prev) => ({ ...prev, [name]: 0 }));
  };

  const handleImageChange = (name, direction) => {
    setSelectedImageIndex((prevState) => {
      const currentIndex = prevState[name] || 0;
      const maxIndex = products.find((product) => product.name === name).images.length - 1;
      let newIndex = currentIndex;

      if (direction === 'next') {
        newIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
      } else {
        newIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
      }

      return { ...prevState, [name]: newIndex };
    });
  };

  return (
    <div className="container my-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-6 col-lg-4 mb-4" key={product.name}>
            <div className="card h-100">
              <div className="card-body">
                <div className="product-image-container">
                  <img
                    src={product.images[selectedImageIndex[product.name] || 0]}
                    alt={product.name}
                    className="card-img-top"
                    style={{ width: "100%", height: "auto" }}
                  />
                  {product.images.length > 1 && (
                    <>
                      <button className="btn btn-secondary" onClick={() => handleImageChange(product.name, 'prev')}>Previous</button>
                      <button className="btn btn-secondary" onClick={() => handleImageChange(product.name, 'next')}>Next</button>
                    </>
                  )}
                </div>
                <h5 className="card-title">{product.name}</h5>
                <span className="product-price h5">R${product.price.toFixed(2)}</span>
                <div className="form-group">
                  <label htmlFor={`color${product.name}`}>Color</label>
                  <select 
                    className="form-control" 
                    id={`color${product.name}`} 
                    value={selectedColor[product.name] || product.color[0]} 
                    onChange={(e) => handleColorChange(product.name, e)}
                  >
                    {product.color.map((color) => <option key={color} value={color}>{color}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor={`size${product.name}`}>Size</label>
                  <select 
                    className="form-control" 
                    id={`size${product.name}`} 
                    value={selectedSize[product.name] || product.size[0]} 
                    onChange={(e) => handleSizeChange(product.name, e)}
                  >
                    {product.size.map((size) => <option key={size} value={size}>{size}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor={`quantity${product.name}`}>Quantity</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    id={`quantity${product.name}`} 
                    value={quantity[product.name] || ''}
                    onChange={(e) => handleQuantityChange(product.name, e)} 
                  />
                </div>
                <button 
                  className="btn btn-primary" 
                  onClick={() => addToCart({ 
                    ...product, 
                    quantity: quantity[product.name] || 0, 
                    size: selectedSize[product.name] || product.size[0], 
                    color: selectedColor[product.name] || product.color[0] 
                  })}
                  disabled={!(quantity[product.name] > 0)}
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
