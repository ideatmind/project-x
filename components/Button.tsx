import React, { useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ButtonProps } from '../types';
import { Loader2 } from 'lucide-react';

// Smooth spring config for magnetic effect
const magneticSpring = {
  stiffness: 150,
  damping: 15,
  mass: 0.1,
};

export const Button: React.FC<ButtonProps> = React.memo(({
  children,
  variant = 'primary',
  className = '',
  isLoading,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  // Motion values for magnetic effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animations
  const springX = useSpring(x, magneticSpring);
  const springY = useSpring(y, magneticSpring);

  // Subtle rotation based on position
  const rotateX = useTransform(springY, [-10, 10], [2, -2]);
  const rotateY = useTransform(springX, [-10, 10], [-2, 2]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate distance from center (subtle magnetic effect)
    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;

    x.set(deltaX);
    y.set(deltaY);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const baseStyles = "relative px-8 py-3.5 rounded-full font-sans font-medium text-base tracking-normal flex items-center justify-center gap-2 overflow-hidden";

  const variants = {
    primary: "bg-white text-black",
    secondary: "bg-[#121212] border border-white/10 text-white",
    glass: "backdrop-blur-xl bg-white/5 border border-white/10 text-white"
  };

  return (
    <motion.button
      ref={ref}
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        scale: {
          type: "spring",
          stiffness: 400,
          damping: 20,
        }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {/* Shimmer effect overlay */}
      <motion.div
        className="absolute inset-0 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.2) 50%, transparent 80%)',
          backgroundSize: '200% 100%',
        }}
      />

      {/* Gradient border glow for primary */}
      {variant === 'primary' && (
        <motion.div
          className="absolute -inset-[2px] rounded-full opacity-0 -z-10"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, #b06ab3, #4568dc, #b06ab3)',
            filter: 'blur(8px)',
          }}
        />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            {children}
            <motion.span
              className="inline-block"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              →
            </motion.span>
          </>
        )}
      </span>
    </motion.button>
  );
});

Button.displayName = 'Button';