'use client';

import React from 'react';

export const AnimatedGradientMesh = () => {
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
  
  if (!isDesktop) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden hidden md:block">
      <svg 
        className="w-full h-full" 
        viewBox="0 0 1200 800" 
        preserveAspectRatio="xMidYMid slice"
        style={{
          filter: 'blur(50px)',
        }}
      >
        {/* Animated gradient definitions - Much lighter */}
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 35, 102, 0.12)" />
            <stop offset="100%" stopColor="rgba(0, 35, 102, 0.02)" />
            <animate attributeName="y1" values="0%;100%;0%" dur="15s" repeatCount="indefinite" />
          </linearGradient>
          
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.08)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.02)" />
            <animate attributeName="x1" values="100%;0%;100%" dur="20s" repeatCount="indefinite" />
          </linearGradient>

          <radialGradient id="grad3">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.08)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
            <animate attributeName="r" values="30%;60%;30%" dur="18s" repeatCount="indefinite" />
          </radialGradient>
        </defs>

        {/* Animated shapes - Much lighter */}
        <circle cx="200" cy="150" r="300" fill="url(#grad1)" />
        <circle cx="1000" cy="600" r="400" fill="url(#grad2)" />
        <circle cx="600" cy="400" r="350" fill="url(#grad3)" />
        
        {/* Additional moving shapes - Much lighter */}
        <ellipse cx="100" cy="700" rx="400" ry="200" fill="rgba(0, 35, 102, 0.04)">
          <animate attributeName="cx" values="100;300;100" dur="25s" repeatCount="indefinite" />
        </ellipse>
        
        <ellipse cx="1100" cy="200" rx="350" ry="250" fill="rgba(59, 130, 246, 0.03)">
          <animate attributeName="cy" values="200;400;200" dur="22s" repeatCount="indefinite" />
        </ellipse>
      </svg>
    </div>
  );
};
