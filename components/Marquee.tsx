import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const keywords = ["Sync", "Flow", "Create", "Merge", "Art", "Design", "Build", "Ship"];

const MarqueeWord: React.FC<{ word: string }> = React.memo(({ word }) => (
  <motion.span
    className="font-sans font-semibold text-3xl sm:text-4xl md:text-6xl lg:text-7xl uppercase select-none cursor-default"
    style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.4)', WebkitTextFillColor: 'transparent' }}
    whileHover={{ WebkitTextFillColor: 'rgba(255,255,255,0.1)', scale: 1.05 }}
  >
    {word}
    <span className="mx-8 md:mx-16 text-purple-500/30">✦</span>
  </motion.span>
));

MarqueeWord.displayName = 'MarqueeWord';

export const Marquee: React.FC = React.memo(() => {
  const words = useMemo(() =>
    [...keywords, ...keywords, ...keywords].map((word, i) => <MarqueeWord key={i} word={word} />), []);

  return (
    <div className="py-12 md:py-16 lg:py-24 relative overflow-hidden z-10">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-blue-900/5" />
      <div className="flex whitespace-nowrap mb-8">
        <motion.div animate={{ x: [0, '-50%'] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center" style={{ willChange: 'transform' }}>{words}</motion.div>
      </div>
      <div className="flex whitespace-nowrap opacity-50">
        <motion.div animate={{ x: ['-50%', 0] }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex items-center" style={{ willChange: 'transform' }}>{words}</motion.div>
      </div>
      <div className="absolute inset-y-0 left-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-[#030303] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-[#030303] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
});

Marquee.displayName = 'Marquee';