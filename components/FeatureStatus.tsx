import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Activity, Sparkles } from 'lucide-react';

export const FeatureStatus: React.FC = React.memo(() => {
  const [isBusy, setIsBusy] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setIsBusy(prev => !prev), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative z-10">
      {/* Simple static glow - no animation */}
      <div
        className="absolute top-1/2 left-0 w-[40vw] h-[400px] -translate-y-1/2 rounded-full blur-[80px] pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4 md:mb-6">
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-xs font-medium text-purple-300 uppercase tracking-wider">Status Sync</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 leading-[1.1]">
            Are you <br />
            <span className="gradient-text">flowing or focusing?</span>
          </h2>
          <p className="font-sans text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            Stop the random DMs. Set your status to <span className="text-white font-medium">Deep Work</span> or <span className="text-white font-medium">Open to Collab</span>.
          </p>
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-500 font-sans">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] rounded-full border border-white/5">
              <Zap size={14} className="text-purple-400" /> Real-time sync
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] rounded-full border border-white/5">
              <Activity size={14} className="text-blue-400" /> Context aware
            </div>
          </div>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="w-full max-w-xs sm:max-w-sm bg-gradient-to-br from-[#1a1a1a]/90 to-[#0d0d0d]/90 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl">
            {/* Profile */}
            <div className="flex items-center gap-3 sm:gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center border-2 border-white/10">
                <span className="font-serif italic text-lg sm:text-xl text-white">P</span>
              </div>
              <div>
                <h3 className="text-white font-sans font-semibold text-sm sm:text-base">Pablo Picasso</h3>
                <p className="text-gray-500 text-xs sm:text-sm">Visual Artist</p>
              </div>
            </div>

            {/* Status */}
            <div className="bg-black/40 rounded-xl p-3 sm:p-4 flex items-center justify-between border border-white/5">
              <span className="text-gray-400 text-xs sm:text-sm font-medium">Status</span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={isBusy ? 'busy' : 'open'}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold"
                  style={{
                    backgroundColor: isBusy ? "rgba(239, 68, 68, 0.15)" : "rgba(34, 197, 94, 0.15)",
                    color: isBusy ? "#ef4444" : "#22c55e"
                  }}
                >
                  <span className={`w-2 h-2 rounded-full ${isBusy ? 'bg-red-500' : 'bg-green-500'}`} />
                  {isBusy ? "Deep Work" : "Open to Collab"}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

FeatureStatus.displayName = 'FeatureStatus';