import React, { useState } from 'react';
import churchLogoImg from '../assets/images/rehoboth_seal_logo_1787820932945.jpg';

interface ChurchLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showRibbon?: boolean;
}

export const ChurchLogo: React.FC<ChurchLogoProps> = ({
  className = '',
  size = 'md'
}) => {
  const [imageError, setImageError] = useState(false);

  const pixelMap = {
    xs: 36,
    sm: 52,
    md: 80,
    lg: 140,
    xl: 220
  };

  const sizeMap = {
    xs: 'w-9 h-9',
    sm: 'w-13 h-13',
    md: 'w-20 h-20',
    lg: 'w-36 h-36',
    xl: 'w-48 h-48 sm:w-56 sm:h-56'
  };

  const px = pixelMap[size];

  if (!imageError) {
    return (
      <div 
        className={`relative inline-flex items-center justify-center shrink-0 select-none overflow-hidden rounded-full ${sizeMap[size]} ${className}`}
        style={{ width: `${px}px`, height: `${px}px`, minWidth: `${px}px`, minHeight: `${px}px`, maxWidth: `${px}px`, maxHeight: `${px}px` }}
      >
        <img
          src={churchLogoImg || '/logo.png'}
          alt="Rehoboth Prayer House Madapura Logo"
          width={px}
          height={px}
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          className="w-full h-full object-cover drop-shadow-md rounded-full"
        />
      </div>
    );
  }

  return (
    <div 
      className={`relative inline-flex flex-col items-center justify-center shrink-0 select-none ${sizeMap[size]} ${className}`}
      style={{ width: `${px}px`, height: `${px}px`, minWidth: `${px}px`, minHeight: `${px}px` }}
    >
      <svg
        viewBox="0 0 500 500"
        style={{ width: `${px}px`, height: `${px}px` }}
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="outerBronzeRim" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C9A063" />
            <stop offset="65%" stopColor="#8C6737" />
            <stop offset="90%" stopColor="#5C4120" />
            <stop offset="100%" stopColor="#3D2912" />
          </radialGradient>
          <radialGradient id="innerTealField" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2E6B68" />
            <stop offset="60%" stopColor="#1E4E4C" />
            <stop offset="100%" stopColor="#0F2B2A" />
          </radialGradient>
          <linearGradient id="embossGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5DC9F" />
            <stop offset="40%" stopColor="#C59B5F" />
            <stop offset="100%" stopColor="#7E5828" />
          </linearGradient>
          <path id="topMottoPath" d="M 125,230 A 155,155 0 0,1 375,230" fill="none" />
          <path id="mainChurchPath" d="M 68,250 A 182,182 0 1,1 432,250" fill="none" />
          <path id="bottomCityPath" d="M 370,290 A 175,175 0 0,1 130,290" fill="none" />
        </defs>
        <circle cx="250" cy="240" r="225" fill="url(#outerBronzeRim)" stroke="#2D1F10" strokeWidth="4" />
        <circle cx="250" cy="240" r="220" stroke="#F5DC9F" strokeWidth="2" strokeOpacity="0.6" fill="none" />
        <circle cx="250" cy="240" r="202" stroke="#4A3419" strokeWidth="3" fill="none" />
        <path d="M 110,240 A 165,165 0 0,1 390,240 L 372,240 A 147,147 0 0,0 128,240 Z" fill="#1A3F3D" opacity="0.75" />
        <text className="font-sans font-bold" fontSize="13" fill="#E8D19F" letterSpacing="4.5">
          <textPath href="#topMottoPath" startOffset="50%" textAnchor="middle">
            A HOUSE OF PRAYER FOR ALL NATIONS
          </textPath>
        </text>
        <text className="font-serif font-black" fontSize="24" fill="url(#embossGold)" letterSpacing="4">
          <textPath href="#mainChurchPath" startOffset="50%" textAnchor="middle">
            REHOBOTH PRAYER HOUSE
          </textPath>
        </text>
        <text className="font-serif font-black" fontSize="22" fill="url(#embossGold)" letterSpacing="6">
          <textPath href="#bottomCityPath" startOffset="50%" textAnchor="middle">
            MADAPURA • EST. 2021
          </textPath>
        </text>
        <circle cx="250" cy="235" r="140" fill="url(#innerTealField)" stroke="#D4A76A" strokeWidth="4" />
        <circle cx="250" cy="235" r="133" stroke="#133534" strokeWidth="2" fill="none" />
        <path d="M 250,132 C 242,142 238,154 246,162 C 251,167 257,162 254,154 C 262,165 258,175 250,178 C 240,175 236,162 245,150 C 248,145 250,138 250,132 Z" fill="url(#embossGold)" stroke="#5C4120" strokeWidth="1.5" />
        <path d="M 245,170 H 255 V 183 H 267 V 192 H 255 V 252 H 245 V 192 H 233 V 183 H 245 V 170 Z" fill="url(#embossGold)" stroke="#4A3419" strokeWidth="2" />
        <path d="M 250,188 L 295,225 V 285 H 205 V 225 Z" fill="none" stroke="url(#embossGold)" strokeWidth="5" strokeLinejoin="round" />
      </svg>
    </div>
  );
};
