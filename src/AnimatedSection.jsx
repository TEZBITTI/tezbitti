import React from 'react';
import { motion } from 'framer-motion';

// Bu bileşeni kullanarak istediğin animasyonu kolayca yapabilirsin
const AnimatedSection = ({ children, x, y, amount }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: x || 0, y: y || 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true, amount: amount || 0.3 }} 
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;