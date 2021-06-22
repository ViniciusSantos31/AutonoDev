import React from 'react';
import { Container } from './styles/ButtonStyled';

export enum theme {
  primary = 'primary',
  secundary = 'secundary',
  rounded = 'rounded',
}

interface ownProps {
  icon?: any;
  theme?: keyof typeof theme;
  size?: string;
  className?: string;
  onClick?: () => any;
  disabled?: boolean;
}

const Button: React.FC<ownProps> = ({
  theme,
  children,
  className,
  size = '100%',
  onClick,
  disabled,
}) => {
  return (
    <Container
      className={className}
      theme={theme}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Container>
  );
};

export default Button;
