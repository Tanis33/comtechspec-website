import React from 'react';
import { motion } from 'framer-motion';

interface CustomerCardProps {
  imageUrl: string;
  description: string;
  link: string;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ imageUrl, description, link }) => {
  return (
    <motion.a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="block max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-slate-700 p-2 font-istok mt-8 justify-center items-center"
    >
      <img className="w-full" src={imageUrl} alt={description} />
      <div className="px-6 py-4">
        <p className="text-white text-center font-bold  text-xl">{description}</p>
      </div>
    </motion.a>
  );
};

export default CustomerCard;