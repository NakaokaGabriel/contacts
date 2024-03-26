import React, { ButtonHTMLAttributes } from 'react';
import * as styled from './style';

export type ButtonProps = {
  children?: React.ReactNode | JSX.Element;
  text?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'none';
}

export function Button({ children, text, variant, ...props }: ButtonHTMLAttributes<ButtonProps> & ButtonProps) {
  return (
    <styled.Button variant={variant} {...props}>
      {children ?? text}
    </styled.Button>
  );
}