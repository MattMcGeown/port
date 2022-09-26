import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="relative flex cursor-pointer group">
      {' '}
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale"
        src="https://frankrivero.github.io/assets/images/adobe-premiere-icon-1400x1400-77.png"
      />
      <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:w-28 md:h-28 xl:w-32 xl:h-32">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
