import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ addToCart }) => {
  const products = [
    {
      "name": "VESTIDO-MADRID-Preto",
      "color": ["Preto"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://acdn.mitiendanube.com/stores/004/178/209/products/9-fa2514abf75c459b9817267730200098-1024-1024.webp",
      ],
      "quantity": 0
    },
    {
      "name": "VESTIDO-MADRID-Branco",
      "color": ["Branco"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://acdn.mitiendanube.com/stores/004/178/209/products/5-cab1a38982e91ab53517267730188681-1024-1024.webp",
      ],
      "quantity": 0
    },
    {
      "name": "VESTIDO-MADRID-Nude",
      "color": ["Nude"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://acdn.mitiendanube.com/stores/004/178/209/products/3-06495147239a22397617267730197847-1024-1024.webp",
      ],
      "quantity": 0
    },
    {
      "name": "VESTIDO-MADRID-Vermelho",
      "color": ["Vermelho"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://acdn.mitiendanube.com/stores/004/178/209/products/7-63365da5ea5f9c912a17267730195844-1024-1024.webp",
      ],
      "quantity": 0
    },
    {
      "name": "VESTIDO-VEGAS-Preto",
      "color": ["Preto"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://acdn.mitiendanube.com/stores/004/178/209/products/20-d518cb3064af6b9e9017267722966997-1024-1024.webp",
      ],
      "quantity": 0
    },
    {
      "name": "VESTIDO-VEGAS-Branco",
      "color": ["Branco"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://acdn.mitiendanube.com/stores/004/178/209/products/13-8c840847b77ff4de5817267722960983-1024-1024.webp",
      ],
      "quantity": 0
    },
    {
      "name": "VESTIDO-VEGAS-Nude",
      "color": ["Nude"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://acdn.mitiendanube.com/stores/004/178/209/products/11-ed62fd88de8c04e88c17267722961035-1024-1024.webp",
      ],
      "quantity": 0
    },
    {
      "name": "VESTIDO-VEGAS-Vermelho",
      "color": ["Vermelho"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://acdn.mitiendanube.com/stores/004/178/209/products/16-42d83fbfb57a7b729717267722969132-1024-1024.webp",
      ],
      "quantity": 0
    },
    {
      "name": "Vest-Longo-Bojo-Romano-Preto",
      "color": ["Preto"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://acdn.mitiendanube.com/stores/004/178/209/products/vestidoromanopreto1-6512c2b61baa7fbbd417059484977005-1024-1024.webp",
      ],
      "quantity": 0
    },
    {
      "name": "Vest-Longo-Bojo-Romano-Branco",
      "color": ["Branco"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://acdn.mitiendanube.com/stores/004/178/209/products/1693828925edeed2a0d50e694ec5982e75ca14bc6b-9da70041ccb2e98c8617059485047261-1024-1024.webp",
      ],
      "quantity": 0
    },
    {
      "name": "Vest-Longo-Bojo-Romano-Nude",
      "color": ["Nude"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://acdn.mitiendanube.com/stores/004/178/209/products/vestidoromanonude1-78ce6b9101c823b0f217059484949564-1024-1024.webp",
      ],
      "quantity": 0
    },
    {
      "name": "Vest-Longo-Bojo-Romano-Vermelho",
      "color": ["Vermelho"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://acdn.mitiendanube.com/stores/004/178/209/products/design-sem-nome-2023-11-07t140524-655-5696174721ba27f32d17059486402963-1024-1024.webp",
      ],
      "quantity": 0
    },
    {
      "name": "Vestido-Agua-Viva-Preto",
      "color": ["Preto"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://acdn.mitiendanube.com/stores/004/178/209/products/design-quadrado-17-b8528586f206a3c4ad17265064827505-1024-1024.webp",
      ],
      "quantity": 0
    },
    {
      "name": "Vestido-Agua-Viva-Azul",
      "color": ["Azul"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://acdn.mitiendanube.com/stores/004/178/209/products/copia-de-design-sitemktplace-39-00c53c4ed55d9d1e0a17265064846531-1024-1024.webp",
      ],
      "quantity": 0
    },
    {
      "name": "Vestido-Agua-Viva-Nude",
      "color": ["Nude"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://acdn.mitiendanube.com/stores/004/178/209/products/bannermobile-d419e298fea0c9e2cf17320465871916-1024-1024.webp",
      ],
      "quantity": 0
    },
    {
      "name": "Vestido-Agua-Viva-Vermelho",
      "color": ["Vermelho"],
      "price": 40.00,
      "size": ["PP", "P", "M", "G"],
      "images": [
        "https://acdn.mitiendanube.com/stores/004/178/209/products/img_7265-db37ac9419d9836efa17320464731368-1024-1024.webp",
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
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div className="bg-white rounded-lg shadow-md overflow-hidden" key={product.name}>
            <div className="relative">
              <img
                src={product.images[selectedImageIndex[product.name] || 0]}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              {product.images.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  <button 
                    className="px-3 py-1 bg-black bg-opacity-50 text-white rounded-lg hover:bg-opacity-75 transition duration-200"
                    onClick={() => handleImageChange(product.name, 'prev')}
                  >
                    ←
                  </button>
                  <button 
                    className="px-3 py-1 bg-black bg-opacity-50 text-white rounded-lg hover:bg-opacity-75 transition duration-200"
                    onClick={() => handleImageChange(product.name, 'next')}
                  >
                    →
                  </button>
                </div>
              )}
            </div>
            <div className="p-4 space-y-4">
              <div className="flex justify-between items-start">
                <h5 className="text-lg font-semibold">{product.name}</h5>
                <span className="text-lg font-bold text-blue-600">R${product.price.toFixed(2)}</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label htmlFor={`color${product.name}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Cor
                  </label>
                  <select 
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                    id={`color${product.name}`} 
                    value={selectedColor[product.name] || product.color[0]} 
                    onChange={(e) => handleColorChange(product.name, e)}
                  >
                    {product.color.map((color) => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor={`size${product.name}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Tamanho
                  </label>
                  <select 
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                    id={`size${product.name}`} 
                    value={selectedSize[product.name] || product.size[0]} 
                    onChange={(e) => handleSizeChange(product.name, e)}
                  >
                    {product.size.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor={`quantity${product.name}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Quantidade
                  </label>
                  <input 
                    type="number" 
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                    id={`quantity${product.name}`} 
                    value={quantity[product.name] || ''} 
                    onChange={(e) => handleQuantityChange(product.name, e)} 
                  />
                </div>
              </div>

              <button 
                className={`w-full py-2 px-4 rounded-md transition duration-200 ${
                  quantity[product.name] > 0
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
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
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
