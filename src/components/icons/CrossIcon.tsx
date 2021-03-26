import React from 'react';

const CrossIcon: React.FC<{ className?: string }> = (props) => (
  <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M 3 100 L 130 100 L 130 3 C 130 1.343 131.343 0 133 0 L 167 0 C 168.657 0 170 1.343 170 3 L 170 100 L 297 100 C 298.657 100 300 101.343 300 103 L 300 137 C 300 138.657 298.657 140 297 140 L 170 140 L 170 397 C 170 398.657 168.657 400 167 400 L 133 400 C 131.343 400 130 398.657 130 397 L 130 140 L 3 140 C 1.343 140 0 138.657 0 137 L 0 103 C 0 101.343 1.343 100 3 100 Z"
      fill="currentColor"
    />
  </svg>
);

export default CrossIcon;
