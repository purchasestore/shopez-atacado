import React from 'react';
import PropTypes from 'prop-types';

const WhatsAppButton = ({ message }) => {
  const whatsappLink = `https://wa.me/+5511913335676?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappLink} 
      className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-lg transition duration-200"
      target="_blank" 
      rel="noopener noreferrer"
    >
      Mandar mensagem WhatsApp
    </a>
  );
};

export default WhatsAppButton;

WhatsAppButton.propTypes = {
  message: PropTypes.string.isRequired,
};
