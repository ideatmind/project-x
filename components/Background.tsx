import React from 'react';

export const Background: React.FC = React.memo(() => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Deep black base */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Static aurora gradients - no animations for performance */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full blur-[100px] opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.25) 0%, transparent 70%)' }}
      />

      <div
        className="absolute top-[20%] right-[5%] w-[50vw] h-[50vw] rounded-full blur-[80px] opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)' }}
      />

      <div
        className="absolute -bottom-[15%] left-[20%] w-[60vw] h-[50vw] rounded-full blur-[100px] opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)' }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.4) 100%)' }}
      />
    </div>
  );
});

Background.displayName = 'Background';