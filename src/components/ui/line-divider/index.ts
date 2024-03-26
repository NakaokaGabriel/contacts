import styled from "styled-components";

export type LineDividerProps = {
  size?: 'full' | 'auto' | 'size';
};

const sizeStyle = {
  full: '100%',
  auto: 'auto',
}

export const LineDivider = styled.div<LineDividerProps>`
  background: var(--color-gray-200);
  height: 1px;
  width: ${props => props.size === 'size' ? props.size : sizeStyle[props.size ?? 'full'] as typeof sizeStyle};
`;