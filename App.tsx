import React, { useState } from 'react';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { FeatureStatus } from './components/FeatureStatus';
import { FeatureMerge } from './components/FeatureMerge';
import { Marquee } from './components/Marquee';
import { WaitlistModal } from './components/WaitlistModal';
import { Button } from './components/Button';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="relative min-h-screen text-white selection:bg-purple-500/30">
      <Background />

      <Hero onJoinClick={openModal} />

      <div className="relative z-10 space-y-20 md:space-y-0">
        <FeatureStatus />
        <FeatureMerge />
      </div>

      <Marquee />

      <section className="py-20 md:py-32 px-4 md:px-6 flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl px-4"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight">Your studio is waiting.</h2>
          <Button onClick={openModal} variant="primary" className="mx-auto">
            Join Waitlist
          </Button>
        </motion.div>
      </section>

      <footer className="py-8 text-center text-gray-600 text-sm font-sans relative z-10 border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Project X. All rights reserved.</p>
      </footer>

      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
};

export default App;