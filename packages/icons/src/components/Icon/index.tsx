import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Icon size in pixels
   * @default 24
   */
  size?: number;
  /**
   * Icon color
   * @default 'currentColor'
   */
  color?: string;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', children, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {children}
      </svg>
    );
  }
); 