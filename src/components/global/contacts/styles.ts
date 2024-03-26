import { Button } from "@/components/ui/button";
import styled from "styled-components";

export const Container = styled.div`
  padding: var(--spacing-3-sm) var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3-sm);
  max-height: 400px;
  overflow-y: auto;
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-between;
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
`;

export const ButtonAction = styled(Button)`
  padding: 2px var(--spacing-lg);
  font-size: 10px;
`
