import React from 'react';

export const AlertCircle = props => {
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
      role="img"
      focusable="false"
      aria-hidden={purpose === 'decorative'}
      {...otherProps}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12" y2="16" />
    </svg>
  );
};

AlertCircle.defaultProps = {
  color: 'currentColor',
  size: '24',
};
