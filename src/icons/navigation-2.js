import React from 'react';

export const Navigation2 = props => {
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
      <polygon points="12 2 19 21 12 17 5 21 12 2" />
    </svg>
  );
};

Navigation2.defaultProps = {
  color: 'currentColor',
  size: '24',
};
