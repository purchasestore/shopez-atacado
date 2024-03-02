import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ addToCart }) => {
  const products = [
    {
      "name": "VEST-FAIXA-ALCINHA-VERMELHO",
      "color": ["VERMELHO"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://dcdn.mitiendanube.com/stores/004/178/209/products/62-d2931b23d9115afc9817072294729746-640-0.webp",
      ],
      "quantity": 0
    },
    {
      "name": "VEST-FAIXA-ALCINHA-PRETO",
      "color": ["PRETO"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://dcdn.mitiendanube.com/stores/004/178/209/products/66-78525afca968f3345f17072294737337-1024-1024.webp",
      ],
      "quantity": 0
    },
    {
      "name": "VEST-FAIXA-ALCINHA-BRANCO",
      "color": ["BRANCO"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://dcdn.mitiendanube.com/stores/004/178/209/products/63-8438ba0ebc54640d3217072294735135-640-0.webp",
      ],
      "quantity": 0
    },
    {
      "name": "CONJ-MISS-TOP-SAIA-VERMELHO",
      "color": ["VERMELHO"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://dcdn.mitiendanube.com/stores/004/178/209/products/whatsapp-image-2024-03-02-at-12-57-58-2-e07ffeaaff17f3bad217093959186104-640-0.webp",
      ],
      "quantity": 0
    },
    {
      "name": "CONJ-MISS-TOP-SAIA-PRETO",
      "color": ["PRETO"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://dcdn.mitiendanube.com/stores/004/178/209/products/whatsapp-image-2024-03-02-at-12-57-58-1-603bade1c6477965a617093959188420-640-0.webp",
      ],
      "quantity": 0
    },
    {
      "name": "CONJ-MISS-TOP-SAIA-BRANCO",
      "color": ["BRANCO"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://dcdn.mitiendanube.com/stores/004/178/209/products/whatsapp-image-2024-03-02-at-12-57-58-1f0b6b0d43add2cd4517093959192327-640-0.webp",
      ],
      "quantity": 0
    },
    {
      "name": "Conjunto Carnaval Top Torção Acinturado + Saia Tubinho-VERMELHO",
      "color": ["VERMELHO"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://dcdn.mitiendanube.com/stores/004/178/209/products/img_0242-2be936e753347dffce17066222561582-640-0.webp",
      ],
      "quantity": 0
    },
    {
      "name": "Conjunto Carnaval Top Torção Acinturado + Saia Tubinho-PRETO",
      "color": ["PRETO"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://dcdn.mitiendanube.com/stores/004/178/209/products/img_0440-697a45b1c516969dbe17066222558992-640-0.webp",
      ],
      "quantity": 0
    },
    {
      "name": "Conjunto Carnaval Top Torção Acinturado + Saia Tubinho-BRANCO",
      "color": ["BRANCO"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://dcdn.mitiendanube.com/stores/004/178/209/products/img_0556-81e246dc481eeecdf417066222564388-640-0.webp",
      ],
      "quantity": 0
    },
    {
      "name": "Plus Conjunto Carnaval Franzido Top Ajustável Manga longa + Saia Franzida-PRETO",
      "color": ["PRETO"],
      "price": 40.00,
      "size": ["G"],
      "images": [
        "https://dcdn.mitiendanube.com/stores/004/178/209/products/36-5150fd6ed2cabbabf117068578213550-640-0.webp",
      ],
      "quantity": 0
    },
    {
      "name": "Plus Conjunto Carnaval Franzido Top Ajustável Manga longa + Saia Franzida-BRANCO",
      "color": ["BRANCO"],
      "price": 40.00,
      "size": ["G"],
      "images": [
        "https://dcdn.mitiendanube.com/stores/004/178/209/products/29-ef711121f2af37752d17068578190101-1024-1024.webp",
      ],
      "quantity": 0
    },
    {
      "name": "Plus Conjunto Carnaval Franzido Top Ajustável Manga longa + Saia Franzida-VERMELHO",
      "color": ["VERMELHO"],
      "price": 40.00,
      "size": ["G"],
      "images": [
        "https://dcdn.mitiendanube.com/stores/004/178/209/products/32-d65f9646f75ca4361e17068578218575-640-0.webp",
      ],
      "quantity": 0
    },
    {
      "name": "Plus Conjunto Carnaval Franzido Top Ajustável Manga longa + Saia Franzida-NUDE",
      "color": ["NUDE"],
      "price": 40.00,
      "size": ["G"],
      "images": [
        "https://dcdn.mitiendanube.com/stores/004/178/209/products/25-289e3126cc9c4ae57317068578225904-640-0.webp",
      ],
      "quantity": 0
    },
    {
      "name": "Conjunto Carnaval Franzido Top Ajustável Manga longa + Saia Franzida-PRETO",
      "color": ["PRETO"],
      "price": 70.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://dcdn.mitiendanube.com/stores/004/178/209/products/52-026957c0ea7333c99317068568140505-640-0.webp",
      ],
      "quantity": 0
    },
    {
      "name": "Conjunto Carnaval Franzido Top Ajustável Manga longa + Saia Franzida-BRANCO",
      "color": ["BRANCO"],
      "price": 70.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://dcdn.mitiendanube.com/stores/004/178/209/products/58-e3a0872620d0e318d817068568140505-640-0.webp",
      ],
      "quantity": 0
    },
    {
      "name": "Conjunto Carnaval Franzido Top Ajustável Manga longa + Saia Franzida-VERMELHO",
      "color": ["VERMELHO"],
      "price": 70.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://dcdn.mitiendanube.com/stores/004/178/209/products/img_1017-53f66803c361c4504b17093967029614-640-0.webp",
      ],
      "quantity": 0
    },
    {
      "name": "Conjunto Carnaval Franzido Top Ajustável Manga longa + Saia Franzida-NUDE",
      "color": ["NUDE"],
      "price": 70.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://dcdn.mitiendanube.com/stores/004/178/209/products/55-57384d81c79d634a1417068568140519-640-0.webp",
      ],
      "quantity": 0
    },
    {
      "name": "VESTIDO-Floral-LONGO-PRETO",
      "color": ["PRETO"],
      "price": 70.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://dcdn.mitiendanube.com/stores/004/178/209/products/design-sem-nome-2023-12-05t132944-783-a899e30f40dff4372217059861157844-640-0.webp",
      ],
      "quantity": 0
    },
    {
      "name": "VESTIDO-Floral-LONGO-BRANCO",
      "color": ["BRANCO"],
      "price": 70.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://dcdn.mitiendanube.com/stores/004/178/209/products/design-sem-nome-2023-12-05t132815-696-259ea6ed790811801117059861154192-640-0.webp",
      ],
      "quantity": 0
    },
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
        "name": "CONJ-BUTTERFLY-TOP-SAIA-Branco",
        "color": [
            "BRANCO"
        ],
        "price": 40,
        "size": [
            "PP",
            "P",
            "M",
            "G"
        ],
        "images": [
            "https://dcdn.mitiendanube.com/stores/004/178/209/products/img_1438-d273db010a197b26ff17072633511445-640-0.webp"
        ],
        "quantity": 0
    },
    {
        "name": "CONJ-BUTTERFLY-TOP-SAIA-Nude",
        "color": [
            "Nude"
        ],
        "price": 40,
        "size": [
            "PP",
            "P",
            "M",
            "G"
        ],
        "images": [
            "https://dcdn.mitiendanube.com/stores/004/178/209/products/img_1619-b441153f7080ef895117072634961642-480-0.webp"
        ],
        "quantity": 0
    },
    {
        "name": "CONJ-BUTTERFLY-TOP-SAIA-Preto",
        "color": [
            "Preto"
        ],
        "price": 40,
        "size": [
            "PP",
            "P",
            "M",
            "G"
        ],
        "images": [
            "https://dcdn.mitiendanube.com/stores/004/178/209/products/img_1213-1-417a53996cabd8dc4d17072633520715-640-0.webp"
        ],
        "quantity": 0
    },
    {
        "name": "CONJ-BUTTERFLY-TOP-SAIA-Roxo",
        "color": [
            "Roxo"
        ],
        "price": 40,
        "size": [
            "PP",
            "P",
            "M",
            "G"
        ],
        "images": [
            "https://dcdn.mitiendanube.com/stores/004/178/209/products/img_1238-07ab158878dcd208de17072633519258-480-0.webp"
        ],
        "quantity": 0
    },
    {
        "name": "CONJ-BUTTERFLY-TOP-SAIA-Laranja",
        "color": [
            "Laranja"
        ],
        "price": 40,
        "size": [
            "PP",
            "P",
            "M",
            "G"
        ],
        "images": [
            "https://dcdn.mitiendanube.com/stores/004/178/209/products/img_1293-1-1560eabf9710dab1ee17072633511359-640-0.webp"
        ],
        "quantity": 0
    },
    {
      "name": "VEST-LONG-TOP-SAI-FEND - VERMELHO",
      "color": ["VERMELHO"],
      "price": 35.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-longo-top-saia-fenda-1705337201985.jpg"
      ],
      "quantity": 0
    },
    {
      "name": "VEST-LONG-TOP-SAI-FEND - NUDE",
      "color": ["NUDE"],
      "price": 35.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-longo-top-saia-fenda-1705337199849.jpg"
      ],
      "quantity": 0
    },
    {
      "name": "VEST-LONG-TOP-SAI-FEND - BRANCO",
      "color": ["BRANCO"],
      "price": 35.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-longo-top-saia-fenda-1705337197474.jpg"
      ],
      "quantity": 0
    },
    {
      "name": "VEST-LONG-TOP-SAI-FEND - PRETO",
      "color": ["PRETO"],
      "price": 35.00,
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
        "https://i.pinimg.com/474x/f0/d5/63/f0d56375bf1baa552d441ffd75f82efe.jpg",
      ],
      "quantity": 0
    },
    {
      "name": "BIQ-MARQUINHA-FIO-NUDE",
      "color": ["NUDE"],
      "price": 30.00,
      "size": ["PP", "P", "M", "G", "GG"],
      "images": [
        "https://i.pinimg.com/474x/dd/8a/43/dd8a435c829491a5d649e3f5cf603938.jpg"
      ],
      "quantity": 0
    },
    {
      "name": "BIQ-MARQUINHA-FIO-BRANCO",
      "color": ["BRANCO"],
      "price": 30.00,
      "size": ["PP", "P", "M", "G", "GG"],
      "images": [
        "https://i.pinimg.com/474x/74/bc/73/74bc73ba87ad269e8622b187d29cfe91.jpg"
      ],
      "quantity": 0
    },
    {
      "name": "BIQ-MARQUINHA-FIO-PRETO",
      "color": ["PRETO"],
      "price": 30.00,
      "size": ["PP", "P", "M", "G", "GG"],
      "images": [
        "https://i.pinimg.com/474x/da/ff/e4/daffe46ebccb3194a64a7b298560f1e7.jpg"
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
