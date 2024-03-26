import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-sm);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

export const Input = styled.input`
  background: var(--color-base-white);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-xs);
  color: var(--color-gray-300);
  padding: var(--spacing-sm) var(--spacing-xs);
  outline: none;

  &::placeholder {
    color: inherit;
    font-size: 12px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  font-size: 12px;
  color: var(--color-gray-500);

  p {
    color: red;
    margin-bottom: var(--spacing-md);
  }
`;

export const Action = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;