import React from 'react';

export const Play = props => {
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
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
};

Play.defaultProps = {
  color: 'currentColor',
  size: '24',
};
