import styled from "styled-components";

import { Button } from "@/components/ui/button";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-sm);
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: var(--spacing-md);
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

export const Name = styled.p`
  font-size: 14px;
  color: var(--color-gray-900);
  font-weight: 400;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2-sm);
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

export const Tag = styled.p`
  display: block;
  font-size: 1rem;
  background: var(--color-gray-900);
  width: max-content;
  padding: var(--spacing-xs) var(--spacing-sm);
  color: var(--color-base-white);
  border-radius: var(--radius-xs);
  font-size: 12px;
`;

export const Value = styled.span`
  display: block;
  font-size: 12px;
  color: var(--color-gray-500);
  font-weight: 600;
`;

export const Initials = styled.span`
  background: var(--color-gray-300);
  border-radius: var(--radius-rounded);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-weight: bold;
`;

export const Actions = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  justify-content: flex-end;
`;

export const ButtonAction = styled(Button)`
  font-size: 12px;
`
