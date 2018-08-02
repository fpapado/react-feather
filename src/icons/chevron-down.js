import React from 'react';

export const ChevronDown = props => {
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
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
};

ChevronDown.defaultProps = {
  color: 'currentColor',
  size: '24',
};
