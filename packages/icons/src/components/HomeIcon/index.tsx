import React from 'react';
import { Icon, type IconProps } from '../Icon';

export const HomeIcon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <Icon ref={ref} {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </Icon>
  );
}); 