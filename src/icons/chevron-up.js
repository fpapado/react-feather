import React from 'react';

export const ChevronUp = props => {
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
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
};

ChevronUp.defaultProps = {
  color: 'currentColor',
  size: '24',
};
