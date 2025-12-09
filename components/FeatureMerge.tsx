import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, GitMerge } from 'lucide-react';

export const FeatureMerge: React.FC = React.memo(() => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative z-10 overflow-hidden">
      {/* Simple static glow */}
      <div
        className="absolute top-1/2 right-0 w-[40vw] h-[400px] -translate-y-1/2 rounded-full blur-[80px] pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1 flex justify-center relative h-[280px] sm:h-[320px] md:h-[380px] items-center"
        >
          {/* Back Card */}
          <div className="absolute left-2 sm:left-4 md:left-8 top-4 sm:top-8 w-48 sm:w-56 md:w-64 h-36 sm:h-40 md:h-44 bg-gradient-to-br from-[#1a1a1a]/95 to-[#0f0f0f]/95 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <Layers size={16} className="text-blue-400" />
              </div>
              <span className="text-[10px] sm:text-xs text-blue-400/80 font-medium px-2 py-1 bg-blue-500/10 rounded-full">Incoming</span>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm sm:text-base md:text-lg">Remix Request</h4>
              <p className="text-gray-500 text-xs sm:text-sm">@dali wants to merge</p>
            </div>
          </div>

          {/* Front Card */}
          <div className="absolute right-2 sm:right-4 md:right-8 bottom-4 sm:bottom-8 w-48 sm:w-56 md:w-64 h-36 sm:h-40 md:h-44 bg-gradient-to-br from-[#151515] to-[#0a0a0a] border border-purple-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded" />
              </div>
              <span className="text-[10px] sm:text-xs text-purple-400 font-medium px-2 py-1 bg-purple-500/10 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Active
              </span>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm sm:text-base md:text-lg">Neon Genesis</h4>
              <p className="text-gray-500 text-xs sm:text-sm">Edited 2m ago</p>
            </div>
            <div className="w-full h-1 bg-black/40 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
            </div>
          </div>

          {/* Merge indicator */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
            <GitMerge size={12} className="text-green-400" />
            <span className="text-[10px] sm:text-xs text-green-400 font-medium">Ready to merge</span>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 md:mb-6">
            <GitMerge size={14} className="text-blue-400" />
            <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">Merge Requests</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 leading-[1.1]">
            Connection, <br />
            <span className="gradient-text">refined.</span>
          </h2>
          <p className="font-sans text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            Send collaboration requests that look like art. Approve with a click and merge seamlessly.
          </p>
          <div className="inline-flex items-center gap-2 text-white font-medium cursor-pointer group text-sm">
            <span className="underline-animation">See how it works</span>
            <ArrowRight size={16} className="text-purple-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      </div>
    </section>
  );
});

FeatureMerge.displayName = 'FeatureMerge';