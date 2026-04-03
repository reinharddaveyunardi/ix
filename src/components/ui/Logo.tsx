import React from 'react';

export const IxLogo = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer Vintage Frame */}
    <path 
      d="M50 2L98 50L50 98L2 50L50 2Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
    />
    <path 
      d="M50 8L92 50L50 92L8 50L50 8Z" 
      stroke="currentColor" 
      strokeWidth="0.5" 
      opacity="0.6" 
    />
    
    {/* Inner Decorative Circle */}
    <circle 
      cx="50" 
      cy="50" 
      r="30" 
      stroke="currentColor" 
      strokeWidth="0.5" 
      strokeDasharray="2 3"
    />
    
    {/* Top Star */}
    <path
      d="M50 16L51 21L56 22L51 23L50 28L49 23L44 22L49 21L50 16Z"
      fill="currentColor"
    />

    {/* The Letters IX */}
    <text 
      x="51" 
      y="55" 
      fontFamily="inherit" 
      fontSize="24" 
      fill="currentColor" 
      fontWeight="400" 
      textAnchor="middle" 
      letterSpacing="2"
      className="caslon italic"
    >
      IX
    </text>
    
    {/* Archival Text */}
    <text 
      x="50" 
      y="72" 
      fontFamily="inherit" 
      fontSize="5" 
      fill="currentColor" 
      textAnchor="middle" 
      letterSpacing="3" 
      opacity="0.6"
      className="caslon uppercase"
    >
      Archive
    </text>
  </svg>
);
