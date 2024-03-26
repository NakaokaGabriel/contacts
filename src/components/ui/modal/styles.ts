import styled from "styled-components";
import ReactModal from 'react-modal';

export const Modal = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 0);
  width: 100%;
`;

export const Wrapper = styled.div`
  background-color: var(--color-gray-100);
  max-width: 530px;
  margin: 0 auto;
  height: auto;
  margin: 0 auto;
  border-radius: var(--radius-md);
  overflow: hidden;

  @media screen and (max-width: 560px) {
    margin: 0 var(--spacing-lg);
  }
`;

export const Header = styled.header`
  padding: var(--spacing-lg) var(--spacing-lg) var(--spacing-2-sm);
  position: relative;
  width: 100%;

  h4 {
    font-weight: bold;
    color: var(--color-gray-900);
  }
`;

export const Close = styled.div`
  cursor: pointer;
  position: absolute;
  right: 62px;
  top: 50%;
  transform: translate3d(0, -30%, 0);
`;

export const Content = styled.section`
  padding:  var(--spacing-md) var(--spacing-lg);
  max-height: 400px;
  overflow-y: auto;
`;

export const Footer = styled.footer`
  padding:  var(--spacing-md) var(--spacing-lg);
`;
