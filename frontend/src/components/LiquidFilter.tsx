import React from 'react';

export default function LiquidFilter() {
  return (
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
      <defs>
        <filter id="liquid-filter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="liquid"
          />
          <feComposite in="SourceGraphic" in2="liquid" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
}
