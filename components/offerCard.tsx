import React from "react";
import { motion} from "framer-motion";

interface OfferCardProps {
  title: string;
  desc: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ title, desc }) => {
  return (
    <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
     className=" w-full min-h-[8rem] rounded-lg p-4 max-w-xs mx-auto text-white font-istok ">
      <h2 className="font-bold text-2xl mb-1">{title}</h2>
      <p className="text-base text-lg">{desc}</p>
    </motion.div>
  );
};

export default OfferCard;
