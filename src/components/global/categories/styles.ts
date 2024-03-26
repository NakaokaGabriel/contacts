import styled, { css } from "styled-components";

export const Categories = styled.div`
  display: flex;
  gap: var(--spacing-md);
  padding: var(--spacing-3-sm) var(--spacing-lg);
`;

export const Category = styled.button<{$menuactive?: boolean}>`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  gap: var(--spacing-sm);
  position: relative;

  
  ${(props) => props.$menuactive && css`
    &::after {
      content: '';
      position: absolute;
      bottom: -17px;
      left: 0;
      height: 3px;
      width: 100%;
      background: var(--color-blue-500);
    }
  `}

  ${(props) => css`
    color: var(${props.$menuactive ? '--color-blue-500' : '--color-gray-500'});
  `}
`;

export const Label = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const Size = styled.span`
  background: var(--color-gray-100);
  padding: var(--spacing-xs);
  border-radius: var(--radius-xs);
  font-size: 12px;
  font-weight: 300;
`;
