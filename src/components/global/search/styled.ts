import styled from "styled-components";

export const Search = styled.nav`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  padding: var(--spacing-lg) var(--spacing-lg) var(--spacing-2-sm);
  cursor: text;
  position: relative;
`;

export const Input = styled.input`
  background: none;
  border: none;
  user-select: none;
  font-size: 16px;
  font-weight: 400;
  color: var(--color-gray-500);
  margin-left: var(--spacing-2-sm);
  padding-right: calc(var(--spacing-lg) + 8px);
  width: 100%;
  
  &::placeholder {
    font-size: inherit;
    font-weight: inherit;
    color: var(--color-gray-200);
  }

  &:focus {
    outline: none;
  }
`;

export const Close = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  right: calc(var(--spacing-lg) - 8px);
  top: 50%;
  transform: translate3d(0, -30%, 0);
`;