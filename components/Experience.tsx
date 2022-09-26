import React from 'react';
import { motion } from 'framer-motion';

import ExperienceCard from './ExperienceCard';

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full component_top_level"
    >
      <h3 className="heading_h3">Experience</h3>
      <div className="flex w-full p-10 space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default Experience;
