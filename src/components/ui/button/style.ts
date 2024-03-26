import styled, { css } from "styled-components";
import { ButtonProps } from ".";
import { ButtonHTMLAttributes } from "react";

const styles = {
  primary: css`
    background: var(--color-blue-500);
    color: var(--color-base-white);
    padding: var(--spacing-2-sm) var(--spacing-3-lg);
    border: none;
  `,
  secondary: css`
    background: var(--color-gray-900);
    color: var(--color-base-white);
    padding: var(--spacing-2-sm) var(--spacing-3-lg);
    border: none;
  `,
  outline: css`
    background: transparent;
    color: var(--color-gray-500);
    border: 1px solid var(--color-gray-200);
    padding: var(--spacing-2-sm) var(--spacing-3-lg);
  `,
  none: css`
    background: transparent;
    border: none;
  `,
}

export const Button = styled.button<Omit<ButtonHTMLAttributes<ButtonProps> & ButtonProps, 'children'>>`
  font-weight: 400;
  font-size: 14;
  border-radius: var(--radius-2-sm);
  cursor: pointer;
  ${({ variant }) => styles[variant ?? 'primary']}
`;
