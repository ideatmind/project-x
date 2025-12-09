import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Loader2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ModalProps, WaitlistFormData } from '../types';

const smoothSpring = { type: "spring", stiffness: 300, damping: 30 };

export const WaitlistModal: React.FC<ModalProps> = React.memo(({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<WaitlistFormData>({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const triggerConfetti = useCallback(() => {
    const end = Date.now() + 1000;
    const colors = ['#b06ab3', '#4568dc', '#ffffff', '#ec4899'];
    (function frame() {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors, zIndex: 9999 });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors, zIndex: 9999 });
      if (Date.now() < end) requestAnimationFrame(frame);
    }());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
    triggerConfetti();
    setTimeout(() => {
      onClose();
      setTimeout(() => { setStatus('idle'); setFormData({ name: '', email: '', phone: '' }); }, 500);
    }, 3000);
  };

  const handleChange = useCallback((field: keyof WaitlistFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose} className="fixed inset-0 bg-black/70 backdrop-blur-xl z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={smoothSpring}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-b from-[#101010] to-[#080808] border border-white/10 rounded-3xl p-8 w-full max-w-md shadow-[0_0_100px_rgba(147,51,234,0.15)] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            <motion.button onClick={onClose} whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:text-white transition-colors">
              <X size={16} />
            </motion.button>
            {status === 'success' ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-12 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={smoothSpring}
                  className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 border border-green-500/30"
                  style={{ boxShadow: '0 0 40px rgba(34, 197, 94, 0.3)' }}>
                  <Check className="text-green-400" size={36} />
                </motion.div>
                <h3 className="font-serif text-3xl mb-2">You're on the list.</h3>
                <p className="text-gray-400 font-sans">Keep an eye on your inbox.</p>
              </motion.div>
            ) : (
              <>
                <div className="mb-8 text-center">
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
                    <Sparkles size={12} className="text-purple-400" />
                    <span className="text-xs text-purple-300">Limited spots available</span>
                  </motion.div>
                  <h3 className="font-serif text-3xl mb-2">Secure your spot</h3>
                  <p className="text-gray-400 text-sm font-sans">Join the collective of artists building the future.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[{ id: 'name', label: 'Artist Name', type: 'text', placeholder: 'e.g. Pablo', required: true },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'art@gallery.com', required: true },
                  { id: 'phone', label: 'Phone (Optional)', type: 'tel', placeholder: '+1 000 000 0000', required: false }
                  ].map((field, i) => (
                    <motion.div key={field.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}>
                      <label htmlFor={field.id} className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">{field.label}</label>
                      <input id={field.id} type={field.type} required={field.required} placeholder={field.placeholder}
                        value={formData[field.id as keyof WaitlistFormData]} onChange={handleChange(field.id as keyof WaitlistFormData)}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all" />
                    </motion.div>
                  ))}
                  <motion.button type="submit" disabled={status === 'loading'}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(255,255,255,0.2)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-black font-bold font-display py-4 rounded-xl mt-6 transition-all flex items-center justify-center disabled:opacity-70">
                    {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Secure Spot →'}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

WaitlistModal.displayName = 'WaitlistModal';