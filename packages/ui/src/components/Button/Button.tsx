import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { Theme } from '@funky/theme';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

interface StyledButtonProps extends ButtonProps {
  theme: Theme;
}

const getVariantStyles = (theme: Theme, variant: ButtonProps['variant'] = 'primary') => {
  switch (variant) {
    case 'secondary':
      return css`
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.text.primary};
      `;
    case 'outline':
      return css`
        background-color: transparent;
        border: 1px solid ${theme.colors.primary};
        color: ${theme.colors.primary};
        &:hover {
          background-color: ${theme.colors.primary};
          color: ${theme.colors.text.primary};
        }
      `;
    default:
      return css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.text.primary};
      `;
  }
};

const getSizeStyles = (theme: Theme, size: ButtonProps['size'] = 'md') => {
  switch (size) {
    case 'sm':
      return css`
        padding: ${theme.spacing.xs} ${theme.spacing.sm};
        font-size: ${theme.typography.fontSize.sm};
      `;
    case 'lg':
      return css`
        padding: ${theme.spacing.lg} ${theme.spacing.xl};
        font-size: ${theme.typography.fontSize.lg};
      `;
    default:
      return css`
        padding: ${theme.spacing.md} ${theme.spacing.lg};
        font-size: ${theme.typography.fontSize.base};
      `;
  }
};

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }: { theme: Theme }) => theme.borderRadius.DEFAULT};
  font-weight: ${({ theme }: { theme: Theme }) => theme.typography.fontWeight.medium};
  transition: ${({ theme }: { theme: Theme }) => theme.transition.colors};
  cursor: pointer;
  border: none;
  outline: none;
  width: ${({ fullWidth }: { fullWidth: boolean }) => (fullWidth ? '100%' : 'auto')};

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ theme, variant }: { theme: Theme; variant: ButtonProps['variant'] }) => getVariantStyles(theme, variant)}
  ${({ theme, size }: { theme: Theme; size: ButtonProps['size'] }) => getSizeStyles(theme, size)}

  @media (max-width: ${({ theme }: { theme: Theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }: { theme: Theme }) => theme.spacing.sm} ${({ theme }: { theme: Theme }) => theme.spacing.md};
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  onClick,
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}; 