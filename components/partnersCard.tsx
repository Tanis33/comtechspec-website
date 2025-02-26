import React from 'react';

interface PartnersCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const PartnersCard: React.FC<PartnersCardProps> = ({ image, title, description, link }) => {
  return (
    <a href={link} className="block p-4 max-w-xs bg-white rounded-xl border border-gray-200 shadow-md hover:bg-gray-100 bg-slate-100">
      <img className="rounded-t-lg w-full h-32 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900">{title}</h5>
        <p className=" font-normal text-slate-700">{description}</p>
      </div>
    </a>
  );
};

export default PartnersCard;