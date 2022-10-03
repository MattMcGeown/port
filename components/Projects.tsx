import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="z-0 flex-col items-center max-w-full mx-auto overflow-hidden text-left component_top_level md:flex-row justify-evenly"
    >
      <h3 className="heading_h3">Projects</h3>
      <div className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {projects.map((project, i) => (
          <div
            className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 -mb-5 space-y-5 snap-center md:p-44"
            key={i}
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="w-96 h-96"
              src="https://images.unsplash.com/photo-1663877254454-5e669a7b27e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />
            <div className="max-w-6xl px-0 space-y-10 md:px-10">
              <h4 className="text-4xl font-semibold text-center">Case Study</h4>
              <p className="text-lg text-center md:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid voluptate eveniet placeat fugiat molestias assumenda
                corporis doloremque tempora omnis ducimus asperiores atque rem
                voluptatem fuga corrupti, quasi facilis explicabo aliquam.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
