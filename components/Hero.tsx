import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

interface HeroProps {
  onJoinClick: () => void;
}

export const Hero: React.FC<HeroProps> = React.memo(({ onJoinClick }) => {
  return (
    <section className="relative min-h-[100dvh] flex items-center px-4 sm:px-6 lg:px-12 py-16 md:py-20 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left order-1 lg:order-1"
        >
          {/* Project X Branding - centered/slightly right */}
          <div className="mb-8 flex flex-col items-center lg:items-start lg:pl-8 gap-3">
            <span className="pastel-lines font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
              Project X
            </span>
            <span className="text-sm sm:text-base md:text-lg text-gray-400 font-sans tracking-wide">
              Where creativity flows freely
            </span>
          </div>

          {/* Badge */}
          <div className="mb-6 flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-sans tracking-widest uppercase text-gray-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Waitlist Open
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.05] tracking-tight">
            Collaborate
            <br />
            <span className="italic gradient-text">without chaos.</span>
          </h1>

          {/* Subheading */}
          <p className="font-sans text-gray-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
            The fluid workspace for artists. Sync status, merge ideas, and create together in a space designed for flow.
          </p>

          {/* CTA Button with fluid gradient */}
          <div className="flex justify-center lg:justify-start">
            <motion.button
              onClick={onJoinClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="fluid-gradient-btn px-8 py-4 rounded-full font-sans font-semibold text-base text-white shadow-2xl"
            >
              Join Waitlist →
            </motion.button>
          </div>

          {/* Trust indicator */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex -space-x-2">
              {['#667eea', '#f093fb', '#4facfe'].map((color, i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-[#030303]" style={{ background: color }} />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              <span className="text-white font-medium">2,400+</span> artists joined
            </span>
          </div>
        </motion.div>

        {/* Right Side - iPhone Mockup (mobile: below content, desktop: right side) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-2 lg:order-2 flex justify-center lg:justify-end mt-8 lg:mt-0"
        >
          <div className="relative">
            {/* Reduced glows for performance */}
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full blur-[40px] opacity-40" style={{ background: '#ff6b6b' }} />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-[40px] opacity-40" style={{ background: '#48dbfb' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-[50px] opacity-30" style={{ background: '#5f27cd' }} />

            {/* iPhone Frame - Premium Titanium Style */}
            <div className="relative w-[260px] sm:w-[280px] md:w-[300px] h-[530px] sm:h-[570px] md:h-[610px] rounded-[50px] p-[3px] shadow-2xl"
              style={{ background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)' }}>

              {/* Inner frame with notch cutout */}
              <div className="relative w-full h-full bg-[#0a0a0a] rounded-[47px] overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-30 flex items-center justify-center gap-2 border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-gray-800" />
                  <div className="w-3 h-3 rounded-full bg-gray-800 ring-1 ring-gray-700" />
                </div>

                {/* Screen Content */}
                <div className="absolute inset-[2px] rounded-[44px] overflow-hidden bg-gradient-to-br from-[#0d0d0d] via-[#111] to-[#0a0a0a]">
                  {/* Colorful top accent */}
                  <div className="absolute top-0 left-0 right-0 h-32 opacity-30"
                    style={{ background: 'linear-gradient(180deg, rgba(255,107,107,0.3) 0%, rgba(72,219,251,0.2) 50%, transparent 100%)' }} />

                  <div className="p-5 pt-16 h-full flex flex-col relative z-10">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-4 text-[10px] text-gray-400">
                      <span className="font-medium">9:41</span>
                      <div className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3C7.46 3 3.34 4.78.29 7.67c-.18.18-.29.43-.29.71s.11.53.29.71l1.42 1.42c.39.39 1.02.39 1.41 0 2.17-2.17 5.15-3.51 8.46-3.51s6.29 1.34 8.46 3.51c.39.39 1.02.39 1.41 0l1.42-1.42c.18-.18.29-.43.29-.71s-.11-.53-.29-.71C20.66 4.78 16.54 3 12 3z" /></svg>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M2 22h20V2z" /></svg>
                        <div className="w-6 h-2.5 rounded-sm bg-green-400 relative">
                          <div className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-[2px] h-1.5 bg-green-400 rounded-r" />
                        </div>
                      </div>
                    </div>

                    {/* App Header with Avatar */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm ring-2 ring-white/10">
                        A
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm">Good evening, Aakash</h3>
                        <p className="text-gray-500 text-[11px]">3 active projects</p>
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="flex gap-2 mb-5">
                      <div className="flex-1 bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20 rounded-2xl p-3 text-center">
                        <div className="text-xl font-bold text-white">12</div>
                        <div className="text-[9px] text-purple-300/80 uppercase tracking-wide">Collabs</div>
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20 rounded-2xl p-3 text-center">
                        <div className="text-xl font-bold text-white">48</div>
                        <div className="text-[9px] text-blue-300/80 uppercase tracking-wide">Hours</div>
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-pink-500/20 to-pink-500/5 border border-pink-500/20 rounded-2xl p-3 text-center">
                        <div className="text-xl font-bold text-white">5</div>
                        <div className="text-[9px] text-pink-300/80 uppercase tracking-wide">Live</div>
                      </div>
                    </div>

                    {/* Projects */}
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-white text-xs font-medium">Recent Projects</h4>
                        <span className="text-purple-400 text-[10px]">See all</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { name: 'Neon Genesis', status: 'Live', gradient: 'from-purple-500 via-pink-500 to-red-500' },
                          { name: 'Aurora Dreams', status: 'Syncing', gradient: 'from-blue-500 via-cyan-400 to-teal-400' },
                          { name: 'Sunset Vibes', status: 'Draft', gradient: 'from-orange-500 via-amber-500 to-yellow-400' },
                        ].map((project, i) => (
                          <div key={i} className="flex items-center gap-3 p-2.5 bg-white/[0.02] rounded-xl border border-white/5 backdrop-blur">
                            <div className={`w-10 h-10 bg-gradient-to-br ${project.gradient} rounded-xl shadow-lg`} />
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-xs font-medium truncate">{project.name}</p>
                              <p className="text-gray-500 text-[10px]">Updated 2h ago</p>
                            </div>
                            <span className={`text-[9px] px-2 py-0.5 rounded-full ${project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                              project.status === 'Syncing' ? 'bg-blue-500/20 text-blue-400' :
                                'bg-gray-500/20 text-gray-400'
                              }`}>
                              {project.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Nav */}
                    <div className="flex justify-around items-center pt-3 mt-3 border-t border-white/5">
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="w-5 h-5 rounded-lg bg-white/10 flex items-center justify-center"><span className="text-[10px]">🏠</span></div>
                        <div className="w-1 h-1 rounded-full bg-purple-400" />
                      </div>
                      <div className="w-5 h-5 flex items-center justify-center opacity-40"><span className="text-sm">🔍</span></div>
                      <div className="w-10 h-10 -mt-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                        <span className="text-white text-lg">+</span>
                      </div>
                      <div className="w-5 h-5 flex items-center justify-center opacity-40"><span className="text-sm">💬</span></div>
                      <div className="w-5 h-5 flex items-center justify-center opacity-40"><span className="text-sm">👤</span></div>
                    </div>
                  </div>
                </div>

                {/* Screen edge highlight */}
                <div className="absolute inset-[2px] rounded-[44px] pointer-events-none border border-white/[0.05]" />
              </div>
            </div>

            {/* Reflection */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-20 blur-2xl opacity-15"
              style={{ background: 'linear-gradient(to bottom, rgba(147, 51, 234, 0.4), transparent)' }} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-[10px] text-gray-600 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-white/30 to-transparent" />
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
    </section>
  );
});

Hero.displayName = 'Hero';