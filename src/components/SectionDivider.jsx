const SectionDivider = () => {
  return (
    <div className="flex items-center justify-center my-16 md:my-20 w-full px-4 overflow-hidden select-none">
      {/* Left Fading Divider Line */}
      <div className="h-[1px] w-1/4 max-w-[150px] bg-gradient-to-r from-transparent to-vintage-gold/20" />
      
      {/* Wreath Camera divider */}
      <div className="mx-6 relative animate-float-slow flex items-center justify-center" aria-hidden="true">
        <svg
          width="100"
          height="100"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-95 drop-shadow-[0_4px_10px_rgba(62,42,30,0.15)]"
        >
          {/* Circular Leaf Wreath Branches */}
          <path d="M40 92 C23 82, 17 60, 23 44 C29 28, 45 18, 60 18" stroke="#435E49" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M80 92 C97 82, 103 60, 97 44 C91 28, 75 18, 60 18" stroke="#435E49" strokeWidth="1.75" strokeLinecap="round" />

          {/* Leaf Accents (Left Branch) */}
          <path d="M28 80 C24 78, 22 71, 25 67 C28 67, 30 73, 28 80 Z" fill="#587E60" />
          <path d="M21 59 C17 59, 16 53, 20 49 C24 49, 25 55, 21 59 Z" fill="#587E60" />
          <path d="M27 39 C25 35, 27 29, 32 29 C34 33, 32 39, 27 39 Z" fill="#587E60" />
          <path d="M42 22 C42 18, 48 17, 51 21 C51 25, 45 26, 42 22 Z" fill="#587E60" />

          {/* Leaf Accents (Right Branch) */}
          <path d="M92 80 C96 78, 98 71, 95 67 C92 67, 90 73, 92 80 Z" fill="#587E60" />
          <path d="M99 59 C103 59, 104 53, 100 49 C96 49, 95 55, 99 59 Z" fill="#587E60" />
          <path d="M93 39 C95 35, 93 29, 88 29 C86 33, 88 39, 93 39 Z" fill="#587E60" />
          <path d="M78 22 C78 18, 72 17, 69 21 C69 25, 75 26, 78 22 Z" fill="#587E60" />

          {/* Detailed Pink Flowers with Gold Centers */}
          {/* Flower 1 (bottom left) */}
          <circle cx="34" cy="86" r="5" fill="#E89999" />
          <circle cx="30" cy="83" r="3" fill="#FBC1C1" />
          <circle cx="38" cy="83" r="3" fill="#FBC1C1" />
          <circle cx="30" cy="89" r="3" fill="#FBC1C1" />
          <circle cx="38" cy="89" r="3" fill="#FBC1C1" />
          <circle cx="34" cy="86" r="1.5" fill="#E5C158" />

          {/* Flower 2 (bottom right) */}
          <circle cx="86" cy="86" r="5" fill="#E89999" />
          <circle cx="82" cy="83" r="3" fill="#FBC1C1" />
          <circle cx="90" cy="83" r="3" fill="#FBC1C1" />
          <circle cx="82" cy="89" r="3" fill="#FBC1C1" />
          <circle cx="90" cy="89" r="3" fill="#FBC1C1" />
          <circle cx="86" cy="86" r="1.5" fill="#E5C158" />

          {/* Flower 3 (top center) */}
          <circle cx="60" cy="16" r="5" fill="#E89999" />
          <circle cx="56" cy="13" r="3" fill="#FBC1C1" />
          <circle cx="64" cy="13" r="3" fill="#FBC1C1" />
          <circle cx="56" cy="19" r="3" fill="#FBC1C1" />
          <circle cx="64" cy="19" r="3" fill="#FBC1C1" />
          <circle cx="60" cy="16" r="1.5" fill="#E5C158" />

          {/* Vintage Rangefinder Camera Body in center */}
          <rect x="36" y="47" width="48" height="28" rx="2.5" fill="#1F1F1F" />
          {/* Leather wrap middle */}
          <rect x="36" y="52" width="48" height="18" fill="#3A251A" />
          {/* Metallic Top Plate */}
          <path d="M36 49.5 C36 48, 37 47, 38.5 47 L81.5 47 C83 47, 84 48, 84 49.5 L84 52 L36 52 Z" fill="#CDCDCD" />
          <line x1="36" y1="52" x2="84" y2="52" stroke="#8A8A8A" strokeWidth="0.5" />
          
          {/* Viewfinder details */}
          <rect x="74" y="49" width="6" height="3.5" fill="#3D3D3D" rx="0.5" />
          <rect x="52" y="49" width="4" height="2.5" fill="#2B2B2B" />
          
          {/* Dials & Buttons on top */}
          <rect x="40" y="43" width="6" height="4" fill="#B3B3B3" />
          <rect x="71" y="44" width="7" height="3" fill="#B3B3B3" />
          <circle cx="80" cy="45" r="1.5" fill="#999999" />
          
          {/* Red Leica-style Dot Logo */}
          <circle cx="44" cy="57" r="2.5" fill="#D32F2F" />

          {/* Camera Lens */}
          <circle cx="60" cy="62" r="12" fill="#E8E8E8" stroke="#AEAEAE" strokeWidth="0.5" />
          <circle cx="60" cy="62" r="10.5" fill="#1F1F1F" stroke="#DFB56C" strokeWidth="0.5" />
          <circle cx="60" cy="62" r="8" fill="#0D0D0D" />
          <path d="M56 59 C58 56.5, 62 56.5, 64 59" stroke="rgba(0, 229, 255, 0.45)" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      </div>

      {/* Right Fading Divider Line */}
      <div className="h-[1px] w-1/4 max-w-[150px] bg-gradient-to-l from-transparent to-vintage-gold/20" />
    </div>
  );
};

export default SectionDivider;
