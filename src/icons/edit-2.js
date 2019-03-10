import React from 'react';

export const Edit2 = props => {
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
      <polygon points="16 3 21 8 8 21 3 21 3 16 16 3" />
    </svg>
  );
};

Edit2.defaultProps = {
  color: 'currentColor',
  size: '24',
};
