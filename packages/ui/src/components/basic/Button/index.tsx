import React from 'react';
import type { ButtonHTMLAttributes } from 'react';
import './styles.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'text';
  /**
   * Button size
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether the button is in loading state
   * @default false
   */
  loading?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    variant = 'primary',
    size = 'medium',
    loading = false,
    disabled,
    className = '',
    ...props 
  }, ref) => {
    const classes = [
      'funky-button',
      `funky-button--${variant}`,
      `funky-button--${size}`,
      loading && 'funky-button--loading',
      className
    ].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="funky-button__loading">
            <svg
              className="funky-button__loading-icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="funky-button__loading-circle"
                cx="12"
                cy="12"
                r="10"
                fill="none"
                strokeWidth="3"
              />
            </svg>
          </span>
        ) : children}
      </button>
    );
  }
);

Button.displayName = 'Button'; 