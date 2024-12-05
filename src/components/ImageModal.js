import React from 'react';
import PropTypes from 'prop-types';

const ImageModal = ({ image, isOpen, onClose, productName }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full">
        <button 
          className="absolute -top-10 right-0 text-white text-xl hover:text-gray-300"
          onClick={onClose}
        >
          Fechar ×
        </button>
        <img 
          src={image} 
          alt={productName}
          className="w-full h-auto rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  image: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,
};

export default ImageModal; 