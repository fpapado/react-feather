import React from 'react';

export const MinusCircle = props => {
  const { purpose, color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="image"
      focusable="false"
      aria-hidden={purpose === 'decorative'}
      {...otherProps}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
};

MinusCircle.defaultProps = {
  color: 'currentColor',
  size: '24',
};
